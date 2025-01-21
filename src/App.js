import React, { useEffect, useState } from 'react';
import './App.css';
import Toy from './Toy'; // Import the Toy component

const App = () => {
  const startDate = new Date('2024-10-22'); // Replace with your actual start date
  const [time, setTime] = useState(getTimeDifference(startDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeDifference(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  function getTimeDifference(startDate) {
    const now = new Date();
    const diff = now - startDate; // Difference in milliseconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const seconds = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000);
    return { days, seconds };
  }

  return (
    <div className="App">
      <div className="letter">
        <h1 className="letter-heading">My Dearest Love</h1>
        <p className="letter-text">
          I want to take a moment to tell you how incredibly much I love you. You mean more to me than anything in this world.
          Every moment spent with you, every conversation, and every laugh just reminds me of how blessed I am to have you in my life.
        </p>
        <p className="letter-text">
          I truly cherish the little things, like how you always manage to irritate me in the most playful ways. Your roasts and teasing are things I adore, as they bring a smile to my face every time. You make my life so much more fun, and I wouldn't have it any other way.
        </p>
        <p className="letter-text">
          I love talking to you every day, as it makes my world brighter and more beautiful. I can't wait to continue this amazing journey with you.
        </p>
        <p className="letter-signature">With all my love,</p>
        <p className="letter-signature">Priyanka</p>
      </div>

      <div className="timer">
        <h2 className="timer-heading">We've been together for</h2>
        <p className="timer-count">
          {time.days} <span>Days</span> and {time.seconds} <span>Seconds</span>
        </p>
      </div>

      <Toy /> {/* Add the Toy component here */}
    </div>
  );
};

export default App;
