import React from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { fetchChampMastery, fetchSummonerInfo } from '../../actions';

import Loading from '../Loading';
import Ranked from '../Ranked';

class Summoner extends React.Component {
  state = {
    query: ''
  };

  static propTypes = {
    fetchChampMastery: func.isRequired,
    fetchSummonerInfo: func.isRequired,
    summoner: object.isRequired
  };

  onChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  onReset = () => {
    const summoner = 'Brandy Bot';

    this.props.fetchChampMastery(summoner);
    this.props.fetchSummonerInfo(summoner);

    this.setState({ query: '' });
  };

  onSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.target);
    const summoner = data.get('summoner');

    if (summoner !== '') {
      this.props.fetchChampMastery(summoner);
      this.props.fetchSummonerInfo(summoner);
    }
  };

  renderChampions = champions => {
    return (
      <div>
        {champions.map(champ => {
          return (
            <div key={champ.id}>
              <p>{champ.name}</p>
              <img src={champ.src} alt={champ.name} />
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
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.query}
            onChange={this.onChange}
            name="summoner"
            type="text"
          />
          <button type="submit">Search</button>
          <button onClick={this.onReset} type="button">
            Reset
          </button>
        </form>
        <h1>{data.name}</h1>
        {data.status || champions.status ? (
          <p>Summoner not found. Please try again.</p>
        ) : (
          <div>
            <h2>Level: {data.level}</h2>
            {this.renderChampions(champions)}
            <Ranked name="Flex 5v5" data={data.ranked.flex} />
            <Ranked name="Solo / Duo" data={data.ranked.solo} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summoner: state.summoner
});

const mapDispatchToProps = { fetchChampMastery, fetchSummonerInfo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summoner);
