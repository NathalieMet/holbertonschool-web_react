import courseReducer from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('Reducer', () => {
	it('verifies that the default state returns an empty array', () => {
		const expectedstate = {
			array: []
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
		const expectedData = [
				{
				  id: 1,
				  name: "ES6",
				  isSelected: false,
				  credit: 60
				},
				{
				  id: 2,
				  name: "Webpack",
				  isSelected: false,
				  credit: 20
				},
				{
				  id: 3,
				  name: "React",
				  isSelected: false,
				  credit: 40
				}
			  ];

			  const initialState = undefined;

		expect(courseReducer(initialState, action).get('array')).toEqual(expectedData);
	});

	let initialState;
    let expectedData;
    let action;

    beforeEach(() => {
        initialState = Map({
            array: [
                {
                    id: 1,
                    name: "ES6",
                    isSelected: false,
                    credit: 60
                },
                {
                    id: 2,
                    name: "Webpack",
                    isSelected: false,
                    credit: 20
                },
                {
                    id: 3,
                    name: "React",
                    isSelected: false,
                    credit: 40
                }
            ]
        });
    });

    it('verifies that SELECT_COURSE returns the data with the right item updated', () => {
        action = {
            type: SELECT_COURSE,
            index: 1
        };

        expectedData = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: true,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        expect(courseReducer(initialState, action).get('array')).toEqual(expectedData);
    });

    it('verifies that UNSELECT_COURSE returns the data with the right item updated', () => {
        action = {
            type: UNSELECT_COURSE,
            index: 1
        };

        expectedData = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];

        expect(courseReducer(initialState, action).get('array')).toEqual(expectedData);
    });
});
