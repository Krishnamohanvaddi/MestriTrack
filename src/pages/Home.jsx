import React from "react";
import SideNav from "../components/SideNav";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import BarGraph from "../components/BarGraph";
import PieGraph from "../components/PieGraph";
import HomeTable from "../components/HomeTable";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex",background: 'linear-gradient(to top,rgb(3, 130, 155),rgb(203, 238, 254))',
 }}>
        <SideNav />
        <Box
          component="main"
          sx={{ flexGrow: 1, p:3,mt:10}}
        >
          <Cards />
          {/* Graph Section */}
          <Box
            sx={{
              display: "flex",
              gap: 4, // gap between graphs
              mt: 10, // margin top after cards
              
            }}
          >
            <Box sx={{ flex: 1,border:2 }}>
              <BarGraph />
            </Box>
            <Box sx={{ flex: 1 ,border:2}}>
                <Box sx={{mt:5}}><PieGraph/></Box>
              
            </Box>
          </Box>


          <HomeTable/>
        </Box>
      </Box>
    </>
  );
};
export default Home;
