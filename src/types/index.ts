export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  department: string;
  joinDate: string;
  status: 'active' | 'inactive';
}

export interface Schedule {
  id: string;
  teacherId: string;
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
  room: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
}