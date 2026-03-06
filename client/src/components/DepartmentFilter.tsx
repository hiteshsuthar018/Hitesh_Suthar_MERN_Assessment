import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { filterEmployees } from "../services/employeeApi";

function DepartmentFilter() {
  const { setEmployees, refreshEmployees } = useContext(EmployeeContext);
  const [department, setDepartment] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = async (value: string) => {
    setDepartment(value);

    if (value === "All") {
      refreshEmployees();
      return;
    }

    const filtered = await filterEmployees(value);
    setEmployees(filtered);
  };

  // Department colors and icons for visual flair
  const departmentStyles: Record<string, { icon: string; color: string; bgColor: string }> = {
    All: { icon: "👥", color: "text-gray-700", bgColor: "bg-gray-50" },
    QA: { icon: "🔍", color: "text-blue-600", bgColor: "bg-blue-50" },
    DevOps: { icon: "🚀", color: "text-purple-600", bgColor: "bg-purple-50" },
    "Data Engineering": { icon: "📊", color: "text-green-600", bgColor: "bg-green-50" },
    MERN: { icon: "⚛️", color: "text-cyan-600", bgColor: "bg-cyan-50" },
  };

  const currentDept = departmentStyles[department] || departmentStyles.All;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Header with icon */}
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 bg-blue-50 rounded-xl">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </div>
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
          Filter Employees
        </span>
      </div>

      {/* Main filter control */}
      <div className="flex items-center gap-3">
        
        {/* Label with current filter indicator */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500">Department:</span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${currentDept.bgColor} ${currentDept.color}`}>
              <span>{currentDept.icon}</span>
              <span>{department}</span>
            </span>
          </div>
        </div>

        {/* Custom dropdown button */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 
                     rounded-xl text-sm font-medium text-gray-700 
                     transition-all duration-200 border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <span>Change</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <>
              {/* Backdrop for clicking outside */}
              <div 
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Dropdown options */}
              <div className="absolute right-0 mt-2 w-64 z-20 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  Select Department
                </div>
                
                {Object.entries(departmentStyles).map(([dept, style]) => (
                  <button
                    key={dept}
                    onClick={() => {
                      handleFilter(dept);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full px-4 py-3 flex items-center gap-3
                      hover:bg-gray-50 transition-colors duration-150
                      ${department === dept ? 'bg-blue-50/50' : ''}
                    `}
                  >
                    <div className={`w-8 h-8 rounded-lg ${style.bgColor} flex items-center justify-center text-lg`}>
                      {style.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <span className={`text-sm font-medium ${style.color}`}>
                        {dept}
                      </span>
                      {dept !== "All" && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {dept === "QA" && "Quality Assurance"}
                          {dept === "DevOps" && "Development Operations"}
                          {dept === "Data Engineering" && "Data & Analytics"}
                          {dept === "MERN" && "MongoDB, Express, React, Node"}
                        </p>
                      )}
                    </div>
                    {department === dept && (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Quick filter chips */}
      <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-400 mr-1">Quick:</span>
        {Object.keys(departmentStyles).slice(0, 3).map((dept) => (
          <button
            key={dept}
            onClick={() => handleFilter(dept)}
            className={`
              px-2 py-1 rounded-lg text-xs font-medium transition-all duration-200
              ${department === dept 
                ? departmentStyles[dept].bgColor + ' ' + departmentStyles[dept].color
                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            {departmentStyles[dept].icon} {dept}
          </button>
        ))}
      </div>

      {/* Active filter indicator */}
      {department !== "All" && (
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Showing employees from <span className="font-medium text-gray-700">{department}</span>
          </p>
          <button
            onClick={() => handleFilter("All")}
            className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            Clear filter
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default DepartmentFilter;