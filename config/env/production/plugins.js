module.exports = ({ env }) => ({
  // The plugin is used to upload files from Strapi Media Library to AWS S3
  // This plugin should ONLY be enabled in production to avoid overwriting by accident
  upload: {
    config: {
      sizeLimit: 1000 * 1024 * 1024, // 1GB in bytes
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH'),
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'private'),
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
    },
  },
});