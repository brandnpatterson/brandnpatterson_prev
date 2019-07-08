import React, { Fragment } from 'react';
import WorkCard from '../components/WorkCard';
import { surf } from '../util/colors';

function Work() {
  return (
    <div>
      <WorkCard>
        <Fragment>
          <div className="main-content main-content-group">
            <div style={{ background: '#EF4A3F' }} className="image-wrap">
              <img
                style={{ width: '175px', height: '50px ' }}
                src="images/works/square205/square205.png"
                alt="Square 205"
              />
            </div>
            <div className="card-content card-content-group">
              <h2>Digital marketing and creative agency</h2>
            </div>
          </div>
          <div className="secondary-content">
            <a
              href="https://www.upventur.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="item-name">Upventur</p>
              <img src="images/works/square205/upventur.jpeg" alt="Upventur" />
            </a>
            <a
              href="http://goeditgraphics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="item-name">Go Edit</p>
              <img src="images/works/square205/goedit.jpeg" alt="Go Edit" />
            </a>
          </div>
        </Fragment>
      </WorkCard>
      <WorkCard>
        <Fragment>
          <div className="main-content main-content-group">
            <div style={{ background: '#e50000' }} className="image-wrap">
              <img src="images/works/sabre/sabre.svg" alt="Sabre" />
            </div>
            <div className="card-content card-content-group">
              <h2>Leading technology provider for the hospitality industry</h2>
            </div>
          </div>
          <div className="secondary-content">
            <a
              href="https://fontainebleau.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="item-name">Fontaine Bleau</p>
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
              <p className="item-name">Mandarin Oriental</p>
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
              <p className="item-name">Trump Hotels</p>
              <img src="images/works/sabre/trump.jpg" alt="Trump Hotels" />
            </a>
            <a
              href="https://www.ojaivalleyinn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="item-name">Ojai Valley Inn</p>
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
            href="http://users-dir.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/works/users-dir.png" alt="Users Directory" />
          </a>
          <div className="card-content">
            <h1 className="card-header">Users Directory</h1>
            <div className="card-paragraphs">
              <p>Create, read, update, delete, and filter users</p>
              <div className="built-with-wrap">
                <p className="built-with">Built with:</p>
                <p>Node, Express, MySQL, React, Context, Jest, and Enzyme</p>
              </div>
            </div>
          </div>
        </div>
      </WorkCard>
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
