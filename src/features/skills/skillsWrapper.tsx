import { categories} from "../../lib/data/data";
import Accordion from "../accordion/accordion";

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

const SkillsWrapper = () => {
  return (
    <>
      {categories.map((item) => (
        <Accordion item={item as Category} key={item.id} />
      ))}
    </>
  );
};
export default SkillsWrapper;
