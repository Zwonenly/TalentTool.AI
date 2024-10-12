import React from 'react';
import { BarChart } from 'lucide-react';

const ComparisonDashboard: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <BarChart className="w-6 h-6 mr-2 text-indigo-500" />
        <h2 className="text-xl font-semibold">Comparison Dashboard</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Talent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skills Match
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Culture Match
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Overall Match
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Add sample data rows */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">85%</td>
              <td className="px-6 py-4 whitespace-nowrap">90%</td>
              <td className="px-6 py-4 whitespace-nowrap">87%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">92%</td>
              <td className="px-6 py-4 whitespace-nowrap">88%</td>
              <td className="px-6 py-4 whitespace-nowrap">90%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonDashboard;