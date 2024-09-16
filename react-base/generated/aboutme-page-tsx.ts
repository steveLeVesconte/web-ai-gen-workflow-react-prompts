import React from "react";
import SkillsList from "../components/SkillsList";

const AboutMePage: React.FC = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>
        Hi, I'm John Doe, a passionate Full Stack Developer with a knack for creating
        robust and user-friendly web applications. With 5 years of experience in the
        industry, I've honed my skills in both front-end and back-end technologies.
      </p>
      <h2>My Journey</h2>
      <p>
        My journey in web development started with a curiosity for how things work
        on the internet. This curiosity led me to dive deep into various programming
        languages and frameworks, constantly learning and adapting to the ever-evolving
        tech landscape.
      </p>
      <h2>Skills</h2>
      <SkillsList />
      <h2>My Approach</h2>
      <p>
        I believe in writing clean, maintainable code and following best practices in
        software development. My approach involves understanding the client's needs,
        planning thoroughly, and implementing solutions that are not just functional
        but also scalable and efficient.
      </p>
      <blockquote>
        "The best way to predict the future is to invent it." - Alan Kay
      </blockquote>
      <h2>Let's Connect</h2>
      <p>
        I'm always open to new opportunities and collaborations. Whether you have a
        project in mind or just want to chat about tech, feel free to reach out!
      </p>
    </div>
  );
};

export default AboutMePage;
