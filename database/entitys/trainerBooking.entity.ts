import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FitnessUser } from "./user.entity";

@Entity()
export class FitnessTrainerBooking {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  name: string;

  @Column()
  round: string;

  @Column()
  date: string;

  @ManyToOne(() => FitnessUser, (user) => user.trainer, {
    eager: true,
  })
  user: FitnessUser;
}
