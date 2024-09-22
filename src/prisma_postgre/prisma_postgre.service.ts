import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaPostgreService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ errorFormat: 'pretty', log: ['info', 'warn', 'error', 'query'] });
  }
  async onModuleInit() {
    this.$connect()
      .then(() => console.log(`database konek`))
      .catch((err) => {
        console.log(err);
      });
  }
}
