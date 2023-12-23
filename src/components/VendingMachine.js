import './VendingMachine.css';
import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div class="container">
      <h1>Vending Machine</h1>
      <nav>
        <ul>
          <li>
            <Link to="/snack/chips">Chips</Link>
          </li>
          <li>
            <Link to="/snack/candy">Candy</Link>
          </li>
          <li>
            <Link to="/snack/soda">Soda</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VendingMachine;
