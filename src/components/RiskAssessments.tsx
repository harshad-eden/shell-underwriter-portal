import React from 'react';

export default function RiskAssessments() {
  return (
    <div className="p-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-orange-800">
          📊 Risk Assessments
        </h3>
        <p className="text-xs text-orange-600 mt-1">
          Review and evaluate insurance application risks
        </p>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Risk Assessments</h1>

      <div className="space-y-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Application #UW-2024-001</h3>
              <p className="text-gray-600">Life Insurance - $500K coverage</p>
              <p className="text-sm text-gray-500">Applicant: John Smith, Age 45</p>
            </div>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">High Risk</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Application #UW-2024-002</h3>
              <p className="text-gray-600">Health Insurance - Group Policy</p>
              <p className="text-sm text-gray-500">Group: Tech Company Inc., 50 employees</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Medium Risk</span>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Application #UW-2024-003</h3>
              <p className="text-gray-600">Disability Insurance</p>
              <p className="text-sm text-gray-500">Applicant: Sarah Johnson, Age 32</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Low Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
}