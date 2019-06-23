import React, { Component, ReactElement } from 'react';
import CellRow from './CellRow';
import './GridBoard.scss';

interface State {
  grid: boolean[][];
}

class GameBoard extends Component<{}, State> {
  public state = {
    grid: [
      [false, false, true, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ],
  };

  public componentDidMount(): void {
    this.generateNewGrid();
  }

  private generateNewGrid = (): void => {
    const newGrid = this.state.grid;

    newGrid.forEach((row, rowIndex): void => {
      row.forEach((cell, cellIndex): void => {
        newGrid[rowIndex][cellIndex] = Math.floor(Math.random() * 3) === 0;
      });
    });

    this.setState((): State => ({ grid: newGrid }));
  };

  private toggleCellState = (rowIndex: number, cellIndex: number): void => {
    console.log('Toggle cell state', rowIndex, cellIndex);

    const updGrid = this.state.grid;
    updGrid[rowIndex][cellIndex] = !updGrid[rowIndex][cellIndex];

    // Toggle cells in adjacent rows
    if (rowIndex) {
      updGrid[rowIndex - 1][cellIndex] = !updGrid[rowIndex - 1][cellIndex];
    }
    if (rowIndex < this.state.grid.length - 1) {
      updGrid[rowIndex + 1][cellIndex] = !updGrid[rowIndex + 1][cellIndex];
    }

    // Toggle cells in adjacent columns
    if (cellIndex) {
      updGrid[rowIndex][cellIndex - 1] = !updGrid[rowIndex][cellIndex - 1];
    }
    if (cellIndex < this.state.grid[0].length - 1) {
      updGrid[rowIndex][cellIndex + 1] = !updGrid[rowIndex][cellIndex + 1];
    }

    this.setState((): State => ({ grid: updGrid }));
  };

  private renderRows = (): ReactElement[] => {
    return this.state.grid.map(
      (row, index): ReactElement => {
        return (
          <CellRow
            key={`row-${index}`}
            row={row}
            rowIndex={index}
            toggleCellState={this.toggleCellState}
          />
        );
      },
    );
  };

  public render(): ReactElement {
    return <div className="grid-board__component">{this.renderRows()}</div>;
  }
}

export default GameBoard;
