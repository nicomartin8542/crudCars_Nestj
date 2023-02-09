import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'corolla',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Mondeo',
    },
    {
      id: 3,
      brand: 'Chevrolet',
      model: 'Cruze',
    },
  ];

  findByCars() {
    return this.cars;
  }

  findOneCarsById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car not found for id: ${id}`);
    return car;
  }
}
