import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookSercice } from './book.service';
import { Book } from './schema/book.schema';
import { Book as BookModule } from '../graphql';
import { AddBookArgs } from './args/addbook.args';

@Resolver((of) => Book)
export class BookResolvers {
  constructor(private readonly bookSercice: BookSercice) {}

  @Query((returns) => [Book], { name: 'books' })
  getAllBooks(): BookModule[] {
    return this.bookSercice.findAllBooks();
  }

  @Query((returns) => Book, { name: 'findById', nullable: true })
  getBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): BookModule {
    return this.bookSercice.findBookById(id);
  }

  @Mutation((returns) => String, { name: 'delete' })
  deleteBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): string {
    return this.bookSercice.deleteBook(id);
  }

  @Mutation((returns) => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): string {
    return this.bookSercice.addBook(addBookArgs);
  }

  @Mutation((returns) => String, { name: 'updateBook' })
  updateBook(
    @Args({ name: 'bookId', type: () => Int }) id: number,
    @Args('updateBook') updateBookArgs: AddBookArgs,
  ): string {
    return this.bookSercice.updateBook(id, updateBookArgs);
  }
}
