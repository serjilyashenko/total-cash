import React from 'react';
import loadCat from '../images/loadcat.gif';

import './Loading.css';

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <img className="loading" alt="loading" src={loadCat} />
    </div>
  );
}
