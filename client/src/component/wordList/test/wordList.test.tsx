import React from 'react';
import {shallow} from 'enzyme';
import {WordList} from "../wordList";

const words = [
    {word: "pass", points: 1, isValid: true},
    {word: "faildd", points: 0, isValid: false}
];
describe('Board component tests', () => {
    const wordComponent = shallow(<WordList words={words}/>);
    it('should have points equal to sum of points ', function () {
        expect(wordComponent.find('#points').getElement().props.children).toEqual(1);
    });

    it('should have different class according to validity of word ', function () {
        expect(wordComponent.find('li').getElements()[0].props.className).toEqual('ok');
        expect(wordComponent.find('li').getElements()[0].props.children).toEqual(words[0].word);
        expect(wordComponent.find('li').getElements()[1].props.className).toEqual('wrong');
        expect(wordComponent.find('li').getElements()[1].props.children).toEqual(words[1].word);
    });
});
