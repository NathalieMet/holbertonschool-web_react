import { bindActionCreators } from 'redux';
import { selectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { useDispatch } from 'react-redux';

// Créateur d'action pour sélectionner un cours
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  payload: index
});

// Créateur d'action pour désélectionner un cours
export const unselectCourse = (index) => ({
  type: UNSELECT_COURSE,
  payload: index
});

const dispatch = useDispatch();

// Lier les deux action creators
const actions = bindActionCreators({ selectCourse, unselectCourse }, dispatch);

// Utilisation
actions.selectCourse(1); // Cela va dispatcher { type: SELECT_COURSE, payload: 1 }
actions.unselectCourse(1); // Cela va dispatcher { type: UNSELECT_COURSE, payload: 1 }
