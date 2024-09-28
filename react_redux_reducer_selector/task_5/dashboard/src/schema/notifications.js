import { normalize, schema } from 'normalizr';
const notificationData = require('../../../../notifications.json');

export function getAllNotificationsByUser(userId) {
	const notificationsList = [];

	const normalizedData = getNormalizedData(notificationData);

	const notifications = normalizedData.entities.notifications;
	const messages = normalizedData.entities.messages;

	for (const id in notifications) {
		const notification = notifications[id];

		if (notification.author === userId) {
			const context = messages[notification.context];
			if (context) {
				notificationsList.push(context);
			}
		}
	}
	return notificationsList;
}


export function getNormalizedData(data) {
	const user = new schema.Entity("users");

	const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

	const notification = new schema.Entity("notifications",  {
		author: user,
		context: message
	  },
	  { idAttribute: 'id' }
	);

	const normalizedData = normalize(data, [notification]);

	return normalizedData;
}

export function notificationsNormalizer(data) {
	const notifications = new schema.Entity("notifications");

	const normalizedData = normalize(data, [notifications]);

	return normalizedData;
}
