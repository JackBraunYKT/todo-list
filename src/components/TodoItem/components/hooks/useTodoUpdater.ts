import { useUpdateTodo } from "../../../../hooks/queries/useUpdateTodo";
import { ITodo } from "../../../../models/ITodo";
import React from "react";

export const useTodoUpdater = (todo: ITodo) => {
  const [values, setValues] = React.useState(todo);
  const updateMutation = useUpdateTodo();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleToggleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateMutation.mutate({
      ...todo,
      completed: event.target.checked,
    });
  };

  return { values, handleChange, handleToggleStatus };
};
