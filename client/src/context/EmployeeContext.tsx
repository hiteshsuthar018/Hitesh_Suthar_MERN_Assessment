import { createContext, useEffect, useState, type ReactNode } from "react";
import { type Employee } from "../types/employee";
import { getEmployees } from "../services/employeeApi";

/*
  This context keeps employee data globally accessible
  across the dashboard without passing props everywhere.
*/

interface EmployeeContextType {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  refreshEmployees: () => Promise<void>;
}

export const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: () => {},
  refreshEmployees: async () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const EmployeeProvider = ({ children }: ProviderProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  // fetch employees from API
  const refreshEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Failed to fetch employees");
    }
  };

  // load employees when app starts
  useEffect(() => {
    refreshEmployees();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        refreshEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};