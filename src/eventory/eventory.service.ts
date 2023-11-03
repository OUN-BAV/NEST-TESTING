import { Injectable } from '@nestjs/common';
import { CreateEventoryDto } from './dto/create-eventory.dto';
import { UpdateEventoryDto } from './dto/update-eventory.dto';

@Injectable()
export class EventoryService {
  create(createEventoryDto: CreateEventoryDto) {
    return 'This action adds a new eventory';
  }

  findAll() {
    return `This action returns all eventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventory`;
  }

  update(id: number, updateEventoryDto: UpdateEventoryDto) {
    return `This action updates a #${id} eventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventory`;
  }
}
