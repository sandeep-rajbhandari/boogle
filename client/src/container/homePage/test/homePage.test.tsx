import {shallow, ShallowWrapper} from "enzyme";
import {HomePage, IProps} from "../homePage";
import * as React from "react";
import {SquareModel} from "../../../model/square.model";

describe('Board component tests', () => {
    let homePageWrapper: ShallowWrapper;
    let props: any;

    beforeEach(() => {
            props = {
                words: [],
                pending: true,
                error: {},
                fetchWords: jest.fn(),
                addWords: jest.fn()
            }

            homePageWrapper = shallow(<HomePage {...props}/>);
        }
    )
    it('should call fetchword if word exists', () => {
        const characters: SquareModel[] = homePageWrapper.state('characters');
        let firstRow = '';
        for (let i = 0; i < 4; i++) {
            firstRow += characters[i].character;
        }
        homePageWrapper.find('input[type="text"]').simulate('change', {
            target: {
                name: 'word',
                value: firstRow
            }
        });
        homePageWrapper.find('form').simulate(
            'submit',
            {
                preventDefault() {
                }
            }
        );
        expect(props.fetchWords.mock.calls.length).toBe(1)
    })

    it('should call addword if word doesnot exists', () => {
        const characters: SquareModel[] = homePageWrapper.state('characters');
        let firstRow = 'rrrrrrrrrrrrrrrrrrrrrrrrr';
        for (let i = 0; i < 4; i++) {
            firstRow += characters[i].character;
        }
        homePageWrapper.find('input[type="text"]').simulate('change', {
            target: {
                name: 'word',
                value: firstRow
            }
        });
        homePageWrapper.find('form').simulate(
            'submit',
            {
                preventDefault() {
                }
            }
        );
        expect(props.addWords.mock.calls.length).toBe(1)
    })
});
