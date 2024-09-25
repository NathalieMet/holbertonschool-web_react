import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';


const initialState = Map({
	array: []
});

const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_COURSE_SUCCESS': {
			const coursesWithSelection = action.data.map(course => ({
                ...course,
                isSelected: false
            }));

            return state.set('array', coursesWithSelection);
        }

		case 'SELECT_COURSE': {
			return state.update('array', array =>
                array.map((course, index) =>
                    index === action.index ? { ...course, isSelected: true } : course
                )
            );
        }

		case 'UNSELECT_COURSE': {
			return state.update('array', array =>
                array.map((course, index) =>
                    index === action.index ? { ...course, isSelected: false } : course
                )
            );
        }

		default:
			return state
	}
}

export default courseReducer;
