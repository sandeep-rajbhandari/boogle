import expect from 'expect';
import homePageReducer from "../store/homePage.reducer";
import {addWords, fetchError, fetchPending} from "../store/homePage.action";

const words = {word: "pass", points: 1, isValid: true};
describe('Home Page reducer', () => {

    it('handles the addWords action', () => {
        expect(homePageReducer(undefined, addWords(words))).toEqual({
            words: [words],
            pending: false,
            error: null
        })
    });
    it('handles the fetchPending action', () => {
        expect(homePageReducer(undefined, fetchPending())).toEqual({
            words: [],
            pending: true,
            error: null
        })
    });
    it('handles the fetchWords action', () => {
        expect(homePageReducer(undefined, fetchError({}))).toEqual({
            words: [],
            pending: false,
            error: {}
        })
    });
});
