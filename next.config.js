/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  // },
  headers: async () => {
    return [
      {
        source: "/Build/build.framework.js.gz",
        headers: [
          {
            key: "Content-Encoding",
            value: "gzip"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
