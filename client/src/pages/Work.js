import React, { Fragment } from 'react';

import WorkCard from '../components/WorkCard';

import { surf } from '../util/colors';

function Work() {
  return (
    <div>
      <WorkCard>
        <Fragment>
          <div className="main-content main-content-sabre">
            <div className="sabre-wrap">
              <img src="images/works/sabre/sabre.svg" alt="Sabre" />
            </div>
            <div className="card-content card-content-sabre">
              <h1
                style={{ color: surf }}
                className="card-header card-header-sabre"
              >
                Sabre Hospitality Solutions
              </h1>
              <p>
                These are some of the websites that I've worked on with my team
                at Sabre.
              </p>
            </div>
          </div>
          <div className="secondary-content">
            <a
              href="https://fontainebleau.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hotel-name">Fontaine Bleau</p>
              <img
                src="images/works/sabre/fontainebleau.jpg"
                alt="Fontaine Bleau"
              />
            </a>
            <a
              href="https://www.mandarinoriental.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hotel-name"> Mandarin Oriental</p>
              <img
                src="images/works/sabre/mo.jpg"
                alt="Mandarin Oriental - the Hotel Group"
              />
            </a>
            <a
              href="https://www.trumphotels.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hotel-name">Trump Hotels</p>
              <img src="images/works/sabre/trump.jpg" alt="Trump Hotels" />
            </a>
            <a
              href="https://www.ojaivalleyinn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hotel-name">Ojai Valley Inn</p>
              <img
                src="images/works/sabre/ojai.jpg"
                alt="Ojai Valley Inn Resorts Hotels"
              />
            </a>
          </div>
        </Fragment>
      </WorkCard>
      <h1>Other Projects</h1>
      <WorkCard>
        <div className="main-content">
          <a
            href="http://runebear.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/works/runebear.png" alt="Rune Bear" />
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
                  React, React Router, Styled Components, Wordpress REST API,
                  Cypress, and Jest
                </p>
              </div>
            </div>
          </div>
        </div>
      </WorkCard>
      <WorkCard>
        <div className="main-content">
          <a
            href="https://coriander.surge.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/works/coriander.png" alt="Coriander" />
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
        </div>
      </WorkCard>
      <WorkCard>
        <div className="main-content">
          <a
            href="https://hello-webpack.surge.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/works/hello-webpack.png" alt="Hello Webpack" />
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
        </div>
      </WorkCard>
    </div>
  );
}

export default Work;
