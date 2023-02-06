import { myData } from "./data-source";
import { FitnessClassBooking } from "./entitys/classBooking.entity";
import { FitnessPackage } from "./entitys/package.entity";
import { FitnessTrainerBooking } from "./entitys/trainerBooking.entity";
import { FitnessUser } from "./entitys/user.entity";

export const userRepository = myData.getRepository(FitnessUser);
export const packageRepository = myData.getRepository(FitnessPackage);
export const trainerBookingRepository = myData.getRepository(
  FitnessTrainerBooking
);
export const classBookingRepository = myData.getRepository(FitnessClassBooking);
