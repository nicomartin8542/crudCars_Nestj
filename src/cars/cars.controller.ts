import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

// El controller es el archivo que va a contener todas las rutas de nuestro end-point
@Controller('cars')
export class CarsController {
  // Forma usual de hacer un constructor
  // private readonly carsService: CarsService;
  // constructor(carsService: CarsService) {
  //   this.carsService = carsService;
  // }

  //Nueva forma de hacer uin constructor

  constructor(private readonly carsService: CarsService) {}

  //Get car
  @Get()
  getMarcas() {
    return this.carsService.findByCars();
  }

  //Get car by id
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    return this.carsService.findOneCarsById(id);
  }

  //Create
  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  //Update
  @Patch(':id')
  updateCar(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return {
      id,
      body,
    };
  }

  //Delete
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      delete: true,
      id,
    };
  }
}
