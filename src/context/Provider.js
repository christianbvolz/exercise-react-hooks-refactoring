// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

export default function Provider({ children }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  return (
    <CarsContext.Provider value={ { red, blue, yellow, setRed, setBlue, setYellow} }>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
