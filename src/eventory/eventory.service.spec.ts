import { Test, TestingModule } from '@nestjs/testing';
import { EventoryService } from './eventory.service';

describe('EventoryService', () => {
  let service: EventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventoryService],
    }).compile();

    service = module.get<EventoryService>(EventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
