import { categories} from "../../lib/data/data";
import Accordion from "../accordion/accordion";
import SEO from "../../components/SEO";

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
      <SEO
        title="Skills & Expertise - Konstantina Kirtsia"
        description="Explore my technical skills across Frontend, Backend, and Mobile development. Proficient in React, TypeScript, Node.js, GraphQL, and more."
        keywords="React, TypeScript, JavaScript, Node.js, GraphQL, Frontend Developer, Backend Developer, Full Stack Skills"
        url="https://your-domain.com/skills"
      />
      {categories.map((item) => (
        <Accordion item={item as Category} key={item.id} />
      ))}
    </>
  );
};
export default SkillsWrapper;
