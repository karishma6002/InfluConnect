import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobPositions } from '../../data/careersData';
import ApplicationModal from './ApplicationModal';

export default function JobApplication() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const position = jobPositions.find(p => p.id === id);

  if (!position) {
    return <div>Position not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{position.title}</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-600">{position.description}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc pl-5">
            {position.requirements.map((req, index) => (
              <li key={index} className="text-gray-600">{req}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Apply Now
        </button>
      </div>
      {showModal && <ApplicationModal position={position} onClose={() => setShowModal(false)} />}
    </div>
  );
}