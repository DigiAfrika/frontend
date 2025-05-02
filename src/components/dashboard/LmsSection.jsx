// src/components/dashboard/LmsSection.jsx
import React from 'react';
import AiMentor from './AiMentor';
import LmsContent from './LmsContent';
import UserProfileCard from './UserProfileCard';
import { demoUserData } from './data'; // Import the demo data

const LmsSection = () => {
  // In a real app, fetch user data here, perhaps using useState and useEffect
  const [user, setUser] = React.useState(demoUserData); // Manage state if needed

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
         <UserProfileCard user={user} />
         {/* Pass user and potentially setUser to update state */}
         <LmsContent user={user} setUserData={setUser} />
      </div>
      <div className="lg:col-span-2">
        <AiMentor user={user} />
      </div>
    </div>
  );
};

export default LmsSection;