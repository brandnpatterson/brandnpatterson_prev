import React, { Fragment } from 'react';
import { func, object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getChampMastery, getSummonerInfo } from '../actions';

import Ranked from './Ranked';

import { boxShadow, cardColor, orange, surf } from '../util/colors';
import { openSans } from '../util/fonts';
import { largeUp, mediumUp, smallOnly } from '../util/media';
import { trimAndLower } from '../util';

const propTypes = {
  getChampMastery: func.isRequired,
  getSummonerInfo: func.isRequired,
  summoner: object.isRequired
};

class Summoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championsHeight: null,
      search: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderChampions = this.renderChampions.bind(this);
    this.setChampionsHeight = this.setChampionsHeight.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { summoner } = nextProps;

    if (summoner && summoner.champions) {
      this.setChampionsHeight(summoner.champions);
    }
  }

  setChampionsHeight(champions) {
    if (champions.length <= 3) {
      if (window.innerWidth <= 640) {
        this.setState({
          championsHeight: '8.313rem'
        });
      } else if (window.innerWidth >= 1024) {
        this.setState({
          championsHeight: '14.31rem'
        });
      }
    } else if (champions.length < 6) {
      if (window.innerWidth <= 640) {
        this.setState({
          championsHeight: '16.63rem'
        });
      } else if (window.innerWidth >= 1024) {
        this.setState({
          championsHeight: '28.75rem'
        });
      }
    } else if (champions.length < 9) {
      if (window.innerWidth <= 640) {
        this.setState({
          championsHeight: '33.25rem'
        });
      } else if (window.innerWidth >= 1024) {
        this.setState({
          championsHeight: '42.94rem'
        });
      }
    } else {
      if (window.innerWidth <= 640) {
        this.setState({
          championsHeight: '25rem'
        });
      } else if (window.innerWidth >= 1024) {
        this.setState({
          championsHeight: '25rem'
        });
      }
    }
  }

  onChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  onReset() {
    const { search } = this.state;

    const summonerName = 'brandybot';

    if (search !== '' && trimAndLower(search) !== summonerName) {
      this.props.getChampMastery(summonerName);
      this.props.getSummonerInfo(summonerName);
    }

    this.setState({
      search: ''
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const { search } = this.state;

    const currentSummoner = trimAndLower(this.props.summoner.data.name);
    const searching = trimAndLower(search);

    if (search !== '' && currentSummoner !== searching) {
      this.props.getChampMastery(search);
      this.props.getSummonerInfo(search);
    }
  }

  renderChampions() {
    const { champions } = this.props.summoner;

    return (
      <div className="champions">
        {champions.map(champ => {
          return (
            <div className="champion" key={champ.id}>
              <div className="champion-image-wrap">
                <img src={champ.src} alt={champ.name} />
              </div>
              <p>{champ.name}</p>
            </div>
          );
        })}
      </div>
    );
  }

  renderPlaceholders() {
    const placeholders = [];

    for (let i = 0; i < 10; i++) {
      placeholders.push({
        id: i
      });
    }

    return (
      <div className="champions">
        {placeholders.map((champ, index) => {
          return (
            <div key={index}>
              <div className="champion placeholder" />
              <div className="champion-name placeholder" />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { champions, data } = this.props.summoner;

    return (
      <StyledSummoner
        championsHeight={this.state.championsHeight}
        championsHeightMedium={this.state.championsHeightMedium}
        championsHeightSmall={this.state.championsHeightSmall}
      >
        <div className="summoner-header">
          <form className="summoner-form" onSubmit={this.onSubmit}>
            <h4 className="summoner-search-text">
              Your most played champions in League of Legends
            </h4>
            <div className="summoner-interface">
              <input
                aria-label="summoner input"
                className="summoner-input"
                value={this.state.search}
                onChange={this.onChange}
                name="summoner"
                type="text"
              />
              <div className="summoner-buttons">
                <button className="summoner-button" type="submit">
                  Search
                </button>
                <button
                  className="summoner-button"
                  onClick={this.onReset}
                  type="button"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
          <div className="summoner-name-wrap">
            {data ? (
              <Fragment>
                <h3 className="summoner-name">
                  {data.name ? data.name : 'Not Found'}
                </h3>
                <p className="summoner-level">
                  {data.level ? `Level: ${data.level}` : 'Please try again'}
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <div className="summoner-name placeholder" />
                <div className="summoner-level placeholder" />
              </Fragment>
            )}
          </div>
        </div>
        {champions && data && !champions.status && !data.status ? (
          <div className="champions-wrap">
            {this.renderChampions()}
            <Ranked name="Flex 5v5" data={data.ranked && data.ranked.flex} />
            <Ranked name="Solo / Duo" data={data.ranked && data.ranked.solo} />
          </div>
        ) : (
          <div className="champions-wrap">{this.renderPlaceholders()}</div>
        )}
        <div className="built-with-wrap">
          <p className="built-with">Built with:</p>
          <p>Node, Express, MySQL, React, and Redux</p>
        </div>
        <p
          style={{
            color: 'silver',
            fontSize: '0.85rem',
            maxWidth: '25rem'
          }}
        >
          This website isn’t endorsed by Riot Games and doesn’t reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing League of Legends. League of Legends and Riot
          Games are trademarks or registered trademarks of Riot Games, Inc.
          League of Legends © Riot Games, Inc.
        </p>
      </StyledSummoner>
    );
  }
}

const StyledSummoner = styled.div`
  background: ${cardColor};
  border-radius: 5px;
  box-shadow: ${boxShadow};
  margin: 0 auto 2.45rem;
  max-width: 36.4rem;
  min-height: 661px;

  padding: 2rem;

  @media ${mediumUp} {
    margin-bottom: 3rem;
    max-width: 100%;
    padding: 2rem;
  }

  .summoner-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto 3rem 0.5rem;
    max-width: 80%;
    min-height: 281.3px;

    @media ${smallOnly} {
      max-width: 100%;
    }

    @media ${mediumUp} {
      align-items: center;
      flex-direction: row-reverse;
      margin: 0 auto 1rem;
      max-width: 90%;
      min-height: 171px;
    }

    @media ${largeUp} {
      max-width: 90%;
    }
  }

  .placeholder {
    background: ${surf};
    box-shadow: ${boxShadow};
    opacity: 0.3;
  }

  .summoner-name {
    font-family: ${openSans};
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: 1px;
    margin-bottom: 0;
    margin-top: 0;

    @media ${mediumUp} {
      font-size: 3rem;
    }
  }

  .summoner-name.placeholder {
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    min-height: 36px;
    width: 200px;

    @media ${mediumUp} {
      min-height: 55px;
      width: 250px;
    }
  }

  .summoner-level {
    color: ${surf};
    font-size: 1.5rem;
    margin-bottom: 0;
    margin-top: 0;

    @media ${mediumUp} {
      font-size: 2rem;
    }
  }

  .summoner-level.placeholder {
    min-height: 27px;
    width: 100px;

    @media ${mediumUp} {
      min-height: 36px;
      width: 150px;
    }
  }

  .summoner-form {
    text-align: center;

    @media ${mediumUp} {
      text-align: right;
    }
  }

  .summoner-search-text {
    margin-top: 0;
    text-align: left;

    @media ${mediumUp} {
      text-align: right;
    }
  }

  .summoner-interface {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media ${mediumUp} {
      flex-direction: row;
    }
  }

  .summoner-input {
    border: 0;
    border-radius: 0;
    height: 2rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    width: 12rem;

    @media screen and (min-width: 450px) {
      height: 1.85rem;
      margin-right: inherit;
    }
  }

  .summoner-buttons {
    display: flex;
    flex-direction: row;
    margin-right: 1.75rem;

    @media screen and (min-width: 450px) {
      margin-right: inherit;
    }
  }

  .summoner-button {
    background: none;
    border: 1px solid ${surf};
    color: ${surf};
    height: 2rem;
    width: 5rem;

    &:hover {
      opacity: 0.5;
    }
  }

  .summoner-button:first-child {
    margin-right: 1rem;

    @media ${mediumUp} {
      margin-left: 1rem;
    }
  }

  .champions-wrap {
    min-height: ${props => props.championsHeight};
  }

  .champions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 25rem;

    @media ${mediumUp} {
      max-width: 57.5rem;
    }
  }

  .champion {
    margin: 0.5rem;
    width: 4rem;

    @media ${mediumUp} {
      margin: 2rem;
      width: 6rem;
    }

    img {
      width: 100%;
    }
  }

  .champion.placeholder {
    height: 4rem;
    width: 4rem;

    @media ${mediumUp} {
      height: 6rem;
      margin-bottom: 1rem;
      width: 6rem;
    }
  }

  .champion-name {
    height: 20px;
    margin: 1rem auto 1.49rem;
    width: 4rem;

    @media ${mediumUp} {
      width: 6rem;
    }
  }

  .champion-name.placeholder {
    margin-bottom: 1.4rem;

    @media ${mediumUp} {
      margin-bottom: 2.7rem;
    }
  }

  .champion-image-wrap {
    min-height: 64px;

    @media ${mediumUp} {
      min-height: 112px;
    }
  }

  .no-champion-history {
    @media ${mediumUp} {
      padding-left: 2.9rem;
    }
  }

  .built-with-wrap {
    padding: 3rem 0 1rem;

    @media ${mediumUp} {
      padding: 3rem 0 1rem 2.9rem;
    }
  }

  .built-with {
    color: ${orange};
  }
`;

Summoner.propTypes = propTypes;

const mapStateToProps = state => ({
  summoner: state.summoner
});

const mapDispatchToProps = {
  getChampMastery,
  getSummonerInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summoner);
