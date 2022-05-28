import React from 'react';
import loading from './loading.gif';

const spinner =()=> {

    return (
      <div className="text-center my-4"  >
        <img src={loading} alt="alt" />
      </div>
    );
  
}

export default spinner;

