import { useState, useEffect } from 'react';
import styles from './DidYouKnowLoader.module.scss';

interface DidYouKnowLoaderProps {
  message?: string;
}

const interestingFacts = [
  "The first computer bug was an actual moth found in a Harvard Mark II computer in 1947",
  "Cleopatra lived closer to the moon landing than to the building of the Great Pyramids",
  "There are more possible iterations of a chess game than atoms in the observable universe",
  "Honey never spoils - archaeologists found 3000-year-old honey in Egyptian tombs that's still edible",
  "The Great Wall of China is NOT visible from space without aid, contrary to popular belief",
  "The first email was sent in 1971 by Ray Tomlinson... to himself",
  "Octopuses have three hearts and blue blood",
  "There are more than 7,000 languages spoken worldwide today",
  "The inventor of the World Wide Web, Tim Berners-Lee, made it free for everyone",
  "A day on Venus is longer than its year",
  "The oldest known musical instrument is a 40,000-year-old flute made from a vulture bone",
  "Bananas are berries, but strawberries aren't",
  "The human brain uses about 20% of the body's energy despite being only 2% of body mass",
  "The shortest war in history lasted 38 minutes (Anglo-Zanzibar War, 1896)",
  "There are more stars in the universe than grains of sand on all Earth's beaches",
  "The first computer programmer was a woman: Ada Lovelace in the 1840s",
  "A group of flamingos is called a 'flamboyance'",
  "The Eiffel Tower can be 15 cm taller during summer due to thermal expansion",
  "Ancient Romans used urine as mouthwash due to its ammonia content",
  "The dot over the letter 'i' is called a tittle",
  "Shakespeare invented over 1,700 words that we still use today",
  "A single cloud can weigh more than a million pounds",
  "The fingerprints of koalas are so similar to humans' that they've confused crime scenes",
  "Neutron stars are so dense that a teaspoon of their material would weigh a billion tons",
  "The longest word you can type using only the top row of a keyboard is 'typewriter'",
  "The human body contains enough iron to make a 3-inch nail",
  "The average person walks the equivalent of three times around the world in a lifetime",
  "There are more possible ways to arrange a deck of cards than atoms on Earth",
  "The inventor of the frisbee was turned into a frisbee after death (his ashes were molded into one)",
  "Dolphins have names for each other and call out to specific individuals",
];

const DidYouKnowLoader = ({ message = "Loading your content" }: DidYouKnowLoaderProps) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentFactIndex((prevIndex) => (prevIndex + 1) % interestingFacts.length);
        setFadeIn(true);
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>🔮</span>
        </div>

        <h3 className={styles.title}>Did you know?</h3>

        <p className={`${styles.fact} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
          {interestingFacts[currentFactIndex]}
        </p>

        <div className={styles.loadingText}>
          {message}
          <span className={styles.dots}>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnowLoader;
