import SkillsList from '../components/SkillsList';
import '../styles/aboutMe.css';

const AboutMePage: React.FC = () => {
  return (
    <div className="about-me">
      <h1>Crafting Digital Experiences: My Journey as a Full Stack Developer</h1>
      
      <section>
        <h2>Who I Am</h2>
        <p>Hello! I'm John Doe, a passionate Full Stack Developer with a keen eye for creating seamless, user-centric web applications. With over 5 years of experience in the tech industry, I've had the privilege of working on diverse projects that have sharpened my skills and broadened my perspective.</p>
      </section>

      <section className="article-image">
        <figure className="aspect-ratio-box">
          <img src="https://picsum.photos/1200/600" alt="John Doe working on a computer" />
        </figure>
        <figcaption>Bringing ideas to life through code</figcaption>
      </section>

      <section>
        <h2>My Approach</h2>
        <p>I believe in the power of technology to solve real-world problems. My approach combines technical expertise with creative problem-solving, always keeping the end-user in mind. Whether it's optimizing database queries or crafting intuitive user interfaces, I strive for excellence in every line of code I write.</p>
      </section>

      <blockquote>
        "The best way to predict the future is to create it." - This quote by Alan Kay resonates deeply with my philosophy as a developer. Each project is an opportunity to shape the digital landscape and create meaningful experiences.
      </blockquote>

      <section>
        <h2>Skills & Expertise</h2>
        <p>In the ever-evolving world of web development, staying current with the latest technologies is crucial. Here's a glimpse of my technical toolkit:</p>
        <SkillsList />
      </section>

      <section className="article-image">
        <figure className="aspect-ratio-box">
          <img src="https://picsum.photos/1200/600" alt="Code on a computer screen" />
        </figure>
        <figcaption>Always learning, always growing</figcaption>
      </section>

      <section>
        <h2>Beyond the Code</h2>
        <p>When I'm not immersed in code, you can find me exploring nature trails, experimenting with new recipes in the kitchen, or contributing to open-source projects. I believe that a well-rounded life fuels creativity and brings fresh perspectives to my work.</p>
      </section>
    </div>
  );
};

export default AboutMePage;
