import React from "react";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useRemoveTodo } from "../../../../hooks/queries/useRemoveTodo";

interface Props {
  id: string;
}

const RemoveTodoItem: React.FC<Props> = ({ id }) => {
  const remove = useRemoveTodo();

  return (
    <MenuItem aria-label="delete todo" onClick={() => remove.mutate(id)}>
      <ListItemIcon>
        <Delete fontSize="small" />
      </ListItemIcon>
      <ListItemText>Удалить</ListItemText>
    </MenuItem>
  );
};

export default RemoveTodoItem;
