import { type Employee } from "../types/employee";

interface EmployeeCardProps {
  employee: Employee;
}

/*
  Displays a single employee card for the HR dashboard.
  Includes avatar, skill badge, and improved layout.
*/

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition duration-300">

      {/* Header Section */}
      <div className="flex items-center gap-4 mb-4">
        
        {/* Avatar */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold text-lg">
          {employee.fullName.charAt(0)}
        </div>

        {/* Name + Department */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {employee.fullName}
          </h3>
          <p className="text-sm text-gray-500">{employee.department}</p>
        </div>

      </div>

      {/* Employee Info */}
      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-500">Primary Skill</span>
          <span className="font-medium text-gray-800 bg-gray-100 px-2 py-1 rounded-md">
            {employee.primarySkill}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Experience</span>
          <span className="font-medium text-gray-800">
            {employee.experienceLevel}
          </span>
        </div>

      </div>
    </div>
  );
}

export default EmployeeCard;