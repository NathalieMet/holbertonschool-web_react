import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
	backgroundColor: '#f5f5f5ab',
}

const headerrowStyle = {
	backgroundColor: '#deb5b545',
}

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
	if (isHeader) {
		if (textSecondCell === null) {
			return (
				<tr>
				<th style={headerrowStyle}colSpan={2}>{textFirstCell}</th>
				</tr>
			)
		}
		else {
			return (
				<tr>
				<th style={headerrowStyle}>{textFirstCell}</th>
				<th style={headerrowStyle}>{textSecondCell}</th>
				</tr>
			)
		}
	}
	else {
		return (
			<tr>
			<td style={rowStyle}>{textFirstCell}</td>
			<td style={rowStyle}>{textSecondCell}</td>
			</tr>
		)
	}
}

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	  ]),
};

// Default props
CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};
