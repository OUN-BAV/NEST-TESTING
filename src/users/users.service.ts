import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    if (await this.checkExistedUser(createUserDto.username)) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'This user already existed.',
        },
        HttpStatus.CONFLICT,
        {
          cause: new UnauthorizedException(),
        },
      );
    }

    const passEncryp: string = await bcrypt.hash(createUserDto.password, 12);
    const user: User = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = passEncryp;
    user.gender = createUserDto.gender;
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> | undefined {
    return this.usersRepository.findOneBy({ id });
  }

  async findByEmail(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const passEncryp: string = await bcrypt.hash(updateUserDto.password, 12);
    const user: User = new User();
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.username = updateUserDto.username;
    user.password = passEncryp;
    user.id = id;
    return this.usersRepository.save(user);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.usersRepository.delete({ id });
  }

  async checkExistedUser(username: string): Promise<boolean> {
    const isExistedUser = await this.usersRepository.exist({
      where: { username },
    });
    return isExistedUser;
  }
}
