import {HomepageActionTypes, WordsAction} from "./homePage.action";

export interface HomePageState {
    pending: boolean,
    words: Array<WordsAndPoints>,
    error: any
}

export interface WordsAndPoints {
    word: string,
    points: number,
    isValid: boolean
}

const initialState: HomePageState = {
    words: [],
    pending: false,
    error: null
};

const homePageReducer = (state = initialState, action: HomepageActionTypes): HomePageState => {
    switch (action.type) {
        case WordsAction.ADD_WORDS: {
            return {
                ...state,
                words: [...state.words, action.payload],
                pending: false,
                error: null
            }
        }
        case WordsAction.FETCH_PENDING: {
            return {
                ...state,
                pending: true,
                error: null
            }
        }
        case WordsAction.FETCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        case WordsAction.RESET:
            return {
                ...initialState
            }
    }
    return state;
}
export default homePageReducer;
