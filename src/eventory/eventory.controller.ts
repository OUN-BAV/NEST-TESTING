import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventoryService } from './eventory.service';
import { CreateEventoryDto } from './dto/create-eventory.dto';
import { UpdateEventoryDto } from './dto/update-eventory.dto';

@Controller('eventory')
export class EventoryController {
  constructor(private readonly eventoryService: EventoryService) {}

  @Post()
  create(@Body() createEventoryDto: CreateEventoryDto) {
    return this.eventoryService.create(createEventoryDto);
  }

  @Get()
  findAll() {
    return this.eventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventoryDto: UpdateEventoryDto) {
    return this.eventoryService.update(+id, updateEventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoryService.remove(+id);
  }
}
