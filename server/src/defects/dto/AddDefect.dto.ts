import { IsString, IsUUID } from 'class-validator';

export default class AddDefectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  machineId: string;
}
