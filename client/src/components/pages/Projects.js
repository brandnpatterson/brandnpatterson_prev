import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import Loading from '../Loading';
import ProjectCard from '../ProjectCard';

const propTypes = {
  github: object.isRequired
};

function Projects({ github }) {
  const { languages } = github.data;

  function renderLanguages(languages) {
    return (
      <div>
        <h3>Langauges most used</h3>
        {languages
          .sort((a, b) => b.points - a.points)
          .map(language => {
            return (
              <li key={language.id}>
                {language.name}: {language.points}{' '}
                {language.name === 'JavaScript' &&
                  '(JavaScript, React, Webpack, Gulp, Node, Vue, jQuery, etc)'}
              </li>
            );
          })}
      </div>
    );
  }

  return (
    <StyledProjects>
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
            <p>Front End development environment using webpack</p>
            <div className="built-with-wrap">
              <p className="built-with">Built with:</p>
              <p>Webpack, Babel, jQuery, Bootstrap</p>
            </div>
          </div>
        </div>
      </ProjectCard>
      <div className="github-stats">
        <h2>Github commits</h2>
        <img
          style={{ marginBottom: '2rem' }}
          src="https://ghchart.rshah.org/37fdfc/brandnpatterson"
          alt="Brandon's Github chart"
        />
      </div>
      {!languages ? <Loading /> : renderLanguages(languages)}
    </StyledProjects>
  );
}

Projects.propTypes = propTypes;

const StyledProjects = styled.div`
  .github-stats {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

const mapStateToProps = state => ({
  github: state.github
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
