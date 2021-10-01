import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult, getConnection, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  async store(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.telephone = createUserDto.telephone;
    user.cellphone = createUserDto.cellphone;
    user.birthdate = createUserDto.birthdate;

    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await User.find();
  }

  async findOne(filters: any): Promise<User> {
    return await User.findOne(filters);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(updateUserDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number): Promise<User> {
    const user = await User.findOne(id);
    return await user.remove();
  }
}
