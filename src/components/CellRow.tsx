import React, { ReactElement } from 'react';
import Cell from './Cell';
import './CellRow.scss';

interface Props {
  row: boolean[];
  rowIndex: number;
  toggleCellsState: (rowIndex: number, cellIndex: number) => void;
}

const CellRow = (props: Props): ReactElement => {
  const toggleCellState = (cellIndex: number): void => {
    props.toggleCellsState(props.rowIndex, cellIndex);
  };

  const renderCells = (): ReactElement[] => {
    return props.row.map(
      (cell, index): ReactElement => {
        const key = `cell-${props.rowIndex}-${index}`;

        return (
          <Cell
            key={key}
            isActive={cell}
            cellIndex={index}
            toggleCellsState={toggleCellState}
          />
        );
      },
    );
  };

  return <div className="cell-row__component">{renderCells()}</div>;
};

export default CellRow;
