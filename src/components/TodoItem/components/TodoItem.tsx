import React from "react";
import { ITodo } from "../../../models/ITodo";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import { MorePopover } from "../../../UI";
import TodoMenu from "./TodoMenu";
import { useTodoUpdater } from "./hooks/useTodoUpdater";

interface Props {
  todo: ITodo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { handleToggleStatus } = useTodoUpdater(todo);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <Checkbox
          edge="start"
          name="completed"
          checked={todo.completed}
          onChange={handleToggleStatus}
        />
        <Typography
          variant="h3"
          sx={{
            fontSize: 14,
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
        </Typography>
      </CardContent>
      <CardActions>
        <MorePopover>
          <TodoMenu todo={todo} />
        </MorePopover>
      </CardActions>
    </Card>
  );
};
