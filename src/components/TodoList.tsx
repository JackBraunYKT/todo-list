import React from "react";
import { Stack } from "@mui/material";
import { ITodo } from "../models/ITodo";
import { TodoItem } from "./TodoItem";
import { useFetchTodos } from "../hooks/queries/useFetchTodos";

const TodoList: React.FC = () => {
  const [filterCompleted, setFilterCompleted] = React.useState<boolean>(false);
  const { data, isLoading, error } = useFetchTodos({
    filter: { completed: filterCompleted },
  });

  if (isLoading) {
    return <h3>Загрузка данных</h3>;
  }

  if (error instanceof Error) {
    return <h3>Ошибка при получении данных</h3>;
  }

  return (
    <Stack spacing={1}>
      {data &&
        data.map((todo: ITodo) => <TodoItem key={todo.id} todo={todo} />)}
    </Stack>
  );
};

export default TodoList;
