import { useMutation, useQueryClient } from "react-query";
import { updateTodo } from "../../API/updateTodo";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
};
