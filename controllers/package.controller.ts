import type { Request, Response } from "express";
import { FitnessPackage } from "../database/entitys/package.entity";
import { packageRepository } from "../database/repository";

// Get all package
export const allPackage = async (_: Request, res: Response) => {
  const packages = await packageRepository.find();
  if (packages.length === 0) {
    return res.status(404).json({ msg: "No Package" });
  }

  return res.status(200).json(packages);
};

// Add new package
export const addPackage = async (req: Request, res: Response) => {
  const packageInput = req.body as FitnessPackage;
  const packageCreate = packageRepository.create(packageInput);
  const result = await packageRepository.save(packageCreate);

  return res.status(200).json({ packageID: result.ID });
};
