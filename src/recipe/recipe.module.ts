import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { PrismaPostgreModule } from 'src/prisma_postgre/prisma_postgre.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [PrismaPostgreModule, CloudinaryModule],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
