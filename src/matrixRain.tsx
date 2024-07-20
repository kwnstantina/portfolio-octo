// MatrixRain.tsx
import React, { useEffect, useState } from 'react';
import styles from  './MatrixRain.module.scss';

const MatrixRain: React.FC = () => {
  const [lines, setLines] = useState(Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 2))));

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prevLines => prevLines.map(line => line.map(() => Math.floor(Math.random() * 2))));
    },400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles["matrix-rain"]}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className={styles["matrix-line"]}>
          {line.map((char, charIndex) => (
            <span key={charIndex} className={styles["matrix-char"]}>{char}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;