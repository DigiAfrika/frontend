import React from 'react';
import { FaUserCircle, FaBriefcase, FaMapMarkerAlt, FaBullseye } from 'react-icons/fa';

const UserProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6 border-l-4 border-[#065A2F]">
      <h3 className="text-lg sm:text-xl font-semibold text-[#065A2F] mb-3 sm:mb-4">Your Profile</h3>
      <div className="space-y-3 text-sm text-gray-700 flex flex-col items-start">
        <div className="flex items-start">
          <FaUserCircle style={{marginLeft: '-3px'}} className="ml-0 mt-1 mr-2 w-5 sm:w-6 text-[#F69704]" />
          <p><strong className="mr-1">Name:</strong> {user.name}</p>
        </div>
        
        <div className="flex items-start">
          <FaBriefcase className="mt-1 mr-2 w-5 sm:w-6 text-[#F69704]" />
          <p><strong className="mr-1">Business:</strong> {user.businessName} ({user.businessType})</p>
        </div>
        
        <div className="flex items-start">
          <FaMapMarkerAlt style={{marginLeft: '-3px'}} className="mt-1 ml-0 mr-2 w-5 sm:w-6 text-[#F69704]" />
          <p><strong className="mr-1">Location:</strong> {user.location}</p>
        </div>
        
        <div className="flex items-start">
          <FaBullseye className="mt-1 mr-2 w-5 sm:w-6 text-[#F69704]" />
          <div>
            <p><strong>Goals:</strong></p>
            <ul className="list-disc list-inside ml-4 sm:ml-5">
              {user.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-5 sm:w-6 mr-2"></div> {/* Spacer for alignment */}
          <p><strong>Stage:</strong> {user.stage}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;