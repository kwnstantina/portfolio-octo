import styles from "./skills.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

type SkillsProps = {
  skills: any;
};

type Skill = {
  id: number;
  name: string;
  level: number;
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [onHover, setOnHover] = useState<Skill>({ id: 0, name: "", level: 0 });

  const showSkillDetails = (hovered: any) => {
    setOnHover(hovered);
  };
  const hideSkillDetails = () => {
    setOnHover({ id: 0, name: "", level: 0 });
  };

  return (
    <div className={styles["container"]}>
      {skills.map((skill: any) => (
        <Skill
          key={skill.id}
          onHover={showSkillDetails}
          onLeave={hideSkillDetails}
          skill={skill}
          id={onHover.id}
        />
      ))}
    </div>
  );
};

const Skill = ({ onHover, onLeave, skill, id }: any) => (
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
    {skill.id === id && <SkillDetails skill={skill} />}
  </div>
);

const SkillDetails = ({ skill }: { skill: Skill }) => (
  <motion.div
    className={styles["skill-details"]}
    initial={{ width: 0 }}
    animate={{ width: `${skill.level* 15}%` }}
    transition={{
      duration: 0.5,
      delay: 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 50,
      damping: 8,
    }}
  >
    <motion.div
      className={styles["skill-level"]}
      style={{ width: `${skill.level* 15}%` } as any}
    ></motion.div>
    <motion.div className={styles["skills-word"]}>{skill.level}yrs</motion.div>
  </motion.div>
);

export default Skills;
