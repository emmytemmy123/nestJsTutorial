import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { UserModule } from './modules/user/user.module';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { LoginUserRequest } from './dtos/request/UserRequest/loginUserRequest';

@Module({
  imports: [TypeOrmModule.forRoot({
     type: 'mysql',
     host: 'localhost',
     port: 3306,
     username: 'root',
     password: 'emmytemmy123',
     database: 'nestJsTutorial',
     entities: [User],
     synchronize: false,
    }
  ), 
  UserModule,
],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
  // exports: [UserService] 

})
export class AppModule {}
