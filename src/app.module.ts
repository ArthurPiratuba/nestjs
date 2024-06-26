import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CustomerModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
