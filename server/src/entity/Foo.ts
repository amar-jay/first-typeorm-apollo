import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("foo")
export class Foo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
