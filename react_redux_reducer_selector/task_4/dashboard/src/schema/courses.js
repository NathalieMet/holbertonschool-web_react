import { normalize, schema } from 'normalizr';

export function coursesNormalizer(data) {
	const courses = new schema.Entity("courses");

	const normalizedData = normalize(data, [courses]);

	return normalizedData;
}
