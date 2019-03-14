import React, { Fragment } from 'react';
import Card from '../Card';

const Projects = () => {
  return (
    <Fragment>
      <Card>
        <a href="http://runebear.com" target="_blank" rel="noopener noreferrer">
          <img src="images/projects/runebear.png" alt="Rune Bear" />
        </a>
        <div className="card-content">
          <h1>Rune Bear</h1>
          <p>React, React Router, and Styled Components, WP REST API</p>
          <p>
            Digital literary magazine dedicated to the Strange, Surreal,
            Supernatural, and Speculative
          </p>
        </div>
      </Card>
      <Card>
        <a
          href="https://coriander.surge.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/projects/coriander.png" alt="Coriander" />
        </a>
        <div className="card-content">
          <h1>Coriander</h1>
          <p>JavaScript, Gulp, NPM, Jasmine</p>
          <p>Form validation library built with JavaScript</p>
        </div>
      </Card>
      <Card>
        <a
          href="https://hello-webpack.surge.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/projects/hello-webpack.png" alt="Hello Webpack" />
        </a>
        <div className="card-content">
          <h1>Hello Webpack</h1>
          <p>Webpack, Babel, jQuery, Bootstrap</p>
          <p>Front End dev env using webpack</p>
        </div>
      </Card>
    </Fragment>
  );
};

export default Projects;
