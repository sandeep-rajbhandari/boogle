import {addWords, fetchError, fetchPending, WordsAction} from '../store/homePage.action';

const words = {word: "pass", points: 1, isValid: true};
describe('home page actions', () => {
    describe('add words action', () => {
        it('should return the correct constant', () => {
            expect(addWords(words)).toEqual({
                type: WordsAction.ADD_WORDS,
                payload: words
            })
        });
    });
    describe('fetch pending action', () => {
        it('should return the correct constant', () => {
            expect(fetchPending()).toEqual({
                type: WordsAction.FETCH_PENDING,
                payload: null
            })
        });
    });
    describe('fetch error', () => {
        it('should return the correct constant', () => {
            expect(fetchError({})).toEqual({
                type: WordsAction.FETCH_ERROR,
                payload: {}
            })
        });
    });
});
