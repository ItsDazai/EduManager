import React from 'react';
import { schedules, teachers } from '../data/mockData';
import { Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['09:00', '10:30', '12:00', '13:30', '15:00'];

  const getScheduleForTimeSlot = (day: string, time: string) => {
    return schedules.find(
      schedule => schedule.day === day && schedule.startTime === time
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Class Schedule</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-6 gap-px bg-gray-200">
          <div className="bg-gray-50 p-4 font-semibold">Time</div>
          {days.map(day => (
            <div key={day} className="bg-gray-50 p-4 font-semibold">
              {day}
            </div>
          ))}
        </div>

        {timeSlots.map(time => (
          <div key={time} className="grid grid-cols-6 gap-px bg-gray-200">
            <div className="bg-white p-4 font-medium">{time}</div>
            {days.map(day => {
              const schedule = getScheduleForTimeSlot(day, time);
              const teacher = schedule
                ? teachers.find(t => t.id === schedule.teacherId)
                : null;

              return (
                <div
                  key={`${day}-${time}`}
                  className="bg-white p-4"
                >
                  {schedule ? (
                    <div className="space-y-2">
                      <div className="font-medium">{schedule.subject}</div>
                      <div className="text-sm text-gray-600">{teacher?.name}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        Room {schedule.room}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {schedule.startTime} - {schedule.endTime}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      No Class
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;