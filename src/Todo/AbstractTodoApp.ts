export default abstract class AbstractTodoApp {

	abstract create({ newTodo }: { newTodo: Todo }): Todo;

	abstract readAll(): Todo[];

	abstract readById({ selectedId }: { selectedId: string }): Todo;

	abstract updateById({
		selectedId,
		key,
		value,
	}: {
		selectedId: string;
		key: string;
		value: string;
	}): Todo;

	abstract updateTagById({
		selectedId,
		oldTag,
		newTag,
	}: {
		selectedId: string;
		oldTag: string;
		newTag: string;
	}): Todo;

	abstract deleteAll(): boolean;

	abstract deleteById({ selectedId }: { selectedId: string }): boolean;

	abstract deleteTag({
		selectedId,
		oldTag,
	}: {
		selectedId: string;
		oldTag: string;
	}): boolean;

	abstract deleteTagAll({ selectedId }: { selectedId: string }): boolean;
}
