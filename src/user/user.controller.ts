import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() { 
        return this.usersService.findAll()
    }

    @Post()
   async createUser (
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('isActive') isActive: boolean
    ) {
        const createdUser = await this.usersService.CreateUser(firstName, lastName,isActive)
        return createdUser
    }

    @Get(':id') 
    async findUser (@Param('id') id: number) {
        const user = await this.usersService.findOne(id)
        return user
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: number){
        const deleted= await this.usersService.remove(id)
        return deleted
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: any) {
        const updatedUser: any = await this.usersService.updateUser(id, body)
        return updatedUser;
      }
}