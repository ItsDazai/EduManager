import React, { createContext, useContext, useState } from 'react';
import { Teacher } from '../types';
import { teachers as initialTeachers } from '../data/mockData';

interface TeacherContextType {
  teachers: Teacher[];
  addTeacher: (teacher: Omit<Teacher, 'id'>) => void;
  updateTeacher: (teacher: Teacher) => void;
  deleteTeacher: (id: string) => void;
  filterTeachers: (searchTerm: string, department?: string, status?: string) => Teacher[];
}

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

export const TeacherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);

  const addTeacher = (teacher: Omit<Teacher, 'id'>) => {
    const newTeacher = {
      ...teacher,
      id: Math.random().toString(36).substr(2, 9),
    };
    setTeachers([...teachers, newTeacher]);
  };

  const updateTeacher = (updatedTeacher: Teacher) => {
    setTeachers(teachers.map(t => 
      t.id === updatedTeacher.id ? updatedTeacher : t
    ));
  };

  const deleteTeacher = (id: string) => {
    setTeachers(teachers.filter(t => t.id !== id));
  };

  const filterTeachers = (searchTerm: string, department?: string, status?: string) => {
    return teachers.filter(teacher => {
      const matchesSearch = 
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = !department || teacher.department === department;
      const matchesStatus = !status || teacher.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  };

  return (
    <TeacherContext.Provider value={{ 
      teachers, 
      addTeacher, 
      updateTeacher, 
      deleteTeacher,
      filterTeachers 
    }}>
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeachers = () => {
  const context = useContext(TeacherContext);
  if (context === undefined) {
    throw new Error('useTeachers must be used within a TeacherProvider');
  }
  return context;
};