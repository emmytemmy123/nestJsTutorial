import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user/user.controller';
import { LoginUserRequest } from 'src/dtos/request/UserRequest/loginUserRequest';
import { UserRequest } from 'src/dtos/request/UserRequest/userRequest';
import { User } from 'src/entities/User';
import { UserRepository } from 'src/repository/UserRepository/UserRepository';
import { UserService } from 'src/services/user/user.service';

@Module({
    imports: 
    [TypeOrmModule.forFeature([User, UserRepository]),
    LoginUserRequest,
    UserRequest
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository],

}) 
export class UserModule {





}
