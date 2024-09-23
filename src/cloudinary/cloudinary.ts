import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: 'dymv3cmhq',
      api_key: '668146521133731',
      api_secret: 'XgsP4ZTsA1Zn0Ja6KjuhQwZ5piE',
    });
  },
};
