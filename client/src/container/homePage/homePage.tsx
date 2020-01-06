import React from "react";
import {SquareModel} from "../../model/square.model";
import {HomePageUtil} from "./homePage.util";
import {Board} from "../../component/board/board";
import {connect} from "react-redux";
import {HomePageState, WordsAndPoints} from "./store/homePage.reducer";
import {WordList} from "../../component/wordList/wordList";
import fetchWords from "./store/homePage.effect";
import {addWords, fetchPending, reset} from './store/homePage.action';

export interface IProps {
    words: Array<WordsAndPoints>;
    pending: boolean;
    error: any;
    fetchWords: any;
    fetchPending: typeof fetchPending;
    addWords: typeof addWords;
    reset: typeof reset;
}

interface IState {
    characters: SquareModel[];
    word: string;
    time: string;
    disableInput: boolean;
}

const mapStateToProps = (state: HomePageState) => {
    return {
        words: state.words,
        pending: state.pending,
        error: state.error
    };
};

export class HomePage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            characters: HomePageUtil.generateCharacters(),
            word: '',
            time: '',
            disableInput: false
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.startTimer();
    }

    updateInput(event: any) {
        this.setState({word: event.target.value});
    }

    componentDidUpdate(): void {
        if (this.props.error) {
            this.props.fetchPending();
            if (window.confirm("Something went wrong!!Do you want to reload")) {
                window.location.reload();
            }
        }
    }


    handleSubmit(event: any) {

        if (this.props.words.find(value => value.word === this.state.word)) {
            alert("Word already inserted")
        }

        if (HomePageUtil.verifyWord(this.state.characters, this.state.word.toUpperCase())) {
            this.props.fetchWords(this.state.word)
        } else {
            this.props.addWords({word: this.state.word, isValid: false, points: 0})
        }
        event.preventDefault();
    }

    startTimer() {
        const endDate = new Date();
        endDate.setMinutes(endDate.getMinutes() + 2);
        const interval = setInterval(() => {
                const totalSeconds = (+endDate - (+new Date())) / 1000;
                if (totalSeconds > 0) {
                    this.setState({time: `${Math.floor(totalSeconds / 60)}:${Math.ceil(totalSeconds % 60)}`});
                } else {
                    this.setState({time: '0:0'});
                    clearInterval(interval);
                    if (window.confirm("Game Over!! Do you want to play again?")) {
                        this.reset();
                    } else {
                        this.setState({disableInput: true});
                    }
                }
            }, 1000
        )
    }

    reset() {
        this.props.reset();
        this.setState({characters: HomePageUtil.generateCharacters()});
        this.startTimer();
    }

    render() {
        return (
            <div id="container">
                <div className="app">
                    <span>{this.state.time}</span>
                </div>
                <div className="content">
                    <Board characters={this.state.characters}
                           boardDimensionCount={HomePageUtil.BOARD_DIMENSION_COUNT}/>
                    <WordList words={this.props.words}/>
                </div>
                <form className="content" onSubmit={this.handleSubmit}>
                    <span><b>Please type words you find</b></span><br/>
                    <input type="text" name='word' disabled={this.state.disableInput} onChange={this.updateInput}/>
                    <button type="submit" disabled={!this.state.word || this.state.disableInput}>Submit</button>
                </form>
            </div>

        )
    }

}

export default connect(
    mapStateToProps,
    {fetchWords, addWords, fetchPending, reset}
)(HomePage);
