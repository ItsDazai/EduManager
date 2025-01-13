import React, { useState } from 'react';
import TeacherCard from '../components/TeacherCard';
import TeacherForm from '../components/TeacherForm';
import { useTeachers } from '../context/TeacherContext';
import { Plus, Search, Filter } from 'lucide-react';
import { Teacher } from '../types';

const Teachers = () => {
  const { filterTeachers, addTeacher, updateTeacher, deleteTeacher } = useTeachers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  const filteredTeachers = filterTeachers(searchTerm, selectedDepartment, selectedStatus);

  const handleEdit = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setShowForm(true);
  };

  const handleSubmit = (teacherData: Omit<Teacher, 'id'>) => {
    if (editingTeacher) {
      updateTeacher({ ...teacherData, id: editingTeacher.id });
    } else {
      addTeacher(teacherData);
    }
    setShowForm(false);
    setEditingTeacher(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teachers</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Teacher
        </button>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Departments</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Mathematics">Mathematics</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {showForm && (
        <TeacherForm
          onSubmit={handleSubmit}
          onClose={() => {
            setShowForm(false);
            setEditingTeacher(null);
          }}
          initialData={editingTeacher || undefined}
        />
      )}
    </div>
  );
};
export default Teachers;