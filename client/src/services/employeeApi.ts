import axios from "axios";
import { type Employee } from "../types/employee";

/*
  Base API URL.

  When running inside Docker the frontend will reach the backend
  using the service name "backend".
*/
const API_BASE = import.meta.env.API_BASE || "http://backend:3000/api/employees";

// Fetch all employees
export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get(API_BASE);
  console.log(response)
  return response.data;
};

// Create a new employee
export const createEmployee = async (
  employee: Employee
): Promise<Employee> => {
  const response = await axios.post(API_BASE, employee);
  return response.data;
};

// Filter employees by department
export const filterEmployees = async (
  department: string
): Promise<Employee[]> => {
  const response = await axios.post(`${API_BASE}/filter`, {
    department,
  });

  return response.data;
};