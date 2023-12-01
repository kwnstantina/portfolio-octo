import styles from './skills.module.scss';
import {motion} from 'framer-motion';
import {skills} from "../../lib/data/data";
import {useEffect, useState} from "react";

const Skills = () => {
    const [onHover, setOnHover] = useState({id: 0, name: '', level: 0}) as typeof skills[0] & { id: number };
    const showSkillDetails = (hovered) => {
        setOnHover(hovered);
    };

    const hideSkillDetails = () => {
        setOnHover({id: 0, name: '', level: 0});
    };

    return (
        <>
            <div className={styles["paint-splatter"]}>
                <p className={styles["paint-splatter__text"]}>Hoover</p>
            </div>

            <div className={styles['container']}>
                {skills.map(skill => (
                    <Skill
                        key={skill.id}
                        onHover={showSkillDetails}
                        onLeave={hideSkillDetails}
                        skill={skill}
                        id={onHover.id}
                    />
                ))}
            </div>
        </>
    )
}

const Skill = ({onHover, onLeave, skill, id}) => (
    <div className={styles["skill-container"]}>
        <motion.div
            className={styles["skill"]}
            onHoverStart={() => onHover(skill)}
            onHoverEnd={onLeave}
            key={id}
            id={skill.id}
        >
            {skill.name}
        </motion.div>
        {skill.id === id && (
            <SkillDetails skill={skill}/>
        )}

    </div>
);

const SkillDetails = ({skill}) => (
    <motion.div
        className={styles["skill-details"]}
        initial={{width: 0}}
        animate={{width: `${skill.level}%`}}
        transition={{duration: 0.5, delay: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 50, damping: 8}}
    >
        <motion.div className={styles['skill-level']} style={{width: `${skill.level}%`} as any}>
        </motion.div>
        <motion.div className={styles['skills-word']}>
            {skill.level}%
        </motion.div>
    </motion.div>
);
export default Skills;
