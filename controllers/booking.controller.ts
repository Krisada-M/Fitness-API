import type { Request, Response } from "express";
import {
    classBookingRepository, trainerBookingRepository
} from "../database/repository";

// Get all trainer booking
export const allTrainerBooking = async (_: Request, res: Response) => {
  const trainerBooking = await trainerBookingRepository.find();
  if (trainerBooking.length === 0) {
    return res.status(404).json({ msg: "No Booking" });
  }

  return res.status(200).json(trainerBooking);
};

// Get all class booking
export const allClassBooking = async (_: Request, res: Response) => {
  const classBooking = await classBookingRepository.find();
  if (classBooking.length === 0) {
    return res.status(404).json({ msg: "No Booking" });
  }

  return res.status(200).json(classBooking);
};
