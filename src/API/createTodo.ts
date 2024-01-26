import axios from "axios";

export const createTodo = (title: string) => {
  return axios
    .post(import.meta.env.VITE_API_URL, {
      title,
      completed: false,
    })
    .then((res) => res.data);
};
