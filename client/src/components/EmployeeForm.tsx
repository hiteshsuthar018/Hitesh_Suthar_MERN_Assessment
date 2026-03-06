import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { createEmployee } from "../services/employeeApi";

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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header with gradient */}
      <div className="bg-linear-to-r from-blue-600 to-blue-700 -m-6 mb-6 p-6 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Add New Employee</h2>
            <p className="text-blue-100 text-sm mt-1">Fill in the details to register a new team member</p>
          </div>
        </div>
      </div>

      {/* Form Fields with improved styling */}
      <div className="space-y-6">
        {/* Two column layout for better organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name - with icon and improved input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-5 h-5 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg text-xs">
                👤
              </span>
              Full Name
            </label>
            <div className="relative group">
              <input
                name="fullName"
                placeholder="e.g., John Smith"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                         focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-400 
                         transition-all duration-200 outline-none text-gray-700
                         placeholder:text-gray-400 group-hover:border-gray-300"
              />
            </div>
            <p className="text-xs text-gray-400">Enter the employee's full name</p>
          </div>

          {/* Primary Skill - with suggestions */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-5 h-5 flex items-center justify-center bg-purple-50 text-purple-600 rounded-lg text-xs">
                ⚡
              </span>
              Primary Skill
            </label>
            <div className="relative">
              <input
                name="primarySkill"
                placeholder="e.g., React, Node.js, Python"
                value={formData.primarySkill}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                         focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-purple-400 
                         transition-all duration-200 outline-none text-gray-700
                         placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Department - with styled select */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-5 h-5 flex items-center justify-center bg-green-50 text-green-600 rounded-lg text-xs">
                🏢
              </span>
              Department
            </label>
            <div className="relative">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                         focus:bg-white focus:ring-4 focus:ring-green-100 focus:border-green-400
                         transition-all duration-200 outline-none text-gray-700 appearance-none
                         cursor-pointer"
              >
                <option value="QA">🔍 QA</option>
                <option value="DevOps">🚀 DevOps</option>
                <option value="Data Engineering">📊 Data Engineering</option>
                <option value="MERN">⚛️ MERN</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Experience Level - with badges */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-5 h-5 flex items-center justify-center bg-orange-50 text-orange-600 rounded-lg text-xs">
                📊
              </span>
              Experience Level
            </label>
            <div className="relative">
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                         focus:bg-white focus:ring-4 focus:ring-orange-100 focus:border-orange-400
                         transition-all duration-200 outline-none text-gray-700 appearance-none
                         cursor-pointer"
              >
                <option value="Junior">🌱 Junior (0-2 years)</option>
                <option value="Mid">🌿 Mid (3-5 years)</option>
                <option value="Senior">🌳 Senior (6+ years)</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick tips section */}
        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-blue-900">Quick Tips</h4>
              <p className="text-xs text-blue-700 mt-0.5">
                Make sure to enter the primary skill accurately. This will be used for team matching and project assignments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button with loading state simulation */}
      <button
        type="submit"
        className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 
                 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-blue-800 
                 transform hover:scale-[1.02] transition-all duration-200 
                 focus:ring-4 focus:ring-blue-200 active:scale-[0.98]
                 shadow-lg shadow-blue-200"
      >
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Employee to Directory
        </span>
      </button>
    </form>
  );
}

export default EmployeeForm;