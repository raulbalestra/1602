module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    // This is a slight override of the default middleware configuration
    // All of the settings are left as default except for the certain directives
    // Which enable preview of image thumbnails in the Strapi Media Library
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            // FIXME: This value should be parsed from the `CDN_URL` ENV variable
            'cdn.hoola.com', // Allows to display thumbnails in Strapi Media Library
            'cdn.wallpilates.com' // Allows to display thumbnails in Strapi Media Library
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            // FIXME: This value should be parsed from the `CDN_URL` ENV variable
            'cdn.hoola.com', // Allows to display thumbnails in Strapi Media Library
            'cdn.wallpilates.com' // Allows to display thumbnails in Strapi Media Library
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: "1024mb", // modify form body
      jsonLimit: "1024mb", // modify JSON body
      textLimit: "1024mb", // modify text body
      formidable: {
        maxFileSize: 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
