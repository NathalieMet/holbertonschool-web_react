import { Map, List } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSES_SUCCESS } from '../actions/courseActionTypes';

const initialState = Map({
	courses: Map(),
});

const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COURSES_SUCCESS:
			const coursesMap = Map(action.data.map(course => [
				course.id,
				Map({
					...course,
					isSelected: false
				})
			]));

			return state.set('courses', coursesMap);

		case SELECT_COURSE:

		console.log("l'index est: ", action.index)

			return state.setIn(['courses', String(action.index), 'isSelected'], true);

		case UNSELECT_COURSE:

			return state.setIn(['courses', String(action.index), 'isSelected'], false);

		default:
			return state;
	}
}

export default courseReducer;
