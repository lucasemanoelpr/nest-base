import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(pass, salt);

    const user = await this.usersService.findOne({
      email,
      password: passwordHashed,
    });

    if (!user) {
      return null;
    }
    const { password, ...result } = user;
    return result;
  }
}
