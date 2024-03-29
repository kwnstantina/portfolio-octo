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
    { id: 13243, name: "HTML", level: 5 },
    { id: 223432, name: "CSS", level: 5 },
    { id: 342344, name: "JavaScript", level: 5 },
    { id: 423453, name: "React", level: 4 },
    { id: 546346, name: "React Native", level: 4 },
    { id: 675675, name: "C#", level: 3 },
    { id: 745645, name: "MongoDB", level: 3 },
    { id: 8423, name: "UX", level: 4 },
  ] as const;
  
  export const categories = [
    {
      id: 1,
      name: "Frontend",
      skills: [
        { id: 13243, name: "HTML", level: 5 },
        { id: 223432, name: "CSS", level: 5 },
        { id: 342344, name: "JavaScript", level: 5 },
        { id: 423453, name: "React", level: 4 },
      ],
    },
    {
      id: 2,
      name: "Backend",
      skills: [
        { id: 675675, name: "C#", level: 3 },
        { id: 745645, name: "MongoDB", level: 3 },
        { id: 8423, name: "SQL", level: 4 },
        { id: 843, name: "JAVA", level: 2 },
      ],
    },
    {
      id: 3,
      name:"Mobile",
      skills: [
        { id: 546346, name: "React Native", level: 3 },
      ],
    }
  ] as const;
  