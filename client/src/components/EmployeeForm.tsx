import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { createEmployee } from "../services/employeeApi";

/*
  Form used to register a new employee.
  Styled for a clean HR dashboard UI.
*/

function EmployeeForm() {
  const { refreshEmployees } = useContext(EmployeeContext);

  const [formData, setFormData] = useState({
    fullName: "",
    department: "MERN",
    primarySkill: "",
    experienceLevel: "Junior",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createEmployee(formData as any);

    setFormData({
      fullName: "",
      department: "MERN",
      primarySkill: "",
      experienceLevel: "Junior",
    });

    refreshEmployees();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 max-w-2xl"
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Add New Employee
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-medium">
            Full Name
          </label>
          <input
            name="fullName"
            placeholder="Enter Employee Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Primary Skill */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-medium">
            Primary Skill
          </label>
          <input
            name="primarySkill"
            placeholder="React / Node / Python"
            value={formData.primarySkill}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Department */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-medium">
            Department
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="QA">QA</option>
            <option value="DevOps">DevOps</option>
            <option value="Data Engineering">Data Engineering</option>
            <option value="MERN">MERN</option>
          </select>
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 font-medium">
            Experience Level
          </label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;