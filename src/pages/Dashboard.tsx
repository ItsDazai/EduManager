import React from 'react';
import { teachers, schedules, departments } from '../data/mockData';
import { Users, Calendar, Building2, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      icon: Users,
      label: 'Total Teachers',
      value: teachers.length,
      color: 'bg-blue-500',
    },
    {
      icon: Calendar,
      label: 'Classes Today',
      value: schedules.filter(s => s.day === 'Monday').length,
      color: 'bg-green-500',
    },
    {
      icon: Building2,
      label: 'Departments',
      value: departments.length,
      color: 'bg-purple-500',
    },
    {
      icon: Clock,
      label: 'Active Hours',
      value: '32',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {schedules.map((schedule) => {
              const teacher = teachers.find(t => t.id === schedule.teacherId);
              return (
                <div key={schedule.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{schedule.subject}</p>
                    <p className="text-sm text-gray-500">{teacher?.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Room {schedule.room}</p>
                    <p className="text-sm text-gray-500">
                      {schedule.startTime} - {schedule.endTime}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Department Overview</h2>
          <div className="space-y-4">
            {departments.map((dept) => (
              <div key={dept.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{dept.name}</p>
                  <p className="text-sm text-gray-500">Head: {dept.head}</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {teachers.filter(t => t.department === dept.name).length} Teachers
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;