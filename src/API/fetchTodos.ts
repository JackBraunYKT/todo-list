import axios from "axios";
import { ITodo } from "../models/ITodo";

export const fetchTodos = async (
  filter?: { completed?: boolean },
  sortBy?: keyof ITodo
): Promise<ITodo[]> => {
  const { data } = await axios.get(import.meta.env.VITE_API_URL);

  if (!filter?.completed) {
    return data.filter((todo: ITodo) => !todo.completed);
  }

  if (sortBy) {
    data.sort((a: ITodo, b: ITodo) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  }

  return data;
};
