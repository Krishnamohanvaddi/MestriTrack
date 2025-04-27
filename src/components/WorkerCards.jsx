import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useSelector } from "react-redux";

const cards = [
  {
    id: 1,
    title: "Total Income",
    description: "50000",
  },
  {
    id: 2,
    title: "Total Wages Given",
    description: "35000",
  },
  {
    id: 3,
    title: "Pending Wages",
    description: "13000",
  },
];

function WorkerCards() {
  const [selectedCard, setSelectedCard] = React.useState(0);

    const workersList = useSelector((state) => state.workers.workersList);

    const mestriCount = workersList.filter(worker => worker.Type === 'Mestri').length;
    const labourCount = workersList.filter(worker => worker.Type === 'Labour').length;

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 15,
      }}
    >
      <Card
        sx={{
          width: 300,
          height: 100,
          background:
            "linear-gradient(to top,rgb(17, 6, 174),rgb(210, 241, 85))",
        }}
      >
        <CardActionArea
          // onClick={() => setSelectedCard(index)}
          // data-active={selectedCard === index ? '' : undefined}
          sx={{
            height: "100%",
            "&[data-active]": {
              backgroundColor: "action.selected",
              "&:hover": {
                backgroundColor: "action.selectedHover",
              },
            },
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h5" component="div">
              Total Workers
            </Typography>
            <Typography variant="h6" color="white">
            {workersList.length}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        sx={{
          width: 300,
          height: 100,
          background:
            "linear-gradient(to top,rgb(39, 20, 209),rgb(234, 121, 68))",
        }}
      >
        <CardActionArea
          // onClick={() => setSelectedCard(index)}
          // data-active={selectedCard === index ? '' : undefined}
          sx={{
            height: "100%",
            "&[data-active]": {
              backgroundColor: "action.selected",
              "&:hover": {
                backgroundColor: "action.selectedHover",
              },
            },
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h5" component="div">
              Total Mestri's
            </Typography>
            <Typography variant="h6" color="white">
            {mestriCount}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        sx={{
          width: 300,
          height: 100,
          background:
            "linear-gradient(to top,rgb(50, 16, 204),rgb(81, 231, 245))",
        }}
      >
        <CardActionArea
          // onClick={() => setSelectedCard(index)}
          // data-active={selectedCard === index ? '' : undefined}
          sx={{
            height: "100%",
            "&[data-active]": {
              backgroundColor: "action.selected",
              "&:hover": {
                backgroundColor: "action.selectedHover",
              },
            },
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h5" component="div">
              Total Labours
            </Typography>
            <Typography variant="h6" color="white">
              {labourCount}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default WorkerCards;
