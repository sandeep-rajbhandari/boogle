import React from 'react';
import {Board} from "../board";
import {shallow} from 'enzyme';

const characters = [
    {"x": 0, "y": 0, "character": "P"}, {"x": 1, "y": 0, "character": "L"}, {"x": 2, "y": 0, "character": "T"},
    {"x": 3, "y": 0, "character": "F"}, {"x": 0, "y": 1, "character": "Y"},
    {"x": 1, "y": 1, "character": "R"}, {"x": 2, "y": 1, "character": "J"}, {"x": 3, "y": 1, "character": "E"},
    {"x": 0, "y": 2, "character": "Z"}, {"x": 1, "y": 2, "character": "Q"}, {"x": 2, "y": 2, "character": "T"},
    {"x": 3, "y": 2, "character": "S"}, {"x": 0, "y": 3, "character": "V"}, {"x": 1, "y": 3, "character": "R"},
    {"x": 2, "y": 3, "character": "E"}, {"x": 3, "y": 3, "character": "I"}];
describe('Board component tests', () => {
    const boardComponent = shallow(<Board characters={characters} boardDimensionCount={4}/>);
    it('should have 4X4 metrics board ', function () {
        expect(boardComponent.find('td')).toHaveLength(16);
        expect(boardComponent.find('tr')).toHaveLength(4);
        boardComponent.find('input').getElements()[0].props.value
    });
    it('should have letters according to input ', function () {
        boardComponent.find('input').getElements().forEach((val: any, index: number) => {
            expect(val.props.value).toEqual(characters[index].character);
        });
    })
});
