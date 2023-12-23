import './SnackList.css';
import React from 'react'; // Import React once
import { Link, useParams } from 'react-router-dom';

const SnackItem = () => {
  const { name } = useParams();

  return (
    <div class="container">
      <h2>{name}</h2>
      <p>This is the {name} snack.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default SnackItem;
