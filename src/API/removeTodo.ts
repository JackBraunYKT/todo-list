import axios from "axios";

export const removeTodo = (id: string) => {
  return axios
    .delete(`${import.meta.env.VITE_API_URL}/${id}`)
    .then((res) => res.data);
};
