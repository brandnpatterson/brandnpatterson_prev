import React from 'react';
import { string } from 'prop-types';
import { alfaSlabOne } from '../../util/fonts';

const propTypes = {
  children: string.isRequired
};

function Heading(props) {
  return (
    <div>
      <h1
        style={{
          fontFamily: alfaSlabOne,
          fontWeight: '100',
          fontSize: '3rem',
          letterSpacing: '1.5px'
        }}
      >
        {props.children}
      </h1>
    </div>
  );
}

Heading.propTypes = propTypes;

export default Heading;
