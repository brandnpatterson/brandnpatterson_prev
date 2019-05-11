import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { orange, surf } from "../util/colors";
import { mediumUp, largeUp } from "../util/media";

function Home() {
  const [index, setIndex] = useState(0);
  const [opacity, setopacity] = useState(0);
  const titles = [
    "Front End Developer",
    "JavaScript Engineer",
    "Problem Solver",
    "Leader",
    "Teacher",
    "Learner"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index === titles.length - 1) {
        setIndex(0);
      } else {
        setIndex(-1);
        setIndex(index + 1);
      }
    }, 2000);

    setopacity(1);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <StyledHome opacity={opacity}>
      <div className="title-area">
        <div className="title-text-wrap">
          <h1 className="title-item title-first">Hi.</h1>
          <h2 className="title-item">
            {"I'm"} <span style={{ color: surf }}>Brandon,</span>
          </h2>
          <h3 className="title-item title-last">{titles[index]}</h3>
        </div>
        <div className="see-my-work-wrap">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="see-my-work"
            to="/work"
          >
            See my work
          </Link>
        </div>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={["fab", "html5"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "css3-alt"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "sass"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "js"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "node-js"]} size="5x" />
        <FontAwesomeIcon icon={["fab", "php"]} size="5x" />
        <FontAwesomeIcon icon="database" size="5x" />
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  height: 100vh;
  padding-bottom: 3rem;

  .title-text-wrap {
    margin-bottom: 1rem;

    @media ${mediumUp} {
      margin-bottom: 4rem;
    }
  }

  .title-area {
    opacity: ${props => props.opacity};
    padding-left: 0;
    transition: opacity 1s;

    @media ${mediumUp} {
      margin-left: 4rem;
    }

    @media ${largeUp} {
      padding-left: 0;
    }

    .title-last {
      min-height: 6.875rem;
    }
  }

  .title-item {
    font-size: 2rem;
    margin: 0 auto;

    @media ${mediumUp} {
      font-size: 3rem;
    }

    @media ${largeUp} {
      font-size: 5rem;
      max-width: 100%;
    }
  }

  .see-my-work-wrap {
    margin-bottom: 4rem;

    @media ${mediumUp} {
      margin-bottom: 5rem;
    }
  }

  .see-my-work {
    background: none;
    border: 1px solid ${orange};
    color: ${orange};
    padding: 0.65rem 2.5rem;

    @media ${mediumUp} {
      padding: 1rem 3rem;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    height: 20rem;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 20rem;
    opacity: ${props => props.opacity};
    transition: opacity 1s;
    width: 100%;

    @media ${mediumUp} {
      flex-wrap: none;
      height: 15rem;
      max-width: 45rem;
    }
  }

  .icons svg {
    margin: 0.25rem 0.75rem;
    width: 4rem;

    @media ${mediumUp} {
      margin: 2rem;
      width: 6rem;
    }
  }
`;

export default Home;
