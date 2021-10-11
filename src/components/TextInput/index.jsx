import { React } from 'react';
import P from 'prop-types';
import './style.css';

export const TextInput = ({ searchValue, handleCharge }) => {
  return (
    <input className="input" type="search" onChange={handleCharge} value={searchValue} placeholder="input for search" />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleCharge: P.func.isRequired,
};
