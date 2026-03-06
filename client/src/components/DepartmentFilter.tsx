import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { filterEmployees } from "../services/employeeApi";

/*
  Dropdown component used to filter employees
  by department for the HR dashboard.
*/

function DepartmentFilter() {
  const { setEmployees, refreshEmployees } = useContext(EmployeeContext);
  const [department, setDepartment] = useState("All");

  const handleFilter = async (value: string) => {
    setDepartment(value);

    if (value === "All") {
      refreshEmployees();
      return;
    }

    const filtered = await filterEmployees(value);
    setEmployees(filtered);
  };

  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm max-w-md">

      {/* Label */}
      <label className="text-sm font-medium text-gray-700">
        Filter by Department
      </label>

      {/* Dropdown */}
      <select
        value={department}
        onChange={(e) => handleFilter(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="All">All</option>
        <option value="QA">QA</option>
        <option value="DevOps">DevOps</option>
        <option value="Data Engineering">Data Engineering</option>
        <option value="MERN">MERN</option>
      </select>

    </div>
  );
}

export default DepartmentFilter;