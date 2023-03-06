module.exports = {
  // ...
  "image-fix": {
    enabled: true,
    resolve: "./src/plugins/imagefix", // path to plugin folder
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: process.env.C1_backblaze_keyID,
          secretAccessKey: process.env.C2_backblaze_applicationKey,
          region: process.env.C3_backblaze_region,
          params: {
            Bucket: process.env.C4_backblaze_keyName,
          },
          endpoint: process.env.C5_endpoint, //workings
          baseUrl: process.env.C6_CDN,
        },
      },
    },
  },
  // ...
};
