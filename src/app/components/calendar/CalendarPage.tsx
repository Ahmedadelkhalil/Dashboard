"use client";
import React, { useState, useEffect } from "react";
// import mui components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import fullCalendar components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import section header
import SectionHeader from "@/global/section_header/sectionHeader";

const CalendarPage = () => {
  const theme = useTheme();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const [showCalendar, setShowCalendar] = useState(false);
  useEffect(() => {
    setShowCalendar(true);
  }, []);
  return (
    showCalendar && (
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
        <Container maxWidth="xl">
          <SectionHeader currentPage="Calendar" />
          <FullCalendar
            plugins={[dayGridPlugin]}
            headerToolbar={{
              left: "title",
              center: "",
              right: "",
            }}
            initialView="dayGridMonth"
            nowIndicator={true}
            editable={true}
            selectable={true}
            selectMirror={true}
            eventInteractive={true}
            initialEvents={[
              {
                title: "Interview Event",
                start: new Date(),
                resourceId: "Event One",
              },
            ]}
            eventColor="red"
            height="800px"
          />
        </Container>
      </Box>
    )
  );
};

export default CalendarPage;
