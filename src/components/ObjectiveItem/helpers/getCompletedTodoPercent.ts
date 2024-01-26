import { ITodo } from "../../../models/ITodo";

export const getCompletedTodoPercent = (todos: ITodo[]): number => {
  const completedTodoCount = todos.filter((todo) => todo.completed).length;
  return Math.round((completedTodoCount / todos.length) * 100);
};
