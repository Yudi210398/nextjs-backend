import { Module } from '@nestjs/common';
import { PrismaPostgreService } from './prisma_postgre.service';

@Module({
  providers: [PrismaPostgreService],
  exports: [PrismaPostgreService],
})
export class PrismaPostgreModule {}
