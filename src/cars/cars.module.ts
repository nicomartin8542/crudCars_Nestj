import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

//El modulo son los archivo que van a identificar cada parte de nuestro negocio, como por ejemplo ventas de auto
@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
