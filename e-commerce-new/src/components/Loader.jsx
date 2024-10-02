import React from 'react';
import { RingLoader } from 'react-spinners';


const Loader = () => (
  <div className="loader-container">
    <RingLoader size={150} color="#123abc" />
  </div>
);

export default Loader;
