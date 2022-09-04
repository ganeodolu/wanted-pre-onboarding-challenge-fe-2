/**
 * Represents a book.
 * @constructor
 * @param {Todo[]} todolist - 할일 목록
 */
function TodoApp(todolist) {
  this.todolist = todolist;
}

/**
 * 할일 생성하기
 * @param {Todo[]} todolist - 기존 할일 목록
 * @param {Todo} newTodo - 새로운 할일
 * @return {Todo[]} 새로운 할일 목록
 */
TodoApp.prototype.create = function (todolist, newTodo) {
  this.todolist = [newTodo, ...this.todolist]
  // return newTodoList
};

/**
 * 할일 조회하기
 * @param {string} id - 아이디
 * @return {Todo[]}
 */
 TodoApp.prototype.read = function (id) {};

 /**
 * 할일 수정하기
 * @param {string} id - 아이디
 * @return {Todo[]}
 */
  TodoApp.prototype.update = function (id) {};

 /**
 * 할일 삭제하기
 * @param {string} id - 아이디
 * @return {Todo[]}
 */
  TodoApp.prototype.delete = function (id) {};

/**
 * Todo 정의
 * @typedef {object} Todo
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} tags - 태그들
 */

// Todo {
//   아이디(required),
//   내용(required),
//   완료여부(required),
//   카테고리(required),
//   태그들(optional),
// }

// CREATE
// 할 일을 추가할 수 있다.
// 내용없이 추가할 수 없다.

// READ
// 모든 할 일을 조회할 수 있다.
// ID를 기반으로 특정 할 일을 조회할 수 있다.

// UPDATE
// ID를 제외한 모든 속성을 수정할 수 있다.
// 특정 할 일의 특정 태그를 수정할 수 있다.

// DELETE
// ID를 기반으로 특정 할 일을 삭제할 수 있다.
// 모든 할 일을 제거할 수 있다.
// 특정 할 일의 특정 태그를 삭제할 수 있다.
// 특정 할 일의 모든 태그를 제거할 수 있다.
