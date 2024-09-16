import React from 'react';

const ProjectPage0002: React.FC = () => {
  return (
    <div className="page-container">
      <main>
        <article>
          <h1>React Go Game for Two Players: A Journey Through Technologies</h1>
          
          <section>
            <h2>Introduction</h2>
            <p>Welcome to an exploration of the React Go Game project, a venture designed to provide a rich problem domain for delving into multiple technologies. As developers, we often find that the true depth of learning comes when we apply our skills to projects that challenge us beyond the scope of typical tutorials and textbooks.</p>
          </section>

          <section>
            <h2>The Game of Go: A 2,500-Year-Old Challenge</h2>
            <p>Go, an ancient board game originating in China over 2,500 years ago, stands as a testament to the enduring appeal of strategic thinking. Unlike many games that have faded into obscurity, Go continues to challenge and fascinate players worldwide.</p>

            <figure className="article-image">
              <div className="aspect-ratio-box">
                <img src="https://picsum.photos/1200/600" alt="Traditional Go board with black and white stones" />
              </div>
              <figcaption>A traditional Go board set up for play</figcaption>
            </figure>

            <h3>Comparing Go to Chess</h3>
            <p>While both Go and Chess are two-player strategy games where chance plays no role, Go presents a unique set of challenges:</p>
            <ul>
              <li>Go has a much larger game tree complexity compared to Chess.</li>
              <li>The number of possible moves in Go is vastly greater: 361! compared to 64! in Chess.</li>
              <li>Go's simplicity in rules belies its strategic depth, making it a formidable challenge for AI.</li>
            </ul>
          </section>

          <section>
            <h2>The React Go Game Project</h2>
            <p>Our React Go Game is a responsive web application that brings this ancient game into the digital age. It's designed to be played on both desktop and mobile devices, offering a seamless experience across platforms.</p>

            <figure className="article-image">
              <div className="aspect-ratio-box">
                <img src="https://picsum.photos/1200/600" alt="Screenshot of the React Go Game on desktop" />
              </div>
              <figcaption>The React Go Game interface on a desktop browser</figcaption>
            </figure>

            <h3>Key Features</h3>
            <ul>
              <li>Two-player gameplay</li>
              <li>Responsive design for various screen sizes</li>
              <li>Real-time move updates</li>
              <li>In-game chat functionality</li>
              <li>User authentication and game state persistence</li>
            </ul>
          </section>

          <section>
            <h2>Technical Challenges and Learning Opportunities</h2>
            <p>Developing this Go game has presented numerous challenges, each offering valuable learning experiences:</p>
            <ul>
              <li>Implementing complex spatial algorithms for move validation and scoring</li>
              <li>Managing game state across 361 board intersections</li>
              <li>Integrating real-time updates and chat using push messaging</li>
              <li>Implementing secure user authentication and authorization</li>
              <li>Designing a responsive UI that maintains game integrity across devices</li>
            </ul>
          </section>

          <section>
            <h2>Technologies Utilized</h2>
            <p>This project leverages a modern tech stack to create a robust and scalable application:</p>
            <ul>
              <li>React for the frontend user interface</li>
              <li>TypeScript for type-safe code</li>
              <li>Firebase for authentication and real-time database</li>
              <li>Chakra UI for consistent and customizable UI components</li>
              <li>Zustand for lightweight state management</li>
            </ul>
          </section>

          <section>
            <h2>Future Enhancements</h2>
            <p>While the current version of the game is fully functional, there are exciting possibilities for future development:</p>
            <ul>
              <li>Implementing an AI opponent using machine learning techniques</li>
              <li>Adding a game review feature to analyze completed matches</li>
              <li>Integrating a ranking system for competitive play</li>
              <li>Expanding to mobile platforms with React Native</li>
            </ul>
          </section>

          <section>
            <h2>Conclusion</h2>
            <p>The React Go Game project stands as a testament to the learning potential inherent in tackling complex, real-world applications. It has provided invaluable experience in various aspects of modern web development, from frontend design to backend architecture.</p>
            
            <p>We invite you to try out the game and experience firsthand the intersection of ancient strategy and modern technology. For those interested in the technical details or contributing to the project, please visit our GitHub repository.</p>

            <figure className="article-image">
              <div className="aspect-ratio-box">
                <img src="https://picsum.photos/1200/600" alt="Developers collaborating on the React Go Game project" />
              </div>
              <figcaption>Our team collaborating on the React Go Game project</figcaption>
            </figure>
          </section>
        </article>
      </main>
    </div>
  );
};

export default ProjectPage0002;
