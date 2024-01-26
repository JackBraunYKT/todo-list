import { AppBar, Container, Typography } from "@mui/material";
import React from "react";

const AppHeader: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 2,
        }}
      >
        <Typography variant="h6">EzTodoList</Typography>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
