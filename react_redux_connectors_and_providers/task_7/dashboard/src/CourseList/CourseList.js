import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getListCourses } from '../selectors/courseSelector'
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unselectCourse } from '../actions/courseActionCreators';

export const mapStateToProps = (state) => {
	return {
		listCourses: getListCourses(state),
	};
};

export const mapDispatchToProps = {
	fetchCourses,
	selectCourse,
	unselectCourse,
};

class CourseList extends Component {

	componentDidMount() {
		this.props.fetchCourses();
	}

	constructor(props) {
		super(props);
	}

	onChangeRow(id, checked) {
		if (checked) {
			console.log("l'index dans onchangeorow est: ", id)
			this.props.selectCourse(id)
		}
		else {
			this.props.unselectCourse(id)
		}
	}

	render() {
		const { listCourses } = this.props;

		console.log("list courses in courselist.js: ", listCourses);

		return (
			<table className={css(styles.table)}>
				<thead>
					<CourseListRow textFirstCell="Available courses" isHeader={true} />
					<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
				</thead>
				<tbody>
					{listCourses.size > 0 ? (
						listCourses.map(course => (
							<CourseListRow
								key={course.get('id')}
								textFirstCell={course.get('name')}
								textSecondCell={course.get('credit')}
								isHeader={false}
								isChecked={course.get('isSelected')}
								onChangeRow={(checked) => this.onChangeRow(course.get('id'), checked)}
							/>
						))
					) : (
						<tr>
							<td colSpan="2" className={css(styles.noCourses)}>No course available yet</td>
						</tr>
					)}
				</tbody>
			</table>
		);
	}
}

const styles = StyleSheet.create({
	table: {
		width: '80%',
		margin: '20px auto',
		borderCollapse: 'collapse',
		border: '2px solid rgb(209, 203, 203)',
	},
	noCourses: {
		textAlign: 'center',
		padding: '10px',
		backgroundColor: '#f5f5f5ab'
	}
});

CourseList.propTypes = {

};
CourseList.defaultProps = {
	listCourses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
