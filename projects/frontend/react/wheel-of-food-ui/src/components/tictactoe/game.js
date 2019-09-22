import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { gameMove, jumpToGameHistory } from '../../redux/actions';

function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    jumpTo(step) {
        this.props.jumpToGameHistory(step);
    }

    squareClicked(i) {
        this.props.gameMove(i);
    }

    render() {
        const history = this.props.gameState.history;
        const current = history[this.props.gameState.stepNumber];
        const winner = this.props.gameState.winner;

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move + ' ' + getSquarePosByIndex(step.lastIndex) :
                'Go to game start';
            return (
                <li
                    key={move}>
                    <Button variant="contained" color="primary" onClick={() => this.jumpTo(move)}>{desc}</Button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.gameState.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.squareClicked(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        gameState: state.gameState,
    };
};

export default withRouter(connect(mapStateToProps, { gameMove, jumpToGameHistory })(Game));

function getSquarePosByIndex(index) {
    const col = index % 3 + 1;
    const row = parseInt(index / 3) + 1;
    return '(' + col + ',' + row + ')';

}
