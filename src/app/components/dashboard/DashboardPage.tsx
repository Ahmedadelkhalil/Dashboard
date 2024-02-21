"use client";
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Theme, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Dashboard Page Components
import DashboardCards from "./cards/dashboardCards";
import HeaderInfoCompoChart from "./charts/ComboChart/headerInfo";
import ComboChart from "./charts/ComboChart/comboChart";
import HeaderInfoMultiAxisChart from "./charts/MultiaxisLineChart/headerInfo";
import MultiAxisLineChart from "./charts/MultiaxisLineChart/multiAxisLineChart";
import HeaderInfoPieChart from "./charts/PieChart/headerInfoPieChart";
import PieChart from "./charts/PieChart/pieChart";
import HeaderInfoGeo from "./charts/GeoChart/headerInfoGeo";
import GeoChart from "./charts/GeoChart/geoChart";
import TopChannels from "./top channels/topChannels";
import Chats from "./chats/chats";

// styling
const Chart = styled(Paper)(({ theme }) => ({
  width: "100%",
  padding: 10,
  boxSizing: "border-box",
  color: "#000",
  [theme.breakpoints.up("xs")]: {
    height: "320px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "400px",
  },
}));

const BottomBlocks = styled(Paper)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.up("sm")]: {
    height: "460px",
  },
}));

const DashboardPage = () => {
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const theme: Theme = useTheme();
  const [showDashboard, setShowDashboard] = useState(false);
  useEffect(() => {
    setShowDashboard(true);
  }, []);
  return (
    <>
      {showDashboard && (
        <Box
          sx={{
            ml: extraSmallDev ? 0 : "56px",
            [theme.breakpoints.up("sm")]: {
              ml: extraSmallDev ? 0 : "64px",
            },
            "@media (min-width: 1024px)": {
              ml: 0,
            },
            py: "60px",
            backgroundColor: "background.default",
            minHeight: "100vh",
            color: "text.primary",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DashboardCards />
            <Grid container spacing={2}>
              <Grid item xs={12} lg={8}>
                <HeaderInfoMultiAxisChart />
                <Chart>
                  <MultiAxisLineChart />
                </Chart>
              </Grid>
              <Grid item xs={12} lg={4}>
                <HeaderInfoCompoChart />
                <Chart>
                  <ComboChart />
                </Chart>
              </Grid>
              <Grid item xs={12} lg={5}>
                <HeaderInfoPieChart />
                <Chart>
                  <PieChart />
                </Chart>
              </Grid>
              <Grid item xs={12} lg={7}>
                <HeaderInfoGeo />
                <Chart>
                  <GeoChart />
                </Chart>
              </Grid>
              <Grid item xs={12} lg={7}>
                <BottomBlocks>
                  <TopChannels />
                </BottomBlocks>
              </Grid>
              <Grid item xs={12} lg={5}>
                <BottomBlocks>
                  <Chats />
                </BottomBlocks>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default DashboardPage;
