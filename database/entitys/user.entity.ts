import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { FitnessClassBooking } from "./classBooking.entity";
import { FitnessPackage } from "./package.entity";
import { FitnessTrainerBooking } from "./trainerBooking.entity";

export enum status {
  success = "เป็นสมาชิก",
  unSuccess = "ไม่เป็นสมาชิก",
}

@Entity()
export class FitnessUser {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ unique: true })
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: status.unSuccess })
  status: status;

  @Column({ unique: true })
  telephone: string;

  @ManyToOne(() => FitnessPackage, (proPackage) => proPackage.users, {
    eager: true,
  })
  package: FitnessPackage;

  @OneToMany(() => FitnessTrainerBooking, (trainer) => trainer.user)
  trainer: FitnessTrainerBooking[];

  @OneToMany(() => FitnessClassBooking, (booking) => booking.user)
  class: FitnessClassBooking[];
}
