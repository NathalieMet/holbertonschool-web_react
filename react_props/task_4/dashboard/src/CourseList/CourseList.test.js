import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {

	it('Check that it renders CourseList component without crashing', () => {
	  shallow(<CourseList />);
	});

	it('Check that it renders the 5 different rows', () => {
		const wrapper = shallow(<CourseList />);
		const rowElement = wrapper.find('CourseListRow');
		expect(rowElement).toHaveLength(5);

	  });
});
