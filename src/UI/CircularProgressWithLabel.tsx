import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";
import React from "react";

interface Props extends CircularProgressProps {
  value: number;
}

export const CircularProgressWithLabel: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size="50px"
        thickness={5}
        sx={{
          position: "absolute",
          left: 0,
          color: "lightgray",
        }}
      />
      <CircularProgress
        {...props}
        variant="determinate"
        size="50px"
        thickness={5}
        sx={{
          strokeLinecap: "round",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" sx={{ fontWeight: 600 }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};
