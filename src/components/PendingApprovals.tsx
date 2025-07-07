import React from 'react';

export default function PendingApprovals() {
  return (
    <div className="p-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-purple-800">
          ⏳ Pending Approvals
        </h3>
        <p className="text-xs text-purple-600 mt-1">
          Applications awaiting underwriter approval
        </p>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Pending Approvals</h1>

      <div className="space-y-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Application #PA-2024-001</h3>
              <p className="text-gray-600">Auto Insurance - Premium Vehicle</p>
              <p className="text-sm text-gray-500">Submitted: 2 days ago</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Awaiting Review</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Application #PA-2024-002</h3>
              <p className="text-gray-600">Home Insurance - High Value Property</p>
              <p className="text-sm text-gray-500">Submitted: 1 day ago</p>
            </div>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Priority Review</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Application #PA-2024-003</h3>
              <p className="text-gray-600">Business Insurance - Small Enterprise</p>
              <p className="text-sm text-gray-500">Submitted: 3 hours ago</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Standard Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}