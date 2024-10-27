import { IsNotEmpty } from 'class-validator';

export class createRecipe {
  @IsNotEmpty({ message: 'Tidak Boleh kosong title,' })
  title: string;

  slug?: string;

  image?: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong summary,' })
  summary: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong, instructions' })
  instructions: string;

  creator?: string;

  creator_email?: string;
}
