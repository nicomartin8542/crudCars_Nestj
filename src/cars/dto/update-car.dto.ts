import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  @MinLength(4)
  readonly model?: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly brand?: string;
}
