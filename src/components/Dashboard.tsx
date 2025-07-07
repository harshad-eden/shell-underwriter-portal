import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const isEmbedded = location.pathname.startsWith('/underwriter');
  const basePath = isEmbedded ? '/underwriter' : '';

  return (
    <div className="p-6">
      {/* Portal Indicator Banner */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-green-800">
          🛡️ You are currently in the Underwriter Portal
        </h3>
        <p className="text-xs text-green-600 mt-1">
          Risk assessment and policy approval management
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Underwriter Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Review applications, assess risks, and manage approvals
        </p>
      </div>

      {/* Simple metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">18</div>
          <div className="text-sm text-gray-600">Pending Reviews</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">42</div>
          <div className="text-sm text-gray-600">Approved Today</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">7.2</div>
          <div className="text-sm text-gray-600">Avg Risk Score</div>
        </div>
        <div className="bg-white p-4 border rounded-lg">
          <div className="text-2xl font-bold">2.1h</div>
          <div className="text-sm text-gray-600">Avg Processing</div>
        </div>
      </div>

      {/* Simple navigation */}
      <div className="space-y-2">
        <Link to={`${basePath}/assessments`} className="block bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
          View Risk Assessments
        </Link>
        <Link to={`${basePath}/approvals`} className="block bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          View Pending Approvals
        </Link>
      </div>
    </div>
  );
}