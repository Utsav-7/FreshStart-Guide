module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 100000,
        },
      },
    },
    // ...
  });