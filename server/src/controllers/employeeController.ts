import { Request, Response } from "express";
import Employee from "../models/employeeModel.js";

/*
  Controller layer handles the business logic.
  Routes call these functions instead of directly
  interacting with the database.
*/


// Create Employee
export const createEmployee = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { fullName, department, primarySkill, experienceLevel } = req.body;

    const newEmployee = new Employee({
      fullName,
      department,
      primarySkill,
      experienceLevel,
    });

    const savedEmployee = await newEmployee.save();

    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create employee",
    });
  }
};


// Get All Employees
export const getEmployees = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch employees",
    });
  }
};


// Filter Employees by Department
export const filterEmployees = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { department } = req.body;

    const employees = await Employee.find({ department });

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Filtering failed",
    });
  }
};