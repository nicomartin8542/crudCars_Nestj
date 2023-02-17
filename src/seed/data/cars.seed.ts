import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const carsSEED: Car[] = [
  {
    id: uuid(),
    model: 'Corolla',
    brand: 'Toyota',
  },

  {
    id: uuid(),
    model: 'Cruze',
    brand: 'Chevrollet',
  },
];
