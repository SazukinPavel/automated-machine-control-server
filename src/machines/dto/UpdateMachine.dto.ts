import { IsString, IsUUID, IsBoolean } from 'class-validator';

export default class UpdateMachineDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  isActive: boolean;

  model: string;

  number: string;

  startYear: string;
}
