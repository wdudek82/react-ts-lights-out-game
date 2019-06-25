import React, { Component, FormEvent, ReactElement } from 'react';
import GameBoard from 'components/GameBoard';

interface State {
  gridWidth: number;
  gridHeight: number;
}

class App extends Component<{}, State> {
  public state = {
    gridWidth: 5,
    gridHeight: 5,
  };

  private updateState = (key: keyof State, value: number) => {
    return (prevState: State): State => ({
      ...prevState,
      [key]: value,
    });
  };

  private handleOnDimentionChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name } = e.currentTarget;
    const { value } = e.currentTarget;

    if (name === 'gridWidth' || name === 'gridHeight') {
      this.setState(this.updateState(name, parseInt(value, 10)));
    }
  };

  public render(): ReactElement {
    const { gridWidth, gridHeight } = this.state;

    console.log(this.state);

    return (
      <div className="page">
        <div className="game__menu">
          <button type="button">Reset</button>
          <input
            type="number"
            name="gridWidth"
            min="4"
            value={gridWidth}
            onChange={this.handleOnDimentionChange}
          />
          <input
            type="number"
            name="gridHeight"
            min="4"
            value={gridHeight}
            onChange={this.handleOnDimentionChange}
          />
        </div>
        <div className="game__container">
          <h1 className="game__header">LightsOut</h1>
          <GameBoard gridWidth={gridWidth} gridHeight={gridHeight} />
        </div>
      </div>
    );
  }
}

export default App;
