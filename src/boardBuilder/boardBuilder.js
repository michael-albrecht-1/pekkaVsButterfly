import React from 'react';
import BoardOptions from './components/BoardOptions';
import Board from './components/Board';
import './css/bootstrap.min.css';

function BoardBuilder() {
    return (
        <div className="container">
            <h1 className="m-5">Map builder</h1>
            <BoardOptions />
            <Board />
        </div>
    );
} 

export default BoardBuilder;
