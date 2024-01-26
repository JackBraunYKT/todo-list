import { Add } from "@mui/icons-material";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useCreateTodo } from "../hooks/queries/useCreateTodo";

const CreateTodo: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const createMutation = useCreateTodo();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createMutation.mutate(title);
    setTitle("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} marginBottom={2}>
      <Stack direction="row" spacing={1}>
        <TextField
          required
          value={title}
          onChange={handleChangeTitle}
          name="title"
          id="title"
          label="Задача..."
          fullWidth
        />
        <Button
          aria-label="Create todo"
          type="submit"
          variant="contained"
          sx={{ borderRadius: "15px" }}
        >
          <Add fontSize="large" />
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTodo;
