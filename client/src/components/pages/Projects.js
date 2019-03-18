import React from 'react';

import ProjectCard from '../ProjectCard';
import Summoner from '../Summoner';

import { surf } from '../../util/colors';

function Projects() {
  return (
    <div>
      <Summoner />
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
            <div className="built-with-wrap">
              <p className="built-with">Built with:</p>
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
            <p>Form validation library written in JavaScript</p>
            <div className="built-with-wrap">
              <p className="built-with">Built with:</p>
              <p>
                JavaScript, Gulp, and Jasmine. Published to{' '}
                <a
                  style={{ color: surf, textDecoration: 'underline' }}
                  href="https://www.npmjs.com/package/coriander"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NPM
                </a>
              </p>
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
            <p>Front End development environment using webpack</p>
            <div className="built-with-wrap">
              <p className="built-with">Built with:</p>
              <p>Webpack, Babel, jQuery, and Bootstrap</p>
            </div>
          </div>
        </div>
      </ProjectCard>

      <p
        style={{
          color: 'silver',
          fontSize: '0.85rem',
          maxWidth: '25rem'
        }}
      >
        This website isn’t endorsed by Riot Games and doesn’t reflect the views
        or opinions of Riot Games or anyone officially involved in producing or
        managing League of Legends. League of Legends and Riot Games are
        trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.
      </p>
    </div>
  );
}

export default Projects;
