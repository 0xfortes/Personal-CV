import { useState, useEffect } from 'react';

const AnimatedText = ({ text, delay = 0, onComplete, showCursor = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldBlink, setShouldBlink] = useState(true);

  useEffect(() => {
    if (isComplete) return;

    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, 100);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, onComplete, isComplete]);

  useEffect(() => {
    if (!showCursor) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    const blinkTimeout = setTimeout(() => {
      setShouldBlink(false);
      setCursorVisible(true);
    }, 10000);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(blinkTimeout);
    };
  }, [showCursor]);

  return (
    <span>
      {displayText}
      {showCursor && (shouldBlink ? cursorVisible : true) && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default AnimatedText;
