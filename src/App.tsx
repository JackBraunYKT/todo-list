import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import TodoList from "./components/TodoList";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./UI";
import CreateTodo from "./components/CreateTodo";
import AppHeader from "./components/AppHeader";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <Container sx={{ marginTop: 10, marginBottom: 2 }} maxWidth="sm">
          <CreateTodo />
          <TodoList />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
