import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'corolla',
    // },
  ];

  findByCars() {
    return this.cars;
  }

  findOneCarsById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car not found for id: ${id}`);
    return car;
  }

  create(createCar: CreateCarDto) {
    if (this.cars.find((car) => car.model === createCar.model))
      throw new BadRequestException('Model already exists');

    const car: Car = {
      id: uuid(),
      // brand: createCar.brand,
      // model: createCar.model,
      ...createCar,
    };
    this.cars.push(car);

    return car;
  }

  update(updateCar: UpdateCarDto, id: string) {
    let carDB = this.findOneCarsById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCar,
          id,
        };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const carDB = this.findOneCarsById(id);
    this.cars = this.cars.filter((c) => c.id !== carDB.id);
  }

  populateCarSeed(cars: Car[]) {
    this.cars = cars;
  }
}
