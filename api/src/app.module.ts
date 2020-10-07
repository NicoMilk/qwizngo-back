import { QuestionModule } from './question/question.module';
import { QuizzModule } from './quizz/quizz.module';
import { CategoryModule } from './category/category.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule, 
    QuestionModule,
    QuizzModule,
    CategoryModule,
    MongooseModule.forRoot('mongodb+srv://atlas_dbuser:atlas_dbpassword@cluster0.mamvx.mongodb.net/Quizz')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
