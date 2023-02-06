import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FitnessUser } from "./user.entity";

@Entity()
export class FitnessPackage {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ unique: true })
  packageName: string;

  @Column()
  price: number;

  @OneToMany(() => FitnessUser, (users) => users.package)
  users: FitnessUser[];
}
