const notificationData = require('../../../../notifications.json');

export default function getAllNotificationsByUser(userId) {
	console.log(notificationData);
	const notificationsList = [];

	for (const obj of notificationData) {
		if (userId == obj.author.id) {
			notificationsList.push(obj);
		}
	}
	return notificationsList;
}
