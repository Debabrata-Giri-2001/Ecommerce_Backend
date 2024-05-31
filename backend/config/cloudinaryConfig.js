const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "devnix",
  api_key: "612734565428423",
  api_secret: "onVrrcd8RACqD4SlXZ6awBjW1ms"
});

module.exports = cloudinary;
