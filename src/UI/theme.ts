import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h3: {
      fontSize: 18,
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          textAlign: "start",
          border: "1px solid black",
          borderRadius: "15px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
    },
  },
});
