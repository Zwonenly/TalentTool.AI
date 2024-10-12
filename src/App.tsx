import React from 'react';
import { Users, FileText, GitCompare, BarChart } from 'lucide-react';
import TalentBoard from './components/TalentBoard';
import RequirementBoard from './components/RequirementBoard';
import MatchingBoard from './components/MatchingBoard';
import ComparisonDashboard from './components/ComparisonDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">General Matching System</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-4">
              <TalentBoard />
              <RequirementBoard />
              <MatchingBoard />
            </div>
            <ComparisonDashboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;