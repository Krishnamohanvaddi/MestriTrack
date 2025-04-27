import React from "react";
import SideNav from "../components/SideNav";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import WorkerCards from "../components/WorkerCards";
import WorkerTable from "../components/WorkerTable";
import { Button } from "@mui/material";
import NewWorker from "../components/NewWorker";

const Workers = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          background:
            "linear-gradient(to top,rgb(3, 130, 155),rgb(203, 238, 254))",
        }}
      >
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
          <WorkerCards />
        
          <WorkerTable />
        </Box>
      </Box>
    </>
  );
};

export default Workers;
