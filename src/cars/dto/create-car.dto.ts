import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MinLength(4)
  readonly model: string;

  @IsString()
  @MinLength(3)
  readonly brand: string;
}
