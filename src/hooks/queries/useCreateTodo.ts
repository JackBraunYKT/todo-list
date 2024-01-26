import { useMutation, useQueryClient } from "react-query";
import { createTodo } from "../../API/createTodo";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
