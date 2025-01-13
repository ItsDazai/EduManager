import { Teacher, Schedule, Department } from '../types';

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@school.edu',
    subject: 'Mathematics',
    department: 'Science',
    joinDate: '2022-01-15',
    status: 'active',
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    email: 'michael.chen@school.edu',
    subject: 'Physics',
    department: 'Science',
    joinDate: '2021-08-20',
    status: 'active',
  },
];

export const schedules: Schedule[] = [
  {
    id: '1',
    teacherId: '1',
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:30',
    subject: 'Advanced Mathematics',
    room: '101',
  },
  {
    id: '2',
    teacherId: '2',
    day: 'Monday',
    startTime: '11:00',
    endTime: '12:30',
    subject: 'Physics Lab',
    room: '205',
  },
];

export const departments: Department[] = [
  {
    id: '1',
    name: 'Science',
    head: 'Dr. Sarah Johnson',
  },
  {
    id: '2',
    name: 'Arts',
    head: 'Prof. Emily Williams',
  },
];