import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/EmployeeForm";
import DepartmentFilter from "../components/DepartmentFilter";

/*
  Main HR dashboard where employees are listed
  and new employees can be added or filtered.
*/

function Dashboard() {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="max-w-7xl mx-auto p-8">

      {/* Header */}

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Pulse HR - Employee Skill Matrix
      </h1>


      {/* Employee Form */}
      <div className="mb-10">
        <EmployeeForm />
      </div>
      {/* Filter */}
      <div className="mb-6">
        <DepartmentFilter />
      </div>
      {/* Employee Cards */}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {employees.map((emp) => (
          <EmployeeCard key={emp._id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;