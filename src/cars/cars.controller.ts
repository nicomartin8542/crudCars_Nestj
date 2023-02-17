import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
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
  getCarById(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
    console.log({ id });
    return this.carsService.findOneCarsById(id);
  }

  //Create
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  //Update
  @Patch(':id')
  updateCar(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carsService.update(updateCarDto, id);
  }

  //Delete
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
