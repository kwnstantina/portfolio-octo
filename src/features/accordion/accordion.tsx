import { useState } from "react";
import { motion, AnimatePresence,useScroll } from "framer-motion";
import styles from "./accordion.module.scss";
import Skills from "../skills/skills";

type Skill = {
    id: number;
    name: string;
    level: number;
  };
  
  type Category = {
    id: number;
    name: string;
    skills: readonly Skill[];
  };
type Props = {
  item: Category;
};

const Accordion = (props: Props): JSX.Element => {
const { item } = props;
const [isOpen, setIsOpen] = useState<boolean>(false);

const toggleAccordion = () => {
    setIsOpen(!isOpen);
};

  return (
    <>
      <motion.button
        className={styles["accordion"]}
        initial={false}
        animate={{ backgroundColor: isOpen ? "#af528a" : "#6749d1" }}
        onClick={toggleAccordion}
      >
        {item.name}
      </motion.button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 700 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { 
                    opacity: 1, 
                    height: "auto",
                 },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.04, 0.62, 0.80, 0.98] }}
            >
              <Skills skills={item.skills} />
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Accordion;
