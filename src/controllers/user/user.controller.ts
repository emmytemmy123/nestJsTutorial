import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRequest } from 'src/dtos/request/UserRequest/userRequest';
import { UserService } from 'src/services/user/user.service';


@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    getAllUsers() {

    }

    @Post()
    addUsers(@Body() request: UserRequest) {
        this.userService.addUsers(request);
    }




}
