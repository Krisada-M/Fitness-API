import type { Express, Request, Response } from "express";
import * as express from "express";
import { env } from "process";
import {
  allClassBooking,
  allTrainerBooking
} from "./controllers/booking.controller";
import { addPackage, allPackage } from "./controllers/package.controller";
import {
  allUsers,
  createUsers,
  getProfileUser,
  loginUser,
  userBooking,
  userSelectPackage
} from "./controllers/user.controller";
import * as database from "./database/data-source";

// Initial
database.connect();

const app: Express = express();
const port = env.PORT;

app.use(express.json());
// END Initial

// Init route
app.get("/", (_: Request, res: Response) => {
  res.status(200).json({ msg: "Fitness API Start" });
});

// User routes --------------------------

// Create user
app.post("/register", createUsers);

// Login user
app.post("/login", loginUser);

// Get all users
app.get("/users", allUsers);

// Get profile user
app.get("/get-profile/:userID", getProfileUser);

// Update status user after choose package
app.post("/select-package/:userID", userSelectPackage);

// User booking
app.post("/booking/:userID", userBooking);

// END user routes ----------------------

// Booking routes -----------------------

// Get all trainer booking
app.get("/t-booking", allTrainerBooking);

// Get all class booking
app.get("/c-booking", allClassBooking);

// END Booking routes -------------------

// Package routes -----------------------

// Get all package
app.get("/package", allPackage);

// Add new package
app.post("/add-package", addPackage);

// END Package routes -------------------

// Express start
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
