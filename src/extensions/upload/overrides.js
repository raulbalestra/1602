const _ = require("lodash");
const path = require("path");
const crypto = require('crypto');
const { extension } = require("mime-types");
const {
  sanitize,
  nameToSlug,
  contentTypes: contentTypesUtils,
  errors: { ApplicationError, NotFoundError },
  file: { bytesToKbytes },
} = require('@strapi/utils');


// This file overrides default formatFileInfo function from upload plugin
// it's purpose is to avoid name change for HLS files and maintain original file naming for all other files

const randomSuffix = () => crypto.randomBytes(5).toString('hex');

const generateFileName = (name) => {
  const baseName = nameToSlug(name, { separator: '_', lowercase: false });

  return `${baseName}_${randomSuffix()}`;
};

function filenameReservedRegex() {
  // eslint-disable-next-line no-control-regex
  return /[<>:"/\\|?*\u0000-\u001F]/g;
}

function windowsReservedNameRegex() {
  return /^(con|prn|aux|nul|com\d|lpt\d)$/i;
}

/**
 * Copied from https://github.com/sindresorhus/valid-filename package
 */
function isValidFilename(string) {
  if (!string || string.length > 255) {
    return false;
  }
  if (filenameReservedRegex().test(string) || windowsReservedNameRegex().test(string)) {
    return false;
  }
  if (string === '.' || string === '..') {
    return false;
  }
  return true;
}

/**
 * Overriding formatFileInfo function for upload plugin to
 * maintain original file naming.
 */
async function formatFileInfoOverride({ filename, type, size }, fileInfo = {}, metas = {}) {
  const fileService = strapi.plugin("upload").service("file")

  if (!isValidFilename(filename)) {
    throw new ApplicationError('File name contains invalid characters');
  }

  let ext = path.extname(filename);
  if (!ext) {
    ext = `.${extension(type)}`;
  }

  const usedName = (fileInfo.name || filename).normalize();
  const basename = path.basename(usedName, ext);

  // Prevent null characters in file name
  if (!isValidFilename(usedName)) {
    throw new ApplicationError('File name contains invalid characters');
  }

  const isHLSFile = ext === '.m3u8' || ext === '.ts';

  const entity = {
    name: usedName,
    alternativeText: fileInfo.alternativeText,
    caption: fileInfo.caption,
    folder: fileInfo.folder,
    folderPath: await fileService.getFolderPath(fileInfo.folder),
    hash: isHLSFile ? basename : generateFileName(basename),
    ext,
    mime: type,
    size: bytesToKbytes(size),
    sizeInBytes: size,
  };

  const { refId, ref, field } = metas;

  if (refId && ref && field) {
    entity.related = [
      {
        id: refId,
        __type: ref,
        __pivot: { field },
      },
    ];
  }

  if (metas.path) {
    entity.path = metas.path;
  }

  if (metas.tmpWorkingDirectory) {
    entity.tmpWorkingDirectory = metas.tmpWorkingDirectory;
  }

  return entity;
}

module.exports = { formatFileInfoOverride }