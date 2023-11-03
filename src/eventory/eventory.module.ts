import { Module } from '@nestjs/common';
import { EventoryService } from './eventory.service';
import { EventoryController } from './eventory.controller';

@Module({
  controllers: [EventoryController],
  providers: [EventoryService]
})
export class EventoryModule {}
