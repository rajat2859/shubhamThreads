import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
   // Set your launch date here
   const launchDate = new Date('2026-05-31T00:00:00').getTime();

   const [timeLeft, setTimeLeft] = useState({
      days: 0, hours: 0, minutes: 0, seconds: 0
   });

   useEffect(() => {
      const timer = setInterval(() => {
         const now = new Date().getTime();
         const distance = launchDate - now;

         if (distance < 0) {
            clearInterval(timer);
         } else {
            setTimeLeft({
               days: Math.floor(distance / (1000 * 60 * 60 * 24)),
               hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
               minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
               seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
         }
      }, 1000);

      return () => clearInterval(timer);
   }, [launchDate]);

   return (
      <div className="soon-container ">
         <div className="content">
            <h1>Something Big is Coming</h1>
            <p>We're working hard to bring you the best experience. Stay tuned!</p>

            <div className="countdown">
               <div className="time-box"><span>{timeLeft.days}</span><label>Days</label></div>
               <div className="time-box"><span>{timeLeft.hours}</span><label>Hours</label></div>
               <div className="time-box"><span>{timeLeft.minutes}</span><label>Min</label></div>
               <div className="time-box"><span>{timeLeft.seconds}</span><label>Sec</label></div>
            </div>
         </div>
      </div>
   );
};

export default ComingSoon;
