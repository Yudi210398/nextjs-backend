import { Injectable } from '@nestjs/common';
import * as streamifier from 'streamifier';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadFile(
    file: Express.Multer.File,
  ): Promise<UploadApiErrorResponse | UploadApiResponse | string> {
    const uploadStream = (): Promise<UploadApiResponse> => {
      return new Promise((resolve, reject) => {
        const upload = v2.uploader.upload_stream(
          { folder: 'dummy' },
          (err, result) => {
            if (err) {
              return reject(err);
            }
            resolve(result);
          },
        );
        streamifier.createReadStream(file.buffer).pipe(upload);
      });
    };

    try {
      const result = await uploadStream();
      return result.url;
    } catch (error) {
      throw error;
    }
  }
}
