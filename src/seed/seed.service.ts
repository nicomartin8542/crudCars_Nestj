import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { brandSEED } from './data/brand.seed';
import { carsSEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  popupateDB() {
    this.carsService.populateCarSeed(carsSEED);
    this.brandService.populateBrandSeed(brandSEED);

    return 'SEED execute';
  }
}
