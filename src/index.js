/**
 * Todo 앱
 * @constructor
 * @param {Todo[]} todolist - 할일 목록
 */

class TodoApp {
	constructor(todolist) {
		this.todolist = todolist;
	}

	// CREATE
	// 할 일을 추가할 수 있다.
	// 내용없이 추가할 수 없다.

	/**
	 * 할일 생성하기
	 * @param {Todo} newTodo - 새로운 할일
	 * @return {Todo[]} 새로운 할일 목록
	 */

	create(newTodo) {
		this.todolist = [newTodo, ...this.todolist];
		return this.todolist;
	}

	// READ
	// 모든 할 일을 조회할 수 있다.
	// ID를 기반으로 특정 할 일을 조회할 수 있다.

	/**
	 * 할일 조회하기
	 * @param {string} [id] - 아이디가 없으면 모든 할일 조회, 아이디가 있으면 해당 아이디의 할일 조회
	 * @return {Todo[] | Todo}
	 */

	read(id) {}

	// UPDATE
	// ID를 제외한 모든 속성을 수정할 수 있다.
	// 특정 할 일의 특정 태그를 수정할 수 있다.

	/**
	 * 할일 수정하기
	 * @param {string} id - 할일 아이디
	 * @param {string} key - 할일의 키값
	 * @param {string | boolean | string[]} value - 할일의 수정할 내용
	 * @return {Todo}
	 */

	update(id, key, value) {}
	// DELETE
	// ID를 기반으로 특정 할 일을 삭제할 수 있다.
	// 모든 할 일을 제거할 수 있다.

	// 특정 할 일의 특정 태그를 삭제할 수 있다.
	// 특정 할 일의 모든 태그를 제거할 수 있다.

	/**
	 * 할일 삭제하기
	 * @param {string} [id] - 아이디가 없으면 모든 할일 제거, 아이디가 있으면 해당 아이디의 할일 삭제
	 * @return {boolean} - 삭제 성공 유무
	 */

	delete(id) {}
	/**
	 * 할일 태그 삭제하기
	 * @param {string} id - 삭제할 태그의 ID
	 * @param {string} [tag] - 삭제할 태그. 없으면 모든 태그 삭제, 있으면 해당 태그 삭제
	 * @return {boolean} - 삭제 성공 유무
	 */
	deleteTag(id, tag) {}
}

// Todo {
//   아이디(required),
//   내용(required),
//   완료여부(required),
//   카테고리(required),
//   태그들(optional),
// }

/**
 * Todo 정의
 * @typedef {object} Todo
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */
