import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import Loading from './Loading';
import Ranked from './Ranked';

class Summoner extends React.Component {
  static propTypes = {
    summoner: object.isRequired
  };

  renderChampions = champions => {
    return (
      <div className="champions">
        {champions.map(champ => {
          return (
            <div key={champ.id}>
              <p>{champ.name}</p>
              <img src={champ.image} alt={champ.name} />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { data, champions } = this.props.summoner;

    if (!data || !champions) {
      return <Loading />;
    }

    return (
      <div>
        <h1>{data.name}</h1>
        <h2>Level: {data.level}</h2>
        <Ranked name="Flex 5v5" data={data.flex} />
        <Ranked name="Solo / Duo" data={data.solo} />
        {this.renderChampions(champions)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summoner: state.summoner
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summoner);
