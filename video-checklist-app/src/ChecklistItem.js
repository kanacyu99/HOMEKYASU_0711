import React from 'react';

// Array of praise messages (can be moved to a shared constants file if needed elsewhere)
const praiseMessages = [
  "Great job!",
  "よくできました！",
  "Nice!",
  "Awesome!",
  "Keep it up!",
  "Fantastic!",
  "You're a star!"
];

// Helper function to get a random praise message
const getRandomPraise = () => praiseMessages[Math.floor(Math.random() * praiseMessages.length)];

const ChecklistItem = ({ step, isCompleted, onComplete }) => {
  return (
    <div className={`checklist-item ${isCompleted ? 'completed' : ''}`}>
      <p>{step}</p>
      {!isCompleted ? (
        <button onClick={onComplete}>Complete</button>
      ) : (
        <p className="praise-message">{getRandomPraise()}</p>
      )}
    </div>
  );
};

export default ChecklistItem;
