import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoonPage: React.FC = () => {
  return (
    <div className="page-container">
      <main>
        <h1>Coming Soon: Exciting Projects Ahead!</h1>
        
        <p>
          Welcome to our "Coming Soon" page! We're working hard to bring you some amazing new projects and features. 
          While you wait, here's a sneak peek of what's to come and some of our existing work.
        </p>

        <h2>What to Expect</h2>
        
        <p>
          Our team is dedicated to creating innovative solutions and pushing the boundaries of web development. 
          Stay tuned for cutting-edge projects that showcase the latest in React, TypeScript, and responsive design.
        </p>

        <figure className="article-image">
          <div className="aspect-ratio-box">
            <img src="https://picsum.photos/1200/600" alt="Exciting new project preview" />
          </div>
          <figcaption>A glimpse into our upcoming projects</figcaption>
        </figure>

        <h2>Current Highlights</h2>
        
        <p>
          While you're waiting for our new projects, why not check out some of our current work? 
          We have a range of exciting projects that demonstrate our skills and expertise.
        </p>

        <ul>
          <li>
            <Link to="/projects">View All Projects</Link> - Explore our complete portfolio of work, 
            showcasing a diverse range of web applications and sites.
          </li>
          <li>
            <Link to="/">Featured Projects</Link> - See our top picks on the homepage, highlighting 
            our most innovative and impactful projects.
          </li>
        </ul>

        <h2>Stay Connected</h2>
        
        <p>
          Want to be the first to know when our new projects launch? Follow us on social media or 
          sign up for our newsletter to receive updates directly in your inbox.
        </p>

        <figure className="article-image">
          <div className="aspect-ratio-box">
            <img src="https://picsum.photos/1200/600" alt="Stay connected with our team" />
          </div>
          <figcaption>Stay in the loop with our latest updates</figcaption>
        </figure>

        <p>
          We appreciate your patience and can't wait to share our upcoming work with you. 
          In the meantime, feel free to explore our existing projects or get in touch if you have any questions!
        </p>
      </main>
    </div>
  );
};

export default ComingSoonPage;
