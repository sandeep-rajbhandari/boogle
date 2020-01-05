import {WordsAndPoints} from "./homePage.reducer";
import {ActionWithPayload} from "../../../store/action.interface";

export enum WordsAction {
    ADD_WORDS = '[Words Data] FETCH_AGE_BAND',
    FETCH_PENDING = '[Words Data] FETCH_PENDING',
    FETCH_ERROR = '[Words Data] FETCH_ERROR',
    RESET = '[Words Data] RESET'
}


export function addWords(payload: WordsAndPoints): ActionWithPayload<typeof WordsAction.ADD_WORDS, WordsAndPoints> {
    return {
        type: WordsAction.ADD_WORDS,
        payload: payload
    };
}

export function fetchPending(): ActionWithPayload<typeof WordsAction.FETCH_PENDING, null> {
    return {
        type: WordsAction.FETCH_PENDING,
        payload: null
    }
}

export function reset(): ActionWithPayload<typeof WordsAction.RESET, null> {
    return {
        type: WordsAction.RESET,
        payload: null
    }
}


export function fetchError(error: any): ActionWithPayload<typeof WordsAction.FETCH_ERROR, any> {
    return {
        type: WordsAction.FETCH_ERROR,
        payload: error
    }
}

export type HomepageActionTypes = ActionWithPayload<WordsAction, any> ;
