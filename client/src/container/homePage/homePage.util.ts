import {SquareModel} from "../../model/square.model";
import * as _ from "lodash";

export class HomePageUtil {
    public static readonly BOARD_DIMENSION_COUNT = 4;
    private static readonly ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private static readonly NEIGHBOURS_PATH = [[0, 1], [0, -1], [1, -1], [1, 1], [-1, 1], [1, 0], [-1, 0], [-1, -1]];


    private static getRandomCharacter(): string {
        return HomePageUtil.ALPHABETS.charAt(Math.floor(Math.random() * HomePageUtil.ALPHABETS.length));

    }

    public static generateCharacters(): SquareModel[] {
        const characters: SquareModel[] = [];
        _.range(HomePageUtil.BOARD_DIMENSION_COUNT).forEach(index1 => {
            _.range(HomePageUtil.BOARD_DIMENSION_COUNT).forEach(index2 => {
                const character = this.getRandomCharacter();
                characters.push(new SquareModel(index2, index1, character));
            })
        })
        return characters;
    }

    public static verifyWord(characters: SquareModel[], word: string): boolean {
        let firstLetter = word.charAt(0);
        let squareWords: Array<SquareModel> = [];
        characters.forEach((square, index) => {
            if (square.character === firstLetter.toUpperCase()) {
                squareWords.push(square);
            }
        });
        for (const squareWord of squareWords) {
            const availWord = this.findWord(characters, word, [squareWord]);
            if (availWord) {
                return true;
            }
        }
        return false;

    }

    private static findWord(characters: SquareModel[], word: string, stack: SquareModel[]): any {
        const neighbours = this.getNeighbours(characters, stack[stack.length - 1]);
        for (const neighbour of neighbours) {
            const newStack = [...stack];
            if (!stack.find(char => char.x === neighbour.x && char.y === neighbour.y)) {
                newStack.push(neighbour);
            } else {
                continue;
            }
            const stackString = newStack.map(value => value.character).join('');
            if (word.length === stackString.length && word === stackString) {
                return stackString;
            } else if (stackString === word.substring(0, stackString.length)) {
                let result = this.findWord(characters, word, newStack);
                if (result) {
                    return result;
                }
            }
        }
    }

    private static getNeighbours(characters: SquareModel[], square: SquareModel): SquareModel[] {
        const neighbours: SquareModel[] = [];
        this.NEIGHBOURS_PATH.forEach(path => {
            const neigh = characters.find(charater => charater.x === square.x + path[0] && charater.y === square.y + path[1]);
            if (neigh) {
                neighbours.push(neigh);
            }
        });
        return neighbours;
    }
}
