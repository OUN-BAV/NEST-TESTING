import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoryDto } from './create-eventory.dto';

export class UpdateEventoryDto extends PartialType(CreateEventoryDto) {}
