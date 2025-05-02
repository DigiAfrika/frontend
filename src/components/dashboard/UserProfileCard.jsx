import React from 'react';
import { FaUserCircle, FaBriefcase, FaMapMarkerAlt, FaBullseye } from 'react-icons/fa';

const UserProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6 border-l-4 border-[#065A2F]">
      <h3 className="text-xl font-semibold text-[#065A2F] mb-4">Your Profile</h3>
      <div className="space-y-3 text-sm text-gray-700">
        <p className="flex items-center"><FaUserCircle className="mr-2 text-[#F69704]" /> <strong>Name:</strong> {user.name}</p>
        <p className="flex items-center"><FaBriefcase className="mr-2 text-[#F69704]" /> <strong>Business:</strong> {user.businessName} ({user.businessType})</p>
        <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-[#F69704]" /> <strong>Location:</strong> {user.location}</p>
        <div className="flex items-start">
            <FaBullseye className="mr-2 mt-1 text-[#F69704]" />
            <div>
                <strong>Goals:</strong>
                <ul className="list-disc list-inside ml-1">
                    {user.goals.map((goal, index) => <li key={index}>{goal}</li>)}
                </ul>
            </div>
        </div>
         <p><strong>Stage:</strong> {user.stage}</p>
      </div>
    </div>
  );
};

export default UserProfileCard; 