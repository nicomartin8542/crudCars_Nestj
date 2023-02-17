import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const brandSEED: Brand[] = [
  {
    id: uuid(),
    name: 'Ford',
    createdAt: new Date().getTime(),
  },

  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },

  {
    id: uuid(),
    name: 'Chjevrolet',
    createdAt: new Date().getTime(),
  },

  {
    id: uuid(),
    name: 'Peogeot',
    createdAt: new Date().getTime(),
  },

  {
    id: uuid(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
];
