import {
  Column,
  Entity, ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { FitnessUser } from "./user.entity";

@Entity()
export class FitnessClassBooking {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  typeClass: "Boxing" | "Dance" | "Yoga" | "Zumba";

  @Column()
  date: string;

  @Column()
  time: string;

  @ManyToOne(() => FitnessUser, (user) => user.class, {
    eager: true,
  })
  user: FitnessUser;
}
