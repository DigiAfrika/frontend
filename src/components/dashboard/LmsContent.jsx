import React, { useState } from 'react';
import { FaBookOpen, FaPlayCircle, FaCheckCircle, FaFileAlt, FaChalkboard, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const getIconForType = (type) => {
  switch (type.toLowerCase()) {
    case 'video':
    case 'video series':
      return <FaVideo className="mr-2 text-red-500" />;
    case 'quiz':
      return <FaFileAlt className="mr-2 text-blue-500" />; // Placeholder icon
    case 'article':
      return <FaFileAlt className="mr-2 text-green-500" />;
    case 'workshop':
         return <FaChalkboard className="mr-2 text-purple-500" />;
    case 'course':
    default:
      return <FaBookOpen className="mr-2 text-orange-500" />;
  }
};

const LmsContent = ({ user, setUserData }) => { // Accept setUserData to update parent state if needed
    if (!user || !user.learningModules) return <p className="text-gray-500">Loading learning content...</p>;

    const handleModuleAction = (moduleId, currentStatus) => {
        console.log(`Action on module ${moduleId}, current status: ${currentStatus}`);
        // In a real app, this would trigger navigation or update backend state.
        // For demo, we can update the local state (if passed down via props/context)
        // Example: Update status from 'not started' to 'in progress'
        // setUserData(prev => ({
        //     ...prev,
        //     learningModules: prev.learningModules.map(m =>
        //         m.id === moduleId && m.status === 'not started' ? { ...m, status: 'in progress', progress: 10 } : m
        //     )
        // }));
         alert(`Simulating action for module: ${user.learningModules.find(m=>m.id === moduleId)?.title}`);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-500';
            case 'in progress': return 'bg-blue-500';
            case 'not started':
            default: return 'bg-gray-300';
        }
    };

    const getActionButton = (module) => {
        switch (module.status) {
            case 'completed':
                return <FaCheckCircle className="text-green-500 text-xl" title="Completed" />;
            case 'in progress':
                return (
                    <button
                        onClick={() => handleModuleAction(module.id, module.status)}
                        className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-colors text-xs"
                    >
                        Continue
                    </button>
                );
            case 'not started':
            default:
                return (
                    <button
                        onClick={() => handleModuleAction(module.id, module.status)}
                        className="text-sm bg-[#F69704] text-white px-3 py-1 rounded-full hover:bg-opacity-90 transition-colors text-xs"
                    >
                        Start
                    </button>
                );
        }
    };


  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6">
      <h3 className="text-lg md:text-xl font-semibold text-[#065A2F] mb-4 flex items-center">
         <FaChalkboard className="mr-2 text-[#F69704]" /> Your Learning Path
      </h3>

      <div className="space-y-4">
        {user.learningModules.map((module) => (
             <motion.div
                 key={module.id}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.3 }}
                 className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md transition-shadow"
             >
                <div className="flex-grow mb-3 sm:mb-0 sm:mr-4">
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                       {getIconForType(module.type)}
                       <span>{module.type} - {module.duration}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">{module.title}</h4>
                    {module.status !== 'not started' && (
                        <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                    className={`h-1.5 rounded-full ${getStatusColor(module.status)}`}
                                    style={{ width: `${module.progress}%` }}
                                ></div>
                            </div>
                             <span className="text-xs text-gray-500">{module.progress}% complete</span>
                        </div>
                    )}
                 </div>
                <div className="flex-shrink-0 self-end sm:self-center">
                     {getActionButton(module)}
                 </div>
            </motion.div>
        ))}
      </div>

       <button className="mt-6 text-sm bg-[#065A2F] text-white px-4 py-2 rounded-full hover:bg-opacity-90">
           Browse Full Course Catalog
       </button>
    </div>
  );
};

export default LmsContent;