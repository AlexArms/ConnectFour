import React from 'react';

const Spot = ({piece, row, column, handlePlay}) => {
  return (
    <div id={row.toString() + column} className='null square' onClick={handlePlay}></div>
  );
};
export default Spot;