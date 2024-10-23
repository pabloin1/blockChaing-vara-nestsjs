import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  id_organization: number;

  @IsInt()
  id_Type_Event: number;
}

export class UpdateEventDto {
  @IsString()
  name?: string;

  @IsInt()
  id_organization?: number;

  @IsInt()
  id_Type_Event?: number;
}