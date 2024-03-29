import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ConsumablesService } from './consumables.service';
import Roles from '../decorators/roles.decorator';
import CreateConsumableDto from './dto/CreateConsumable.dto';
import UpdateConsumableDto from './dto/UpdateConsumable.dto';

@Controller('consumables')
export class ConsumablesController {
  constructor(private consumablesService: ConsumablesService) {}

  @Get()
  @Roles('all')
  getAll(@Query('used') used: boolean) {
    if (used) {
      return this.consumablesService.getUsed();
    }
    return this.consumablesService.getUnUsed();
  }

  @Get(':id')
  @Roles('all')
  getById(@Param('id') id: string) {
    return this.consumablesService.getById(id);
  }

  @Post()
  @Roles('all')
  add(@Body() dto: CreateConsumableDto) {
    return this.consumablesService.add(dto);
  }

  @Put()
  @Roles('all')
  update(@Body() dto: UpdateConsumableDto) {
    return this.consumablesService.update(dto);
  }

  @Delete(':id')
  @Roles('all')
  delete(@Param('id') id: string) {
    return this.consumablesService.delete(id);
  }
}
