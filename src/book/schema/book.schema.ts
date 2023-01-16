import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  price?: string;

  @Field({ nullable: true })
  publishdate?: string;

  @Field({ nullable: true })
  writerName?: string;
}
