import React, { useState, useEffect } from 'react';
import './App.css';
import ChecklistItem from './ChecklistItem'; // Import the ChecklistItem component

// Define the 13 video-making steps
const videoSteps = [
  "1. Define Your Video's Goal and Target Audience",
  "2. Choose a Video Topic That Resonates",
  "3. Research and Gather Information",
  "4. Create a Compelling Script",
  "5. Storyboard Your Video",
  "6. Choose Your Location and Set Up Equipment",
  "7. Record Your Video Footage",
  "8. Edit Your Video for Clarity and Impact",
  "9. Add Music, Sound Effects, and Graphics",
  "10. Review and Get Feedback",
  "11. Make Final Revisions",
  "12. Export and Upload Your Video",
  "13. Promote Your Video"
];

// Note: praiseMessages and getRandomPraise are now in ChecklistItem.js

function App() {
  // Initialize completion status from localStorage or as an array of false
  const [completionStatus, setCompletionStatus] = useState(() => {
    const savedStatus = localStorage.getItem('videoCompletionStatus');
    return savedStatus ? JSON.parse(savedStatus) : Array(videoSteps.length).fill(false);
  });

  // Save completion status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('videoCompletionStatus', JSON.stringify(completionStatus));
  }, [completionStatus]);

  // Function to handle completing a step
  const handleCompleteStep = (index) => {
    const newCompletionStatus = [...completionStatus];
    newCompletionStatus[index] = true;
    setCompletionStatus(newCompletionStatus);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Making Checklist</h1>
      </header>
      <div className="checklist-container">
        {videoSteps.map((step, index) => (
          <ChecklistItem
            key={index}
            step={step}
            isCompleted={completionStatus[index]}
            onComplete={() => handleCompleteStep(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
