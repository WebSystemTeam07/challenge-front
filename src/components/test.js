import React,{useState,useCallback} from "react";
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
function Board({ state, onClick }) {
  const renderSquare = i => {
    return <Square value={state[i]} onClick={() => onClick(i)} />;
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
function calc(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Game() {
  const [state, setState] = useState({
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0
  });
  const current = state.history[state.stepNumber];
  const winner = calc(current.squares);
  const onClick = useCallback(
    i => {
      const history = state.history.slice(0, state.stepNumber + 1);
      const square = current.squares.slice();
      if (calc(square) || square[i]) {
        return null;
      }
      square[i] = state.xIsNext ? "x" : "o";
      setState({
        ...state,
        history: history.concat([
          {
            squares: square
          }
        ]),
        xIsNext: !state.xIsNext,
        stepNumber: history.length
      });
    },
    [state, current]
  );
  const jumpTo = step => {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };
  const moves = state.history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (state.xIsNext ? "X" : "o");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board state={current.squares} onClick={i => onClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
export default Game;