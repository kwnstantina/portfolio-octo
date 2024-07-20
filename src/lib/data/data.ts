export const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Skills",
    to: "/skills",
  },
  {
    name: "CV",
    to: "/cv",
  },
] as const;

export const skills = [
  { id: 13243, name: "HTML", level: 80 },
  { id: 223432, name: "CSS", level: 70 },
  { id: 342344, name: "JavaScript", level: 70 },
  { id: 423453, name: "React", level: 90 },
  { id: 546346, name: "React Native", level: 70 },
  { id: 675675, name: "C#", level: 60 },
  { id: 745645, name: "MongoDB", level: 40 },
  { id: 8423, name: "UX", level: 50 },
] as const;

export const categories = [
  {
    id: 1,
    name: "Frontend",
    skills: [
      { id: 13243, name: "HTML", level: 80 },
      { id: 223432, name: "CSS", level: 70 },
      { id: 342344, name: "JavaScript", level: 70 },
      { id: 423453, name: "React", level: 90 },
    ],
  },
  {
    id: 2,
    name: "Backend",
    skills: [
      { id: 675675, name: "C#", level: 60 },
      { id: 745645, name: "MongoDB", level: 40 },
      { id: 8423, name: "SQL", level: 50 },
      { id: 843, name: "JAVA", level: 30 },
    ],
  },
  {
    id: 3,
    name:"Mobile",
    skills: [
      { id: 546346, name: "React Native", level: 70 },
      { id: 342344, name: "Flutter", level:20 },
    ],
  }
] as const;

export const levelToYears = (level: number): string => {
  if (level <= 20) return "< 1 year";
  if (level <= 40) return "1-2 years";
  if (level <= 60) return "2-3 years";
  if (level <= 80) return "3-4 years";
  return "4+ years";
};
