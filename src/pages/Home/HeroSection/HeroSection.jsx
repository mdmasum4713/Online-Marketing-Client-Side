import { useEffect, useState } from "react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 1, minutes: 22, seconds: 2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.days * 24 * 60 * 60 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Timer reached zero
        }

        const newDays = Math.floor((totalSeconds - 1) / (24 * 3600));
        const newHours = Math.floor((totalSeconds - 1) % (24 * 3600) / 3600);
        const newMinutes = Math.floor((totalSeconds - 1) % 3600 / 60);
        const newSeconds = (totalSeconds - 1) % 60;

        return { days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="bg-gray-800 text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Every Day Shopping</h1>
      <h2 className="text-2xl mb-4">Deal of the Days</h2>

      <div className="flex space-x-4 mb-6">
        <div className="bg-yellow-400 text-black p-4 rounded">
          <span className="text-3xl">{timeLeft.days}</span>
          <p>Day</p>
        </div>
        <div className="bg-yellow-400 text-black p-4 rounded">
          <span className="text-3xl">{timeLeft.hours}</span>
          <p>Hrs</p>
        </div>
        <div className="bg-yellow-400 text-black p-4 rounded">
          <span className="text-3xl">{timeLeft.minutes}</span>
          <p>Min</p>
        </div>
        <div className="bg-yellow-400 text-black p-4 rounded">
          <span className="text-3xl">{timeLeft.seconds}</span>
          <p>Sec</p>
        </div>
      </div>

      <h3 className="text-xl mb-2">1300+ Customer Reviews</h3>
      <p className="text-lg">Our customers love us!</p>
    </div>
  );
};

export default HeroSection;
