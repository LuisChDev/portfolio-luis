/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: "/public/gameBuild/Build/:slug",
        headers: [
          {
            key: "Content-Encoding",
            value: "br"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
