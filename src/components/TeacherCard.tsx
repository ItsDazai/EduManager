import React from 'react';
import { Teacher } from '../types';
import { User, Mail, BookOpen, Calendar } from 'lucide-react';

interface TeacherCardProps {
  teacher: Teacher;
  onEdit: (teacher: Teacher) => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>{teacher.email}</span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            teacher.status === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {teacher.status}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{teacher.subject}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            Joined {new Date(teacher.joinDate).toLocaleDateString()}
          </span>
        </div>
      </div>
      <button
        onClick={() => onEdit(teacher)}
        className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
      >
        Edit Details
      </button>
    </div>
  );
};

export default TeacherCard;