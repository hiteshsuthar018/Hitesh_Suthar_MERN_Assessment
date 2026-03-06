import { type Employee } from "../types/employee";

interface EmployeeCardProps {
  employee: Employee;
  onViewDetails: (employee: Employee) => void;
}

function EmployeeCard({ employee, onViewDetails }: EmployeeCardProps) {
  // Generate a consistent color based on name for avatar
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500', 'bg-purple-500', 'bg-green-500', 
      'bg-pink-500', 'bg-indigo-500', 'bg-orange-500',
      'bg-red-500', 'bg-teal-500', 'bg-cyan-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Get experience level color
  const getExperienceColor = (level: string) => {
    switch(level) {
      case 'Junior': return 'bg-green-100 text-green-700 border-green-200';
      case 'Mid': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Senior': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div 
      onClick={() => onViewDetails(employee)}
      className="group bg-white rounded-2xl border border-gray-100 p-6 
                 hover:border-blue-200 hover:shadow-xl transition-all duration-300 
                 cursor-pointer transform hover:-translate-y-1"
    >
      
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar with initials */}
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center 
            text-white font-semibold text-xl shadow-sm
            ${getAvatarColor(employee.fullName)}
          `}>
            {employee.fullName.charAt(0)}
            {employee.fullName.split(' ')[1]?.charAt(0) || ''}
          </div>

          {/* Name and Department */}
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">
              {employee.fullName}
            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              {employee.department}
            </p>
          </div>
        </div>

        {/* View details indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>

      {/* Employee Details Grid */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        {/* Primary Skill Card */}
        <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-blue-50 transition-colors duration-300">
          <p className="text-xs text-gray-500 mb-1">Primary Skill</p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="font-semibold text-gray-800 text-sm truncate">
              {employee.primarySkill}
            </span>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-purple-50 transition-colors duration-300">
          <p className="text-xs text-gray-500 mb-1">Experience</p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className={`font-semibold text-sm px-2 py-0.5 rounded-full ${getExperienceColor(employee.experienceLevel)}`}>
              {employee.experienceLevel}
            </span>
          </div>
        </div>
      </div>

      {/* Quick view indicator at bottom */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
        <span>Click to view full details</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default EmployeeCard;