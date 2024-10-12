import React, { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import { Requirement } from '../types';

const RequirementBoard: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);

  const handleRequirementPaste = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requirementText = formData.get('requirementText') as string;
    
    // Here you would typically process the requirement text to extract relevant information
    // For now, we'll create a simple Requirement object
    const newRequirement: Requirement = {
      id: Date.now().toString(),
      jobTitle: 'Extracted Job Title', // This would be extracted from the text
      company: 'Extracted Company', // This would be extracted from the text
      description: requirementText,
      requiredSkills: [], // This would be extracted from the text
      cultureFit: [], // This would be extracted from the text
      salaryRange: {
        min: 0, // This would be extracted from the text
        max: 0, // This would be extracted from the text
      },
    };

    setRequirements(prevRequirements => [...prevRequirements, newRequirement]);
    event.currentTarget.reset();
  };

  const handlePDFUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically process the PDF file to extract relevant information
      // For this example, we'll just create a placeholder Requirement object
      const newRequirement: Requirement = {
        id: Date.now().toString(),
        jobTitle: file.name,
        company: 'PDF Company',
        description: 'PDF Content',
        requiredSkills: ['PDF Skill'],
        cultureFit: ['PDF Culture'],
        salaryRange: {
          min: 0,
          max: 0,
        },
      };

      setRequirements(prevRequirements => [...prevRequirements, newRequirement]);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 flex-1">
      <div className="flex items-center mb-4">
        <FileText className="w-6 h-6 mr-2 text-green-500" />
        <h2 className="text-xl font-semibold">Requirements</h2>
      </div>
      <form onSubmit={handleRequirementPaste} className="mb-4">
        <textarea 
          name="requirementText" 
          placeholder="Paste job requirement text here" 
          className="w-full h-40 mb-2 p-2 border rounded" 
          required 
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Process Requirement
        </button>
      </form>
      <div className="mb-4">
        <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Upload className="w-5 h-5 mr-2" />
          <span>Upload PDF Requirement</span>
          <input type="file" className="sr-only" accept=".pdf" onChange={handlePDFUpload} />
        </label>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Processed Requirements ({requirements.length})</h3>
        <ul className="space-y-2">
          {requirements.map(requirement => (
            <li key={requirement.id} className="border p-2 rounded">
              {requirement.jobTitle} - {requirement.company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RequirementBoard;