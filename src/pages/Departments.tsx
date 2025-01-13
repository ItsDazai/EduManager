import React from 'react';
import { departments, teachers } from '../data/mockData';
import { Users, GraduationCap, Building2 } from 'lucide-react';

const Departments = () => {
  const getDepartmentStats = (departmentName: string) => {
    const departmentTeachers = teachers.filter(t => t.department === departmentName);
    return {
      totalTeachers: departmentTeachers.length,
      activeTeachers: departmentTeachers.filter(t => t.status === 'active').length,
    };
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Departments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => {
          const stats = getDepartmentStats(department.name);
          return (
            <div key={department.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{department.name}</h2>
                  <p className="text-gray-600">Head: {department.head}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Total Teachers</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.totalTeachers}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Active</span>
                  </div>
                  <p className="text-2xl font-bold">{stats.activeTeachers}</p>
                </div>
              </div>

              <button className="mt-4 w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Departments;