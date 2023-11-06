import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    const isExistedRole = await this.roleRepository.exist({
      where: { name: createRoleDto.name },
    });
    if (isExistedRole) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'This role already existed.',
        },
        HttpStatus.CONFLICT,
        {
          cause: new ConflictException(),
        },
      );
    }
    const ROLE = new Role();
    ROLE.name = createRoleDto.name;
    return ROLE;
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
