import { BookEntity } from './entity/book.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookSercice {
  public booksData: BookEntity[] = [];

  addBook(book: BookEntity): string {
    this.booksData.push(book);
    return 'Book Added sucssecfully';
  }
  updateBook(id: number, updateBook: BookEntity): string {
    for (let x = 0; x < this.booksData.length; x++) {
      if (this.booksData[x].id == id) {
        this.booksData[x] = updateBook;
      }
    }
    return 'Book Update sucssecfully';
  }
  deleteBook(id: number) {
    this.booksData = this.booksData.filter((book) => book.id !== id);
    return 'Book Deleted';
  }
  findBookById(id: number): BookEntity {
    for (let x = 0; x < this.booksData.length; x++) {
      if (this.booksData[x].id == id) {
        return this.booksData[x];
      }
    }
  }
  findAllBooks(): BookEntity[] {
    return this.booksData;
  }
}
