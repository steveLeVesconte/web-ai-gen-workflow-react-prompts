import React from 'react';
import Layout from '../components/Layout';

const ProjectPage0001: React.FC = () => {
  return (
    <Layout>
      <article className="project-content">
        <h1>E-commerce Platform</h1>
        <p className="project-subtitle">A scalable and responsive online shopping solution</p>
        
        <section className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Our E-commerce Platform is designed to provide businesses with a robust, 
            scalable, and user-friendly solution for online retail. Built with modern 
            web technologies, it offers a seamless shopping experience across devices.
          </p>
        </section>

        <figure className="article-image">
          <div className="aspect-ratio-box">
            <img src="https://picsum.photos/1200/600" alt="E-commerce platform dashboard" />
          </div>
          <figcaption>E-commerce platform dashboard showcasing key metrics and features</figcaption>
        </figure>

        <section className="project-features">
          <h2>Key Features</h2>
          <ul>
            <li>Responsive design for mobile and desktop</li>
            <li>Secure payment gateway integration</li>
            <li>Real-time inventory management</li>
            <li>Customer review and rating system</li>
            <li>Advanced search and filtering options</li>
          </ul>
        </section>

        <section className="project-challenges">
          <h2>Challenges and Solutions</h2>
          <p>
            One of the main challenges we faced was ensuring fast load times while 
            maintaining a rich, interactive user interface. We implemented lazy loading 
            techniques and optimized our database queries to significantly improve 
            performance.
          </p>
        </section>

        <figure className="article-image">
          <div className="aspect-ratio-box">
            <img src="https://picsum.photos/1200/600" alt="Mobile view of the e-commerce platform" />
          </div>
          <figcaption>Mobile-responsive design of the e-commerce platform</figcaption>
        </figure>

        <section className="project-tech-stack">
          <h2>Technology Stack</h2>
          <p>
            The E-commerce Platform was built using a modern tech stack including:
          </p>
          <ul>
            <li>React for the frontend</li>
            <li>Node.js and Express for the backend</li>
            <li>MongoDB for the database</li>
            <li>Redux for state management</li>
            <li>AWS for hosting and scalability</li>
          </ul>
        </section>

        <section className="project-conclusion">
          <h2>Conclusion</h2>
          <p>
            This project demonstrates our ability to create complex, scalable web 
            applications that meet the needs of modern businesses. The E-commerce 
            Platform showcases our expertise in full-stack development, user experience 
            design, and performance optimization.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default ProjectPage0001;
