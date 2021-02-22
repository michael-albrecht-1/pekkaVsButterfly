import React from 'react';
import Square from './Square';
import '../css/board.css'

const Board = () => {
    return <div className="row">
        <div className="board">
            <Square />
            <Square />
            <Square />
        </div>
    </div>
}

export default Board