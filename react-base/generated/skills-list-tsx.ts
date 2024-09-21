const SkillsList: React.FC = () => {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js",
    "Express.js", "MongoDB", "PostgreSQL", "GraphQL",
    "HTML5", "CSS3", "Sass", "Webpack",
    "Git", "Docker", "AWS", "Agile Methodologies"
  ];

  return (
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillsList;
