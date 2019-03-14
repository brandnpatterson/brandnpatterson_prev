import React from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { getChampMastery, getSummonerInfo } from '../../actions';

import Heading from '../Heading';
import Loading from '../Loading';
import Ranked from '../Ranked';

const propTypes = {
  getChampMastery: func.isRequired,
  getSummonerInfo: func.isRequired,
  summoner: object.isRequired
};

class Summoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderChampions = this.renderChampions.bind(this);
  }

  onChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  onReset() {
    const summoner = 'Brandy Bot';

    this.props.getChampMastery(summoner);
    this.props.getSummonerInfo(summoner);

    this.setState({ search: '' });
  }

  onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const summoner = data.get('summoner');

    if (summoner !== '') {
      this.props.getChampMastery(summoner);
      this.props.getSummonerInfo(summoner);
    }
  }

  renderChampions(champions) {
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
  }

  render() {
    const { champions, data } = this.props.summoner;

    if (!champions || !data) {
      return <Loading />;
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.search}
            onChange={this.onChange}
            name="summoner"
            type="text"
          />
          <button type="submit">Search</button>
          <button onClick={this.onReset} type="button">
            Reset
          </button>
        </form>
        <Heading>{data.name}</Heading>
        {data.status || champions.status ? (
          <div>
            <p>Summoner not found. Please try again.</p>
          </div>
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

Summoner.propTypes = propTypes;

const mapStateToProps = state => ({
  summoner: state.summoner
});

const mapDispatchToProps = { getChampMastery, getSummonerInfo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summoner);
