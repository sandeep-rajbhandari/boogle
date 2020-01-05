import {HomePageUtil} from "../homePage.util";
import {SquareModel} from "../../../model/square.model";

const characters = [
    {"x": 0, "y": 0, "character": "P"}, {"x": 1, "y": 0, "character": "L"}, {"x": 2, "y": 0, "character": "T"},
    {"x": 3, "y": 0, "character": "F"}, {"x": 0, "y": 1, "character": "Y"},
    {"x": 1, "y": 1, "character": "R"}, {"x": 2, "y": 1, "character": "J"}, {"x": 3, "y": 1, "character": "E"},
    {"x": 0, "y": 2, "character": "Z"}, {"x": 1, "y": 2, "character": "Q"}, {"x": 2, "y": 2, "character": "T"},
    {"x": 3, "y": 2, "character": "S"}, {"x": 0, "y": 3, "character": "V"}, {"x": 1, "y": 3, "character": "R"},
    {"x": 2, "y": 3, "character": "E"}, {"x": 3, "y": 3, "character": "I"}];
describe('Board component tests', () => {
    it('should return 16 squareModel ', function () {
        const squares: SquareModel[] = HomePageUtil.generateCharacters();
        expect(squares.length).toEqual(16);
    });

    it('should test if word exists ', function () {
        expect(HomePageUtil.verifyWord(characters, 'PLTF')).toEqual(true);
        expect(HomePageUtil.verifyWord(characters, 'PLTA')).toEqual(false);
    });


});

