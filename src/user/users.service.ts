import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async CreateUser(firstName: string,lastName: string,isActive:boolean): Promise<any> {
   const user =  await this.usersRepository.insert({firstName,lastName,isActive})
    return user
  }
  async remove(id: number): Promise<any> {
   const removedUser =  await this.usersRepository.delete(id);
    return "Deleted Successfully"
  }

   updateUser(id: number,body:any) :Promise<any> {
      const updatedUser = this.usersRepository.createQueryBuilder()
                            .update()
                            .set(body).
                            where('id = :id', { id })
                            .execute();
      return updatedUser
  }
}
