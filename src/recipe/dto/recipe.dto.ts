import { IsNotEmpty } from 'class-validator';

export class createRecipe {
  @IsNotEmpty({ message: 'Tidak Boleh kosong,' })
  title: string;

  slug?: string;

  image?: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong,' })
  summary: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong,' })
  instructions: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong,' })
  creator: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong,' })
  creator_email: string;
}
