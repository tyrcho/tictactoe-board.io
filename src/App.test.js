import React from 'react';
import ReactDOM from 'react-dom';
import {App, IsVictory} from './App';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('winner with all empty cells', () => {
    expect(IsVictory(Array(9).fill(null))).toBe(false);
});


test('winner with full cells', () => {
    expect(IsVictory(Array(9).fill("1"))).toBe(true);
});

test('winner with 3 cells in line', () => {
    expect(IsVictory(["0", "0", "0", null, null, null, null, null, null])).toBe(true);
});

test('winner with 3 cells in col', () => {
    expect(IsVictory([
        "0", null, "0",
        "0", null, null,
        "0", null, null])).toBe(true);
});

test('winner with 3 cells in diag', () => {
    expect(IsVictory([
        "0", null, "0",
        "1", "0", null,
        "0", null, null])).toBe(true);
});

test('no winner with 3 cells', () => {
    expect(IsVictory([null, 0, 0, 0, null, null, null, null, null])).toBe(false);
});