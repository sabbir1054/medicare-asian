/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  base_url_frontend: process.env.BASE_URL_FRONTEND,
  base_url_backend: process.env.NEXT_PUBLIC_API_BASE_URL,
  api_link_Image: process.env.API_LINK_OF_IMAGE,
  email_host: {
    name: process.env.EMAIL_HOST_NAME,
    port: process.env.EMAIL_HOST_PORT,
    user: process.env.EMAIL_HOST_USER,
    password: process.env.EMAIL_HOST_PASSWORD,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};
