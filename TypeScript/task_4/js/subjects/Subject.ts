namespace Subjects {
export class Subject {
		private _teacher: Teacher;

		set setTeacher(teacher: Teacher){
			this._teacher = teacher;
	}
		protected get teacher(): Teacher {
			return this._teacher;
	}
}
}
