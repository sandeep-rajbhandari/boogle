import {addWords, fetchError, fetchPending, HomepageActionTypes} from "./homePage.action";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppState} from "../../../store/store";

function fetchWords(word: string): ThunkAction<void, AppState, null, Action<string>> {
    return (dispatch: Dispatch<HomepageActionTypes>) => {
        dispatch(fetchPending());
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/wordsvalidate?word=${word}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                dispatch(addWords(Object.assign({word: word}, res)))    ;
            })
            .catch(error => {
                dispatch(fetchError(error));
            })
    }
}

export default fetchWords;
