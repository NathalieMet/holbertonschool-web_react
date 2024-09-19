// courseActionCreators.test.js
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unselectCourse } from './courseActionCreators';

describe('Action Creators', () => {
  it('should create an action to select a course', () => {
    const courseId = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      payload: courseId
    };
    expect(selectCourse(courseId)).toEqual(expectedAction);
  });

  it('should create an action to unselect a course', () => {
    const courseId = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      payload: courseId
    };
    expect(unselectCourse(courseId)).toEqual(expectedAction);
  });
});
