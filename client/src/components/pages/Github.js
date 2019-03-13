import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../Loading';

const propTypes = {
  github: object.isRequired
};

class Github extends React.Component {
  constructor(props) {
    super(props);

    this.renderLanguages = this.renderLanguages.bind(this);
  }

  renderLanguages(languages) {
    return (
      <div>
        {languages
          .sort((a, b) => b.points - a.points)
          .map(language => {
            return (
              <li key={language.id}>
                {language.name}: {language.points}
              </li>
            );
          })}
      </div>
    );
  }

  render() {
    const { languages } = this.props.github.data;

    if (!languages) {
      return <Loading />;
    }

    return (
      <div>
        <h1>Github</h1>
        <h2>brandnpatterson</h2>
        <p>Top 10 Repo Points by Language</p>
        {this.renderLanguages(languages)}
      </div>
    );
  }
}

Github.propTypes = propTypes;

const mapStateToProps = state => ({
  github: state.github
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
