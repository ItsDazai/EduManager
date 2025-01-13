import React from 'react';
import { Bell, Shield, User, Mail, Globe, Moon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="max-w-3xl space-y-6">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Account Settings</h2>
            <p className="text-gray-600">Manage your account preferences</p>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Profile Information</p>
                  <p className="text-sm text-gray-600">Update your profile details</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Edit</button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-600">Choose what updates you receive</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Configure</button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Password & Security</p>
                  <p className="text-sm text-gray-600">Manage your password and 2FA</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Update</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">System Preferences</h2>
            <p className="text-gray-600">Customize your experience</p>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-gray-600">Select your preferred language</p>
                </div>
              </div>
              <select className="border rounded-md px-3 py-2">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Theme</p>
                  <p className="text-sm text-gray-600">Choose light or dark theme</p>
                </div>
              </div>
              <select className="border rounded-md px-3 py-2">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-gray-600">Manage notification settings</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Configure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;