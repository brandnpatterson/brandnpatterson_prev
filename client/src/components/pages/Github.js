import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../Loading';

class Github extends React.Component {
  static propTypes = {
    github: object.isRequired
  };

  renderLanguages = languages => {
    return (
      <div>
        {languages
          .sort((a, b) => b.points - a.points)
          .map(lang => {
            return (
              <li key={lang.id}>
                {lang.name}: {lang.points}
              </li>
            );
          })}
      </div>
    );
  };

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

const mapStateToProps = state => ({
  github: state.github
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
