import TodoApp from "./Todo/TodoApp";

// new TodoApp();

const todoApp = new TodoApp({todoList: []});
console.log(todoApp);
// todoApp.create({
// 	id: 1,
// 	content: "타입설계",
// 	isCompleted: false,
// 	category: "TypeScript",
// 	tags: ["필수"],
// });
// console.log(todoApp.todoList);
// todoApp.create({
// 	id: 2,
// 	content: "타입선언",
// 	isCompleted: false,
// 	category: "TypeScript",
// 	tags: ["필수", " 교양"],
// });
// console.log(todoApp.todoList);
// console.log(todoApp.readById(2));