import React, { Fragment } from 'react';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <Fragment>
      <ProjectCard>
        <a href="http://runebear.com" target="_blank" rel="noopener noreferrer">
          <img src="images/projects/runebear.png" alt="Rune Bear" />
        </a>
        <div className="card-content">
          <h1 className="card-header">Rune Bear</h1>
          <div className="card-paragraphs">
            <p>
              Digital literary magazine dedicated to the Strange, Surreal,
              Supernatural, and Speculative
            </p>
            <div className="built-with">
              <p>Built with:</p>
              <p>
                React, React Router, Styled Components, WP REST API, Cypress,
                and Jest
              </p>
            </div>
          </div>
        </div>
      </ProjectCard>
      <ProjectCard>
        <a
          href="https://coriander.surge.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/projects/coriander.png" alt="Coriander" />
        </a>
        <div className="card-content">
          <h1 className="card-header">Coriander</h1>
          <div className="card-paragraphs">
            <p>Form validation library built with JavaScript</p>
            <div className="built-with">
              <p>Built with:</p>
              <p>JavaScript, Gulp, NPM, Jasmine</p>
            </div>
          </div>
        </div>
      </ProjectCard>
      <ProjectCard>
        <a
          href="https://hello-webpack.surge.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/projects/hello-webpack.png" alt="Hello Webpack" />
        </a>
        <div className="card-content">
          <h1 className="card-header">Hello Webpack</h1>
          <div className="card-paragraphs">
            <p>Front End dev env using webpack</p>
            <div className="built-with">
              <p>Built with:</p>
              <p>Webpack, Babel, jQuery, Bootstrap</p>
            </div>
          </div>
        </div>
      </ProjectCard>
    </Fragment>
  );
};

export default Projects;
