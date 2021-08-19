import React from 'react';
import Spot from './Spot.jsx';

const Row = ({pieces, row, handlePlay}) => {
  return (
    <div className="row">
      <Spot handlePlay={handlePlay} column={0} row={row} piece={pieces[0]}/>
      <Spot handlePlay={handlePlay} column={1} row={row} piece={pieces[1]}/>
      <Spot handlePlay={handlePlay} column={2} row={row} piece={pieces[2]}/>
      <Spot handlePlay={handlePlay} column={3} row={row} piece={pieces[3]}/>
      <Spot handlePlay={handlePlay} column={4} row={row} piece={pieces[4]}/>
      <Spot handlePlay={handlePlay} column={5} row={row} piece={pieces[5]}/>
      <Spot handlePlay={handlePlay} column={6} row={row} piece={pieces[6]}/>
    </div>
  );
};

export default Row;

