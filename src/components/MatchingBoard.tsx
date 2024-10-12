import React from 'react';
import { GitCompare } from 'lucide-react';

const MatchingBoard: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex-1">
      <div className="flex items-center mb-4">
        <GitCompare className="w-6 h-6 mr-2 text-purple-500" />
        <h2 className="text-xl font-semibold">Matching</h2>
      </div>
      <p className="text-gray-600">Matching process and results will be displayed here.</p>
      {/* Add matching process visualization */}
    </div>
  );
};

export default MatchingBoard;