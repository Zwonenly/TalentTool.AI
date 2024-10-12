import React, { useState } from 'react';
import { Users, Upload } from 'lucide-react';
import { Talent } from '../types';

const TalentBoard: React.FC = () => {
  const [talents, setTalents] = useState<Talent[]>([]);

  const handleCVPaste = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cvText = formData.get('cvText') as string;
    
    // Here you would typically process the CV text to extract relevant information
    // For now, we'll create a simple Talent object
    const newTalent: Talent = {
      id: Date.now().toString(),
      name: 'Extracted Name', // This would be extracted from the CV
      email: 'extracted@email.com', // This would be extracted from the CV
      phone: 'Extracted Phone', // This would be extracted from the CV
      cv: cvText,
      coverLetter: '',
      linkedInUrl: '',
      skills: [], // This would be extracted from the CV
      salaryClaim: 0, // This would be extracted from the CV
      noticePeriod: '', // This would be extracted from the CV
      lastUpdate: new Date(),
      chatHistory: [],
      interviewFeedback: '',
      ratings: 0,
    };

    setTalents(prevTalents => [...prevTalents, newTalent]);
    event.currentTarget.reset();
  };

  const handlePDFUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically process the PDF file to extract relevant information
      // For this example, we'll just create a placeholder Talent object
      const newTalent: Talent = {
        id: Date.now().toString(),
        name: file.name,
        email: 'pdf@example.com',
        phone: 'PDF Phone',
        cv: 'PDF Content',
        coverLetter: '',
        linkedInUrl: '',
        skills: ['PDF Skill'],
        salaryClaim: 0,
        noticePeriod: '',
        lastUpdate: new Date(),
        chatHistory: [],
        interviewFeedback: '',
        ratings: 0,
      };

      setTalents(prevTalents => [...prevTalents, newTalent]);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 flex-1">
      <div className="flex items-center mb-4">
        <Users className="w-6 h-6 mr-2 text-blue-500" />
        <h2 className="text-xl font-semibold">Talents</h2>
      </div>
      <form onSubmit={handleCVPaste} className="mb-4">
        <textarea 
          name="cvText" 
          placeholder="Paste CV text here" 
          className="w-full h-40 mb-2 p-2 border rounded" 
          required 
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Process CV
        </button>
      </form>
      <div className="mb-4">
        <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Upload className="w-5 h-5 mr-2" />
          <span>Upload PDF CV</span>
          <input type="file" className="sr-only" accept=".pdf" onChange={handlePDFUpload} />
        </label>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Processed Talents ({talents.length})</h3>
        <ul className="space-y-2">
          {talents.map(talent => (
            <li key={talent.id} className="border p-2 rounded">
              {talent.name} - {talent.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TalentBoard;