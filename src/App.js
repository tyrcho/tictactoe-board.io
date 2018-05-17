import {Client} from 'boardgame.io/react';
import {Game} from 'boardgame.io/core';
import {TicTacToeBoard} from './TicTacToeBoard';

const TicTacToe = Game({
    setup: () => ({cells: Array(9).fill(null)}),

    moves: {
        clickCell(G, ctx, id) {
            const cells = [...G.cells];

            // Ensure we can't overwrite cells.
            if (cells[id] === null) {
                cells[id] = ctx.currentPlayer;
            }

            return {...G, cells};
        },
    },

    flow: {
        endGameIf: (G, ctx) => {
            if (IsVictory(G.cells)) {
                return ctx.currentPlayer;
            }
        },
    },
});

/**
 * @return {boolean}
 */
export function IsVictory(cells) {
    let linesIndices = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    let colIndices = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    let diagIndices = [[0, 4, 8], [2, 4, 6]];
    let winningIndices = [linesIndices, colIndices, diagIndices];
    return ["0", "1"].some(player =>
        winningIndices.some(indices =>
            indices.some(line =>
                line.every(index =>
                    cells[index] === player))));
}

export const App = Client({
    game: TicTacToe,
    board: TicTacToeBoard,
});




