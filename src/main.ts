// @ts-check

interface Todo {
	id: string;
	content: string;
	isCompleted: boolean;
	category: string;
	tag?: string[];
}

abstract class TodoApp {
	todoList: Todo[];
	constructor({ todoList }: { todoList: Todo[] }) {
		this.todoList = todoList;
	}

	create({ newTodo }: { newTodo: Todo }): Todo {
		this.todoList = [newTodo, ...this.todoList];
		return newTodo;
	}

	readAll(): Todo[] {
		return this.todoList;
	}

	readById({ selectedId }: { selectedId: string }): Todo {
		return this.todoList.find((todo) => todo.id === selectedId);
	}

	updateById({
		selectedId,
		key,
		value,
	}: {
		selectedId: string;
		key: string;
		value: string;
	}): Todo {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		newTodoList[newIndex][key] = value;
		this.todoList = [...newTodoList];

		return this.todoList[newIndex];
	}

	updateTagById({
		selectedId,
		oldTag,
		newTag,
	}: {
		selectedId: string;
		oldTag: string;
		newTag: string;
	}): Todo {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		const newTagIndex = newTodoList[newIndex]["tag"].findIndex(
			(text) => text === oldTag
		);
		newTodoList[newIndex]["tag"][newTagIndex] = newTag;
		const tagList = new Set(newTodoList[newIndex]["tag"]);
		newTodoList[newIndex]["tag"] = [...tagList];
		this.todoList = [...newTodoList];

		return this.todoList[newIndex];
	}

	deleteAll(): boolean {
		this.todoList = [];

		return true;
	}

	deleteById({ selectedId }: { selectedId: string }): boolean {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		this.todoList = [...newTodoList.splice(newIndex, 1)];

		return true;
	}

	deleteTag({ selectedId, oldTag }: { selectedId: string; oldTag: string }): boolean {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		const newTagIndex = newTodoList[newIndex]["tag"].findIndex(
			(text) => text === oldTag
		);
		newTodoList[newIndex]["tag"].splice(newTagIndex, 1);
		this.todoList = [...newTodoList];

		return true;
	}

	deleteTagAll({ selectedId }: { selectedId: string }): boolean {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		newTodoList[newIndex]["tag"] = [];
		this.todoList = [...newTodoList];

		return true;
	}
}

class TodoAppClass implements TodoApp {
  todoList: Todo[];
  create({ newTodo }: { newTodo: Todo }): Todo {
		this.todoList = [newTodo, ...this.todoList];
		return newTodo;
	}

	readAll(): Todo[] {
		return this.todoList;
	}

	readById({ selectedId }: { selectedId: string }): Todo {
		return this.todoList.find((todo) => todo.id === selectedId);
	}

	updateById({
		selectedId,
		key,
		value,
	}: {
		selectedId: string;
		key: string;
		value: string;
	}): Todo {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		newTodoList[newIndex][key] = value;
		this.todoList = [...newTodoList];

		return this.todoList[newIndex];
	}

	updateTagById({
		selectedId,
		oldTag,
		newTag,
	}: {
		selectedId: string;
		oldTag: string;
		newTag: string;
	}): Todo {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		const newTagIndex = newTodoList[newIndex]["tag"].findIndex(
			(text) => text === oldTag
		);
		newTodoList[newIndex]["tag"][newTagIndex] = newTag;
		const tagList = new Set(newTodoList[newIndex]["tag"]);
		newTodoList[newIndex]["tag"] = [...tagList];
		this.todoList = [...newTodoList];

		return this.todoList[newIndex];
	}

	deleteAll(): boolean {
		this.todoList = [];

		return true;
	}

	deleteById({ selectedId }: { selectedId: string }): boolean {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		this.todoList = [...newTodoList.splice(newIndex, 1)];

		return true;
	}

	deleteTag({ selectedId, oldTag }: { selectedId: string; oldTag: string }): boolean {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		const newTagIndex = newTodoList[newIndex]["tag"].findIndex(
			(text) => text === oldTag
		);
		newTodoList[newIndex]["tag"].splice(newTagIndex, 1);
		this.todoList = [...newTodoList];

		return true;
	}

	deleteTagAll({ selectedId }: { selectedId: string }): boolean {
		const newTodoList = [...this.todoList];
		const newIndex = newTodoList.findIndex((todo) => todo.id === selectedId);
		newTodoList[newIndex]["tag"] = [];
		this.todoList = [...newTodoList];

		return true;
	}
}


// const todoApp = new TodoApp({todoList: []});
// console.log(todoApp.todoList);
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

export default TodoApp;
