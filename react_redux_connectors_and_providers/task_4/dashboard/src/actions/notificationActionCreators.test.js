import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsread, setNotificationFilter } from './notificationActionCreators';

describe('Action Creators', () => {
	it('should create an action to mark an index as read', () => {
		const index = 1;
		const expectedAction = {
			type: MARK_AS_READ,
			index: 1
		};
		expect(markAsread(index)).toEqual(expectedAction);
	});

		it('should create an action to set the notification filters', () => {
			const filter = NotificationTypeFilters.DEFAULT;
			const expectedAction = {
				type: SET_TYPE_FILTER,
				filter: "DEFAULT"
			};
			expect(setNotificationFilter(filter)).toEqual(expectedAction);
		});
	});
