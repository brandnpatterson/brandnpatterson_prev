import React, { Fragment } from 'react';
import Card from '../Card';

const Projects = () => {
  return (
    <Fragment>
      <Card>
        <img src="images/projects/runebear.png" alt="Rune Bear" />
        <div className="card-content">
          <h1>Rune Bear</h1>
          <p>React, React Router, and Styled Components</p>
          <p>
            Digital literary magazine dedicated to the Strange, Surreal,
            Supernatural, and Speculative
          </p>
        </div>
      </Card>
      <Card>
        <img src="images/projects/coriander.png" alt="Coriander" />
        <div className="card-content">
          <h1>Coriander</h1>
          <p>Form validation library built with JavaScript</p>
        </div>
      </Card>
      <Card>
        <img src="images/projects/hello-webpack.png" alt="Hello Webpack" />
        <div className="card-content">
          <h1>Hello Webpack</h1>
          <p>Front End dev env using webpack</p>
        </div>
      </Card>
    </Fragment>
  );
};

export default Projects;
