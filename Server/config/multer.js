// config/multer.js
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from './cloudinary.js';

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'rentwell_images', // Folder name in Cloudinary
    allowedFormats: ['jpg', 'png', 'jpeg','avif'], // Allowed image formats
  },
});

const upload = multer({ storage }); // Initialize multer with Cloudinary storage

export default upload;
