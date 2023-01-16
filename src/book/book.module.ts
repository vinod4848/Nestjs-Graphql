import { Module } from '@nestjs/common';
import { BookResolvers } from './book.resolvers';
import { BookSercice } from './book.service';

@Module({
  imports: [],
  controllers: [],
  providers: [BookSercice , BookResolvers],
})
export class BookModule {}
