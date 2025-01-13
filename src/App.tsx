import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import Schedule from './pages/Schedule';
import Departments from './pages/Departments';
import Settings from './pages/Settings';
import { TeacherProvider } from './context/TeacherContext';

function App() {
  return (
    <TeacherProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-100 min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </Router>
    </TeacherProvider>
  );
}

export default App;