require("dotenv").config();

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },
};
