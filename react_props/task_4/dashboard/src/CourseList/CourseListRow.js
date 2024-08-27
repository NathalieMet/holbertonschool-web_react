import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr>
				<th colSpan={2}>{textFirstCell}</th>
				</tr>
			)
		}
		else {
			return (
				<tr>
				<th>{textFirstCell}</th>
				<th>{textSecondCell}</th>
				</tr>
			)
		}
	}
	else {
		return (
			<tr>
			<td>{textFirstCell}</td>
			<td>{textSecondCell}</td>
			</tr>
		)
	}
}

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.string,
};

// Default props
CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};
