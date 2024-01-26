import { UseQueryOptions, useQuery } from "react-query";
import { fetchTodos } from "../../API/fetchTodos";
import { ITodo } from "../../models/ITodo";
import { AxiosError } from "axios";

interface fetchOption {
  filter?: { completed?: boolean };
  sortBy?: keyof ITodo;
}

export const useFetchTodos = (
  { filter, sortBy }: fetchOption = {},
  options?: UseQueryOptions<ITodo[], AxiosError | Error>
) => {
  return useQuery<ITodo[], AxiosError | Error>(
    ["todos", { filter, sortBy }],
    () => fetchTodos(filter, sortBy),
    { ...options }
  );
};
