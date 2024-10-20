import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSES_SUCCESS } from './courseActionTypes';

// Créateur d'action pour sélectionner un cours
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index
});

// Créateur d'action pour désélectionner un cours
export const unselectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index
});

export const dispatchSelectCourse = (index) => {
  store.dispatch( selectCourse(index));
};

export const dispatchUnselectCourse = (index) => {
  store.dispatch( unselectCourse(index));
};

export const setCourses = (data) => ({
  type: FETCH_COURSES_SUCCESS,
  data: data
});

export const fetchCourses = () => {
  return async (dispatch) => {

    try {
      const response = await fetch('/courses.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      dispatch(setCourses(result));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
};

