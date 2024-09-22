import { Controller, Get, Param, Patch } from '@nestjs/common';
import { RecipeService } from './recipe.service';

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
}
