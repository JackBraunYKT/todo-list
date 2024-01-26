import { useMutation, useQueryClient } from "react-query";
import { removeTodo } from "../../API/removeTodo";

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};
