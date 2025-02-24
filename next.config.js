/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  // },
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    NODEMAILER_PW: process.env.NODEMAILER_PW,
    NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL
  }
};

module.exports = nextConfig;
