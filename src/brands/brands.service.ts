import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Ford',
    //   createdAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((b) => b.id === id);

    if (!brand) throw new NotFoundException('Brand not found');

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);

    this.brands = this.brands.map((b) => {
      if (b.id === id) {
        brand = {
          ...brand,
          ...updateBrandDto,
          id,
        };
        return brand;
      }

      return b;
    });

    return brand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands.filter((b) => b.id !== id);
  }

  populateBrandSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
