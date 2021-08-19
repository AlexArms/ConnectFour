import React from 'react';
import Row from './Row.jsx';

const Gameboard = ({rows, handlePlay}) => {
  return (
    <div id="board" className="board">
      <Row handlePlay={handlePlay} row={0} pieces={rows[0]}/>
      <Row handlePlay={handlePlay} row={1} pieces={rows[1]}/>
      <Row handlePlay={handlePlay} row={2} pieces={rows[2]}/>
      <Row handlePlay={handlePlay} row={3} pieces={rows[3]}/>
      <Row handlePlay={handlePlay} row={4} pieces={rows[4]}/>
      <Row handlePlay={handlePlay} row={5} pieces={rows[5]}/>
    </div>
  );
};

export default Gameboard;