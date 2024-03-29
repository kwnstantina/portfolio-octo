import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import  styles from './animatedWordList.module.scss';
import LayerAnimButton from "../layerAnimButton/layerAnimButton";

const AnimatedWordList = () => {
    const [word, setWord] = useState<string>('')
    const words = [
        'SPORTS',
        'WORLD',
        'CODING',
        'LEARNING',
        'ART',
        'MUSIC',
        'MOVIES',
        'TRAVEL',
        'FOOD',
        'AMIME',
        '404',
    ]
    const finalWord = 'DESIGN'

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setWord(words[index])
            index = (index + 1) % words.length
        }, 250)

        setTimeout(() => {
            clearInterval(interval)
            setWord(finalWord)
        }, 6500)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <motion.div
                className={styles["introduction"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{
                    x: [-100, 40],
                    opacity: [0.3, 1],
                    scale: [0.5, 1],
                }}
                transition={{ duration: 0.5 }}
               
                onAnimationComplete={() => setWord(finalWord)}
            >
                <motion.div className={styles["introduction__wrapper"]}>
                    <motion.div>
                        <motion.p className={styles["introduction__word-0"]}>
                            Hey, I'm Konstantina
                        </motion.p>
                    </motion.div>
                    <motion.div className={styles["introduction__description"]}>
                    <motion.p className={styles["introduction__word-1"]}>
                            A Software Developer with love{' '}
                   </motion.p>
                   </motion.div>
                    <motion.div className={styles["introduction__description"]}>
                       <motion.p className={styles["introduction__word-6"]}>
                         for
                        </motion.p>
                        <motion.p
                            className={styles["introduction__word-5"]}
                            key={word}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >    
                            {word}
                        </motion.p>
                     </motion.div>
                </motion.div>
            </motion.div>
            <div className={styles['button']}>
                <LayerAnimButton />
            </div>

        </>
    )
}

export default AnimatedWordList;
