import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserRequest } from 'src/dtos/request/UserRequest/loginUserRequest';
import { User } from 'src/entities/User';
import { UserRepository } from 'src/repository/UserRepository/UserRepository';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
         private userRepository: Repository<User>,

         @InjectRepository(UserRepository)
         private userRepositoryCustom: UserRepository,
    ) { }


    getAllUsers() {

    }

    addUsers(userDetails: LoginUserRequest) {
        const user = this.userRepository.create({
            ...userDetails,
            // createdAt: new Date(),
        });
        return this.userRepository.save(user);
    }




}
