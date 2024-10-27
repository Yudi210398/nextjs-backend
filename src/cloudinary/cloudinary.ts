import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: process.env.cloud_Name,
      api_key: process.env.api_key_cloud,
      api_secret: process.env.api_secret_cloud,
    });
  },
};
