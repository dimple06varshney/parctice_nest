import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dimplevarshney06gmail.com',
    password: '',
    database: 'practice_nest',
    entities: [User],
    synchronize: true,
  }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
