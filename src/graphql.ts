
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
    publishdate: string;
    writerName: string;
}

export interface Book {
    id: number;
    title?: Nullable<string>;
    price?: Nullable<string>;
    publishdate?: Nullable<string>;
    writerName?: Nullable<string>;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    findById(bookId: number): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    delete(bookId: number): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(bookId: number, updateBook: AddBookArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
