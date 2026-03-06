import express from "express";
import {
  createEmployee,
  getEmployees,
  filterEmployees,
} from "../controllers/employeeController.js";

const router = express.Router();

/*
  Route Definitions

  These routes simply delegate work to the controller.
  Keeping routes thin makes the application easier to maintain.
*/


// POST /api/employees
router.post("/", createEmployee);


// GET /api/employees
router.get("/", getEmployees);


// POST /api/employees/filter
router.post("/filter", filterEmployees);

export default router;