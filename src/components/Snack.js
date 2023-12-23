import './Snack.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Snack = ({ name }) => {
  return (
    <div class="container">
      <h2>{name}</h2>
      <p>This is the {name} snack.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack;
