import React, { useEffect, useState } from 'react'

export const useTypingTextAnimation = (words: string[], speed: number, skipDelay: number) => {
  const [part, setPart] = useState('');
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[index].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset(offset + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setIndex((index + 1) % words.length);
        } else {
          setOffset(offset - 1);
        }
      }
      setPart(words[index].substr(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, skipCount, index, words, speed, skipDelay]);

  return part;
}
