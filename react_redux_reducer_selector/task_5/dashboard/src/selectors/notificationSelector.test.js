import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Selectors', () => {
    let state;

    beforeEach(() => {
        state = Map({
            notifications: Map({
                1: Map({ id: 1, message: 'Notification 1', isRead: false }),
                2: Map({ id: 2, message: 'Notification 2', isRead: true }),
                3: Map({ id: 3, message: 'Notification 3', isRead: false })
            }),
            filter: 'DEFAULT'
        });
    });

    test('filterTypeSelected returns the correct filter value', () => {
        const result = filterTypeSelected(state);
        expect(result).toEqual('DEFAULT');
    });

    test('getNotifications returns the list of notifications', () => {
        const result = getNotifications(state);
        expect(result.toJS()).toEqual({
            1: { id: 1, message: 'Notification 1', isRead: false },
            2: { id: 2, message: 'Notification 2', isRead: true },
            3: { id: 3, message: 'Notification 3', isRead: false }
        });
    });

    test('getUnreadNotifications returns only unread notifications', () => {
        const result = getUnreadNotifications(state);
        expect(result.toJS()).toEqual({
            1: { id: 1, message: 'Notification 1', isRead: false },
            3: { id: 3, message: 'Notification 3', isRead: false }
        });
    });
});
