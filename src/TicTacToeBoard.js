import React from "react";


export class TicTacToeBoard extends React.Component {
    onClick(id) {
        if (this.isActive(id)) {
            this.props.moves.clickCell(id);
            this.props.events.endTurn();
        }
    }

    isActive(id) {
        if (!this.props.isActive) return false;
        return this.props.G.cells[id] === null;

    }

    render() {
        let winner = '';
        if (this.props.ctx.gameover !== null) {
            winner = <div>Winner: {playerName(this.props.ctx.gameover)}</div>;
        }

        const cellStyle = {
            border: '1px solid #555',
            width: '50px',
            height: '50px',
            lineHeight: '50px',
            textAlign: 'center',
        };

        let tbody = [];
        for (let i = 0; i < 3; i++) {
            let cells = [];
            for (let j = 0; j < 3; j++) {
                const id = 3 * i + j;
                cells.push(
                    <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
                        {playerName(this.props.G.cells[id])}
                    </td>
                );
            }
            tbody.push(<tr key={i}>{cells}</tr>);
        }

        return (
            <div>
                <table id="board">
                    <tbody>{tbody}</tbody>
                </table>
                {winner}
            </div>
        );
    }
}

function playerName(cell) {
    return cell === '0' ? 'X'
        : cell === '1' ? '0'
            : '';
}
