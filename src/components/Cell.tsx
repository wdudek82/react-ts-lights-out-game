import React, { ReactElement } from 'react';
import './Cell.scss';

interface Props {
  isActive: boolean;
  cellIndex: number;
  toggleCellState: (cellIndex: number) => void;
}

const Cell = (props: Props): ReactElement => {
  const handleToggleCellState = (): void => {
    props.toggleCellState(props.cellIndex);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`cell ${props.isActive ? 'cell--active' : ''}`}
      onClick={handleToggleCellState}
      onKeyDown={handleToggleCellState}
    />
  );
};

export default Cell;
