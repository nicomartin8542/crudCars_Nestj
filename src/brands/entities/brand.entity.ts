import { IsUUID } from 'class-validator';
export class Brand {
  id: string;
  name: string;

  createdAt: number;
  updatedAt?: string;
}
