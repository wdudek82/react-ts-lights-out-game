import React, { ReactElement } from 'react';
import GameBoard from 'components/GameBoard';

const App = (): ReactElement => {
  return (
    <div className="page">
      <div className="game__container">
        <h1 className="game__header">LightsOut</h1>
        <GameBoard />
      </div>
    </div>
  );
};

export default App;
