import { Map, setIn } from 'immutable';
import { coursesNormalizer } from '../schema/courses';


const initialState = Map({
	courses: Map(),
});

const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_COURSE_SUCCESS': {
			const normalizedData = coursesNormalizer(action.data);

            const coursesWithSelection = Map(normalizedData.entities.courses).map(course =>
                Map(course).set('isSelected', false)
            );

            return state.merge({
                courses: coursesWithSelection
            });
        }

		case 'SELECT_COURSE': {
            return state.setIn(['courses', String(action.index), 'isSelected'], true);
        }

		case 'UNSELECT_COURSE': {
			return state.setIn(['courses', String(action.index), 'isSelected'], false);
        }

		default:
			return state
	}
}

export default courseReducer;
