import React from "react";
import * as _ from "lodash";
import {SquareModel} from "../../model/square.model";

interface IProps {
    characters: SquareModel[],
    boardDimensionCount: number
}

interface IState {
    word: string;
}

export class Board extends React.Component<IProps, IState> {
    private characters: SquareModel[] = this.props.characters;

    private getSquareRow(index: number) {
        return (
            <tr key={index.toString()}>
                {
                    _.range(this.props.boardDimensionCount).map(i => {
                        const character = this.characters.find(char => char.x === i && char.y === index);
                        return (
                            <td key={i.toString()}><input type="button"  value={character ? character.character : ''}/>
                            </td>)
                    })
                }
            </tr>
        )
    }

    render() {
        return (
            <div>
                <div className="tablewrapper">
                    <table id="pzl" cellSpacing="0" cellPadding="0">
                        <tbody>
                        {
                            _.range(this.props.boardDimensionCount).map((index => {
                                return (
                                    this.getSquareRow(index)
                                )
                            }))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


