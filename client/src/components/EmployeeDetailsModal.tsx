import { type Employee } from "../types/employee";
import { useEffect, useState } from "react";

interface EmployeeDetailsModalProps {
  employee: Employee | null;
  isOpen: boolean;
  onClose: () => void;
}

function EmployeeDetailsModal({ employee, isOpen, onClose }: EmployeeDetailsModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible || !employee) return null;

  // Generate avatar color
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500', 'bg-purple-500', 'bg-green-500', 
      'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
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
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-50
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4
          transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
          
          {/* Modal Header with gradient */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* Large Avatar */}
                <div className={`
                  w-16 h-16 rounded-xl flex items-center justify-center 
                  text-white font-bold text-2xl shadow-lg border-2 border-white/30
                  ${getAvatarColor(employee.fullName)}
                `}>
                  {employee.fullName.charAt(0)}
                  {employee.fullName.split(' ')[1]?.charAt(0) || ''}
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-white">{employee.fullName}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-white/20 rounded-lg text-white text-xs">
                      {employee.department}
                    </span>
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-medium ${getExperienceColor(employee.experienceLevel)}`}>
                      {employee.experienceLevel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-4">
            
            {/* Key Information */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">Primary Skill</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="font-semibold text-gray-800 text-sm">
                    {employee.primarySkill}
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">Employee ID</p>
                <p className="font-semibold text-gray-800 text-sm">
                  {employee._id?.slice(-6).toUpperCase() || 'N/A'}
                </p>
              </div>
            </div>

            {/* Simple Info Cards */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">
                Details
              </h3>
              
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Full Name</span>
                  <span className="text-sm font-medium text-gray-900">{employee.fullName}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Department</span>
                  <span className="text-sm font-medium text-gray-900">{employee.department}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Experience Level</span>
                  <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${getExperienceColor(employee.experienceLevel)}`}>
                    {employee.experienceLevel}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Primary Skill</span>
                  <span className="text-sm font-medium text-gray-900">{employee.primarySkill}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="border-t border-gray-100 p-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetailsModal;