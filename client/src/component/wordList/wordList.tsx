import * as React from "react";
import {WordsAndPoints} from "../../container/homePage/store/homePage.reducer";

interface IProps {
    words: Array<WordsAndPoints>
}

export class WordList extends React.Component<IProps, {}> {
    render() {
        return (
            <div className="paragraph">
                <div className="shiftRight">
                    <span>Total points:</span>
                    <span id='points'>{this.props.words.reduce((acc: number, curr) => {
                        return acc + curr.points
                    }, 0)}</span>
                </div>
                <nav>
                    <ul>
                        {this.props.words.map((word) => (
                            <li className={word.isValid ? 'ok' : 'wrong'} key={word.word}>{word.word}</li>))}
                    </ul>
                </nav>
            </div>
        )
    }
}
