import { MenuList } from "@mui/material";
import React from "react";
import DeleteTodoItem from "./DeleteTodoItem";
import UpdateTodoItem from "./UpdateTodoItem";
import { ITodo } from "../../../../models/ITodo";

interface Props {
  todo: ITodo;
}

const TodoMenu: React.FC<Props> = ({ todo }) => {
  return (
    <MenuList>
      <UpdateTodoItem todo={todo} />
      <DeleteTodoItem id={todo.id} />
    </MenuList>
  );
};

export default TodoMenu;
