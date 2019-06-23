import React, { ReactElement } from 'react';
import Cell from './Cell';
import './CellRow.scss';

interface Props {
  row: boolean[];
  rowIndex: number;
  toggleCellState: (rowIndex: number, cellIndex: number) => void;
}

const CellRow = (props: Props): ReactElement => {
  const toggleCellState = (cellIndex: number): void => {
    props.toggleCellState(props.rowIndex, cellIndex);
  };

  const renderCells = (): ReactElement[] => {
    return props.row.map(
      (cell, index): ReactElement => {
        return (
          <Cell
            key={`cell-${index}`}
            isActive={cell}
            cellIndex={index}
            toggleCellState={toggleCellState}
          />
        );
      },
    );
  };

  return <div className="cell-row__component">{renderCells()}</div>;
};

export default CellRow;
