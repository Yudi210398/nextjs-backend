import {
  Body,
  Controller,
  Get,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { createRecipe } from './dto/recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private serviceRecipe: RecipeService) {}
  @Get()
  dataGet(): object {
    return this.serviceRecipe.sayHello();
  }

  @Get('menumakanan')
  async ambilData(): Promise<object> {
    return await this.serviceRecipe.getData();
  }

  @Patch('cari/:slug')
  async ambilDataId(@Param('slug') slug: string) {
    console.log(`kocak`, slug);
    return await this.serviceRecipe.getId(slug);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('image'))
  async postDataRecipe(
    @UploadedFile(new ParseFilePipe({})) file: Express.Multer.File,
    @Body() data: createRecipe,
  ) {
    return this.serviceRecipe.postData(data, file);
  }
}
