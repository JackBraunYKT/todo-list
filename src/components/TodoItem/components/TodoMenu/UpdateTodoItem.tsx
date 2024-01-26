import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { ITodo } from "../../../../models/ITodo";
import { Edit } from "@mui/icons-material";
import { useTodoUpdater } from "../hooks/useTodoUpdater";
import { useUpdateTodo } from "../../../../hooks/queries/useUpdateTodo";

interface Props {
  todo: ITodo;
}

const UpdateTodoItem: React.FC<Props> = ({ todo }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const updateMutation = useUpdateTodo();
  const { values, handleChange } = useTodoUpdater(todo);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateMutation.mutate({
      ...values,
    });

    handleClose();
  };

  return (
    <>
      <MenuItem aria-label="update todo" onClick={handleOpen}>
        <ListItemIcon>
          <Edit fontSize="small" />
        </ListItemIcon>
        <ListItemText>Изменить</ListItemText>
      </MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Изменить задачу</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            multiline
            margin="dense"
            variant="outlined"
            size="small"
            label="Описание задачи"
            value={values.title}
            name="title"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Сохранить</Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateTodoItem;
