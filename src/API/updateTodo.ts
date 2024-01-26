import axios from "axios";
import { ITodo } from "../models/ITodo";

export const updateTodo = (todo: ITodo) => {
  return axios
    .put(`${import.meta.env.VITE_API_URL}/${todo.id}`, {
      ...todo,
    })
    .then((res) => res.data);
};
