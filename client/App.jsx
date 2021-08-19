import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './Scoreboard.jsx';
import Gameboard from './Gameboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
      nextPlay: 'red',
      playerNames: {
        'red': 'Red',
        'black': 'Black'
      },
      playerScores: {
        'red': 0,
        'black': 0
      },
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ]
    }
  }

  playPiece(event) {
    if (this.state.win === false) {
      let boardPosition = event.target.id;
      let row = column = boardPosition[0];
      let column = boardPosition[1];
      for ( let row = 5; row >= 0; row-- ) {
        if ( this.state.board[row][column] === null ) {
          document.getElementById(`${row}${column}`).classList.remove('null');
          document.getElementById(`${row}${column}`).classList.add(this.state.nextPlay);
          let updatedBoard = this.state.board.slice();
          let nextPlay;
          updatedBoard[row][column] = this.state.nextPlay;
          this.state.nextPlay === 'red' ? nextPlay = 'black' : nextPlay = 'red';
          this.setState({
            nextPlay: nextPlay,
            board: updatedBoard
          });
          this.checkWin(row, column);
          return;
        }
      }
      console.log('That row is full! Please choose another row.');
    } else {
      console.log('The game has already been won!');
    }
  }

  checkWin(row, column) {
    if (this.checkHorizontalWin(row) || this.checkVerticalWin(column) || this.checkMajorDiagonalWin() || this.checkMinorDiagonalWin()) {
      this.setState({
        win: true
      });
    } else {
      if (this.checkTie()) {
        console.log('tie!');
      }
    }
  }

  checkHorizontalWin(row) {
    let board = this.state.board;
    let previousPiece = board[row][0];
    let pieceCount = 1;
    for (let i = 1; i < board[row].length; i++) {
      let currentPiece = board[row][i];
      if (currentPiece === null) {
        pieceCount = 0;
        previousPiece = null;
      } else {
        if (currentPiece === previousPiece) {
          pieceCount++;
        } else {
          previousPiece = currentPiece;
          pieceCount = 1;
        }
      }
      if (pieceCount === 4) {
        return true;
      }
    }
    return false;
  }

  checkVerticalWin(column) {
    let board = this.state.board;
    let previousPiece = board[0][column];
    let pieceCount = 1;
    for (let i = 1; i < board.length; i++) {
      let currentPiece = board[i][column];
      if (currentPiece === null) {
        pieceCount = 0;
        previousPiece = null;
      } else {
        if (currentPiece === previousPiece) {
          pieceCount++;
        } else {
          previousPiece = currentPiece;
          pieceCount = 1;
        }
      }
      if (pieceCount === 4) {
        return true;
      }
    }
    return false;
  }

  checkMajorDiagonalWin(row = 0, column = 0) {
    // let board = this.state.board;
    // let currentPiece = board[0][0];
    // let pieceCount;
    // currentPiece === null ? pieceCount = 0 : pieceCount = 1;
    // for (let i = 0; i < 3; i++) {
    //   for (let o = 0; o < 4; o++) {
    //     row = i + 1;
    //     column = o;
    //     while (row < 6) {
    //       if (board[]) {

    //       }
    //     }
    //   }
    // }
  }

  checkMinorDiagonalWin(row, column) {
    if (row ) {

    }
  }

  checkTie() {
    return !this.state.win && this.state.board.reduce((rowIsFull, row) => {
       return rowIsFull && row.reduce((spotIsFull, piece) => {
         return spotIsFull && piece !== null;
       }, true)
    }, true)
  }

  render() {
    return (
      <>
        <h1 className="title">Extreme Connect Four</h1>
        <h3 className="subtitle">Play like never before!</h3>
        <Scoreboard />
        <Gameboard rows={this.state.board} handlePlay={this.playPiece.bind(this)}/>
      </>
    )
  }
}

export default App;
