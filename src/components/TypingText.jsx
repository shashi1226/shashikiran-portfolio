import { useEffect, useState } from "react";

function TypingText({ text, speed = 60, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;
    let interval;

    timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return <span>{displayedText}</span>;
}

export default TypingText;