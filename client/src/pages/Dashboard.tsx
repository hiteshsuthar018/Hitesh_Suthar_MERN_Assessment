import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/EmployeeForm";
import DepartmentFilter from "../components/DepartmentFilter";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";
import { type Employee } from "../types/employee";

function Dashboard() {
  const { employees } = useContext(EmployeeContext);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter employees based on search
  const filteredEmployees = employees.filter(emp => 
    emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.primarySkill.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate stats
  const totalEmployees = employees.length;
  const departments = [...new Set(employees.map(emp => emp.department))];
  const experienceLevels = {
    Junior: employees.filter(emp => emp.experienceLevel === "Junior").length,
    Mid: employees.filter(emp => emp.experienceLevel === "Mid").length,
    Senior: employees.filter(emp => emp.experienceLevel === "Senior").length,
  };

  const handleViewDetails = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      
      {/* Header with gradient background */}
      <div className="bg-linear-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Pulse HR
                </h1>
                <p className="text-blue-100 mt-1 flex items-center gap-2">
                  <span>Employee Skill Matrix</span>
                  <span className="w-1 h-1 rounded-full bg-blue-300"></span>
                  <span className="text-sm">{totalEmployees} Team Members</span>
                </p>
              </div>
            </div>
            
            {/* Quick stats in header */}
            <div className="hidden md:flex items-center gap-4">
              {Object.entries(experienceLevels).map(([level, count]) => (
                <div key={level} className="text-center">
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-xs text-blue-200">{level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Action bar with form toggle and search */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl shadow-sm border border-gray-200 
                     hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
          >
            <span className={`p-1 rounded-lg ${showForm ? 'bg-red-100' : 'bg-blue-100'} transition-colors duration-200`}>
              <svg 
                className={`w-5 h-5 ${showForm ? 'text-red-600' : 'text-blue-600'} transition-colors duration-200`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {showForm ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                )}
              </svg>
            </span>
            <span className="font-medium text-gray-700">
              {showForm ? 'Close Form' : 'Add New Employee'}
            </span>
          </button>

          {/* Search bar */}
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name, skill, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400
                       placeholder:text-gray-400 text-gray-700"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Employee Form (conditional) */}
        {showForm && (
          <div className="mb-8 animate-slideDown">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <EmployeeForm />
            </div>
          </div>
        )}

        {/* Filter and Stats Row */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <DepartmentFilter />
          
          {/* Department chips */}
          <div className="flex flex-wrap gap-2">
            {departments.map(dept => (
              <span
                key={dept}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        {/* Employee count and view options */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-800">Team Members</h2>
            <span className="px-2.5 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium">
              {filteredEmployees.length} {filteredEmployees.length === 1 ? 'employee' : 'employees'}
            </span>
          </div>
        </div>

        {/* Employee Cards Grid */}
        {filteredEmployees.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredEmployees.map((emp) => (
              <EmployeeCard 
                key={emp._id} 
                employee={emp} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          // Empty state
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No employees found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Employee
            </button>
          </div>
        )}
      </div>

      {/* Employee Details Modal */}
      <EmployeeDetailsModal 
        employee={selectedEmployee}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Dashboard;