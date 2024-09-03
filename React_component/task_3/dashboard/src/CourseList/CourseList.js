import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape'

export default function CourseList( { listCourses }) {
	return (
		<table id="CourseList">
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
			</thead>
			<tbody>
				{listCourses.length > 0 ? (
				listCourses.map(({ id, name, credit }) => (
					<CourseListRow key={id} textFirstCell={name} textSecondCell={credit} isHeader={false} />
				))
			) : ( <tr>
				<td colSpan="2">No course available yet</td>
			  	</tr>
			)}
			</tbody>
		</table>
	);
}

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
  };
CourseList.defaultProps = {
	listCourses: [],
};
