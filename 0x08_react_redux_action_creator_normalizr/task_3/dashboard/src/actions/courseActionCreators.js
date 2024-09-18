import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

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
