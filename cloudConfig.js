const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary-v2');
// ✅ Configure Cloudinary with environment variables
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// ✅ Setup Multer Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wander_DEV", // Cloudinary folder name
        allowed_formats: ["jpeg", "png", "jpg","webp"], // ✅ fixed typo: allowerdFormats → allowed_formats
        
    }
});

module.exports = {
    cloudinary,
    storage
};
