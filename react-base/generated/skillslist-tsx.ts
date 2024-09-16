import React from "react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "HTML5 & CSS3",
  "Git & GitHub",
  "RESTful APIs",
  "GraphQL",
  "Docker",
];

const SkillsList: React.FC = () => {
  return (
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillsList;
