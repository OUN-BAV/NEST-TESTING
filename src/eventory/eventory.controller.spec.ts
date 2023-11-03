import { Test, TestingModule } from '@nestjs/testing';
import { EventoryController } from './eventory.controller';
import { EventoryService } from './eventory.service';

describe('EventoryController', () => {
  let controller: EventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventoryController],
      providers: [EventoryService],
    }).compile();

    controller = module.get<EventoryController>(EventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
