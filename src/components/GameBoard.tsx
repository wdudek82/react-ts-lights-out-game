import React, { Component, ReactElement } from 'react';
import CellRow from './CellRow';
import './GameBoard.scss';

interface State {
  grid: boolean[][];
  isGameOver: boolean;
}

class GameBoard extends Component<{}, State> {
  public state = {
    grid: [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ],
    isGameOver: false,
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

    this.setState((state): State => ({ ...state, grid: newGrid }));
  };

  private checkIsGameOver = (grid: boolean[][]): boolean => {
    return grid.every((row): boolean => {
      return row.every((cell): boolean => cell);
    });
  };

  private toggleCellsState = (rowIndex: number, cellIndex: number): void => {
    const updGrid = this.state.grid;
    updGrid[rowIndex][cellIndex] = !updGrid[rowIndex][cellIndex];

    // Toggle cells in adjacent rows
    if (rowIndex) {
      updGrid[rowIndex - 1][cellIndex] = !updGrid[rowIndex - 1][cellIndex];
    }
    if (rowIndex < updGrid.length - 1) {
      updGrid[rowIndex + 1][cellIndex] = !updGrid[rowIndex + 1][cellIndex];
    }

    // Toggle cells in adjacent columns
    if (cellIndex) {
      updGrid[rowIndex][cellIndex - 1] = !updGrid[rowIndex][cellIndex - 1];
    }
    if (cellIndex < updGrid[0].length - 1) {
      updGrid[rowIndex][cellIndex + 1] = !updGrid[rowIndex][cellIndex + 1];
    }

    console.log('Game is over:', this.checkIsGameOver(updGrid));

    this.setState(
      (state): State => ({
        grid: updGrid,
        isGameOver: this.checkIsGameOver(updGrid),
      }),
    );
  };

  private renderRows = (): ReactElement[] => {
    return this.state.grid.map(
      (row, index): ReactElement => {
        const key = `row-${index}`;

        return (
          <CellRow
            key={key}
            row={row}
            rowIndex={index}
            toggleCellsState={this.toggleCellsState}
          />
        );
      },
    );
  };

  public render(): ReactElement {
    // TODO: Move this to parent component (create new one: e.g. GameContainer)
    return this.state.isGameOver ? (
      <div>You win!</div>
    ) : (
      <div className="grid-board__component">{this.renderRows()}</div>
    );
  }
}

export default GameBoard;
