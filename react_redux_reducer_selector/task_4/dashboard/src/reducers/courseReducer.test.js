import courseReducer from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('Reducer', () => {
    it('verifies that the default state returns an empty array', () => {
        const expectedstate = {
            courses: {}
        };
        expect(courseReducer(undefined, {}).toJS()).toEqual(expectedstate);
    });

    it('verifies that FETCH_COURSE_SUCCESS returns the data passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                    id: 1,
                    name: "ES6",
                    credit: 60
                },
                {
                    id: 2,
                    name: "Webpack",
                    credit: 20
                },
                {
                    id: 3,
                    name: "React",
                    credit: 40
                }
            ]
        };
        const expectedData = Map({
            1: Map({
              id: 1,
              name: "ES6",
              credit: 60,
              isSelected: false
            }),
            2: Map({
              id: 2,
              name: "Webpack",
              credit: 20,
              isSelected: false
            }),
            3: Map({
              id: 3,
              name: "React",
              credit: 40,
              isSelected: false
            })
          });

        const initialState = undefined;

        const receivedState = courseReducer(initialState, action).get('courses');

        expect(receivedState).toEqual(expectedData);
    });

    let initialState;
    let expectedData;
    let action;

    beforeEach(() => {
        initialState = Map({
            courses: Map({
                1: Map({
                    id: 1,
                    name: "ES6",
                    isSelected: false,
                    credit: 60
                }),
                2: Map({
                    id: 2,
                    name: "Webpack",
                    isSelected: false,
                    credit: 20
                }),
                3: Map({
                    id: 3,
                    name: "React",
                    isSelected: false,
                    credit: 40
                })
            })
        });
    });

    it('verifies that SELECT_COURSE returns the data with the right item updated', () => {
        action = {
            type: SELECT_COURSE,
            index: 2
        };

        expectedData = Map({
            1: Map({
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            }),
            2: Map({
                id: 2,
                name: "Webpack",
                isSelected: true,
                credit: 20
            }),
            3: Map({
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            })
        });

        expect(courseReducer(initialState, action).get('courses').toJS()).toEqual(expectedData.toJS());

    });

    it('verifies that UNSELECT_COURSE returns the data with the right item updated', () => {
        action = {
            type: UNSELECT_COURSE,
            index: 1
        };

        expectedData = Map({
            1: Map({
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            }),
            2: Map({
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            }),
            3: Map({
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            })
        });

        expect(courseReducer(initialState, action).get('courses').toJS()).toEqual(expectedData.toJS());
    });
});
