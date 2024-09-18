import { normalize, schema } from 'normalizr';
const notificationData = require('../../../../notifications.json');

export function getAllNotificationsByUser(userId) {
	const notificationsList = [];

	for (const obj of notificationData) {
		if (userId == obj.author.id) {
			notificationsList.push(obj);
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
