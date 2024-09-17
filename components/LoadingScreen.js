import { useState, useEffect } from 'react';

const LoadingScreen = ({ isLoading }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setRotation((prevRotation) => (prevRotation + 10) % 360);
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" style={{ transform: `rotate(${rotation}deg)` }}></div>
    </div>
  );
};

export default LoadingScreen;
