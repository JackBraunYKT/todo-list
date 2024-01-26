import React from "react";
import { IObjective } from "../../models/IObjective";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { CircularProgressWithLabel } from "../../UI";
import { getSlicedText } from "./helpers/getSlicedText";
import { CheckCircleOutline } from "@mui/icons-material";
import { generateTaskLabel } from "./helpers/generateTaskLabel";
import { getCompletedTodoPercent } from "./helpers/getCompletedTodoPercent";

interface Props {
  objective: IObjective;
}

const ObjectiveItem: React.FC<Props> = ({ objective }) => {
  const taskCountLabel = generateTaskLabel(data.length);
  const progressValue = getCompletedTodoPercent(data);

  const objectiveTitle = (
    <Typography gutterBottom variant="h3">
      {objective.title}
    </Typography>
  );

  const objectiveShortDescription = (
    <Typography gutterBottom variant="body1" color="text.secondary">
      {getSlicedText(objective.description)}
    </Typography>
  );

  const taskCount = (
    <Stack direction="row" spacing={0.5} alignItems="center">
      <CheckCircleOutline fontSize="small" />
      <Typography sx={{ fontWeight: 600 }}>{taskCountLabel}</Typography>
    </Stack>
  );

  return (
    <Card>
      <CardActionArea onClick={() => setOpen(true)}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Box>
              {objectiveTitle}
              {objectiveShortDescription}
              {taskCount}
            </Box>
            <CircularProgressWithLabel value={progressValue} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ObjectiveItem;
