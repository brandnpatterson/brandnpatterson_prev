import React from 'react';
import { string } from 'prop-types';
import { textColor, navy } from '../../util/colors';

const propTypes = {
  children: string.isRequired
};

const Title = props => {
  return (
    <div
      style={{
        background: textColor,
        color: navy,
        padding: '1rem',
        textAlign: 'center',
        width: '15rem'
      }}
    >
      {props.children}
    </div>
  );
};

Title.propTypes = propTypes;

export default Title;
