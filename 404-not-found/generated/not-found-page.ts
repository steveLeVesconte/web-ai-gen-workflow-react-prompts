import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <main className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! It seems you've ventured into uncharted territory. Don't worry, even the best explorers sometimes lose their way.</p>
      
      <div className="article-image">
        <figure>
          <div className="aspect-ratio-box">
            <img src="https://picsum.photos/1200/600" alt="A scenic landscape" />
          </div>
          <figcaption>Sometimes, getting lost leads to unexpected discoveries.</figcaption>
        </figure>
      </div>

      <h2>What happened?</h2>
      <p>The page you're looking for might have been moved, renamed, or maybe it never existed in the first place. But don't let that stop your journey!</p>

      <h3>Here are some helpful links to get you back on track:</h3>
      <ul>
        <li>
          <Link to="/projects">Check out our Projects Page</Link> - Explore a curated list of exciting projects and their details.
        </li>
        <li>
          <Link to="/">Visit our Home Page</Link> - Discover featured projects and get an overview of what we offer.
        </li>
      </ul>

      <blockquote>
        "The only true wisdom is in knowing you know nothing." - Socrates
      </blockquote>

      <p>If you believe this is a mistake or you're having trouble finding what you need, don't hesitate to reach out. We're here to help!</p>

      <div className="article-image">
        <figure>
          <div className="aspect-ratio-box">
            <img src="https://picsum.photos/1200/600" alt="A compass pointing the way" />
          </div>
          <figcaption>Let us help you find your way back.</figcaption>
        </figure>
      </div>
    </main>
  );
};

export default NotFoundPage;
