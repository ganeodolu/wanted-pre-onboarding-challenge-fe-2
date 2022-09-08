/**
 * Todo 앱
 * @constructor
 * @param {Todo[]} todolist - 할일 목록
 */

class TodoApp {
	constructor(todolist) {
		this.todolist = todolist;
	}

	/**
	 * 할일 생성하기
	 * @param {Todo} newTodo - 새로운 할일
	 * @return {Todo} 새로운 할일
	 */

	create(newTodo) {
		this.todolist = [newTodo, ...this.todolist];
		return newTodo;
	}

	/**
	 * 할일 모두 조회하기
	 * @return {Todo[]}
	 */

	readAll() {
		return this.todolist;
	}

	/**
	 * 할일 아이디별 조회하기
	 * @param {string} id - 아이디가 없으면 모든 할일 조회, 아이디가 있으면 해당 아이디의 할일 조회
	 * @return {Todo}
	 */

	readById(id) {
		return this.todolist.filter((todo) => todo.id === id);
	}

	/**
	 * 할일 수정하기
	 * @param {string} id - 수정할 할일 아이디
	 * @param {string} key - 입력할 할일의 키값
	 * @param {string | boolean | string[]} value - 입력할 할일의 내용
	 * @return {Todo}
	 */

	updateById(id, key, value) {
		const newTodolist = [...this.todolist];
		const newIndex = newTodolist.findIndex((todo) => todo.id === id);
		newTodolist[newIndex][key] = value;
		this.todolist = [...newTodolist];

		return this.todolist[newIndex];
	}

	/**
	 * 할일 태그 수정하기
	 * @param {string} id - 수정할 할일 아이디
	 * @param {string} oldTag - 수정할 할일의 태그
	 * @param {string} newTag - 입력할 할일의 태그
	 * @return {Todo}
	 */

	updateTagById(id, oldTag, newTag) {
		const newTodolist = [...this.todolist];
		const newIndex = newTodolist.findIndex((todo) => todo.id === id);
		const newTagIndex = newTodolist[newIndex][tag].findIndex(
			(text) => text === oldTag
		);
		newTodolist[newIndex][tag][newTagIndex] = newTag;
		const tagSet = new Set(newTodolist[newIndex][tag][newTagIndex]);
		newTodolist[newIndex][tag][newTagIndex] = [...tagSet];
		this.todolist = [...newTodolist];

		return this.todolist[newIndex];
	}

	/**
	 * 할일 모두 삭제하기
	 * @return {boolean} - 삭제 성공 유무
	 */

	deleteAll() {
		this.todolist = [];

		return true;
	}

	/**
	 * 할일 아이디별 삭제하기
	 * @param {string} id - 해당 아이디의 할일 삭제
	 * @return {boolean} - 삭제 성공 유무
	 */

	deleteById(id) {
		const newTodolist = [...this.todolist];
		const newIndex = newTodolist.findIndex((todo) => todo.id === id);
		this.todolist = [...newTodolist.splice(newIndex, 1)];

		return true;
	}

	/**
	 * 아이디별 할일 태그 삭제하기
	 * @param {string} id - 삭제할 태그의 ID
	 * @param {string} oldTag - 삭제할 태그
	 * @return {boolean} - 삭제 성공 유무
	 */

	deleteTag(id, oldTag) {
		const newTodolist = [...this.todolist];
		const newIndex = newTodolist.findIndex((todo) => todo.id === id);
		const newTagIndex = newTodolist[newIndex][tag].findIndex(
			(text) => text === oldTag
		);
		this.todolist = [...newTodolist[newIndex][tag].splice(newTagIndex, 1)];

		return true;
	}

	/**
	 * 아이디별 할일 태그 전부 삭제하기
	 * @param {string} id - 삭제할 태그의 ID
	 * @return {boolean} - 삭제 성공 유무
	 */

	deleteTagAll(id) {
		const newTodolist = [...this.todolist];
		const newIndex = newTodolist.findIndex((todo) => todo.id === id);
		newTodolist[newIndex][tag] = [];
		this.todolist = [...newTodolist];

		return true;
	}
}

/**
 * Todo 정의
 * @typedef {object} Todo
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

const todoApp = new TodoApp([]);
console.log(todoApp.todolist);
todoApp.create({
	id: 1,
	content: "타입설계",
	isCompleted: false,
	category: "TypeScript",
	tags: ["필수"],
});
console.log(todoApp.todolist);
todoApp.create({
	id: 2,
	content: "타입선언",
	isCompleted: false,
	category: "TypeScript",
	tags: ["필수", " 교양"],
});
console.log(todoApp.todolist);
console.log(todoApp.readById(2));
