"use client";
// CSS
import "./globals.css";
// Layout Components
import Header from "./components/header/header";
import SidebarMenu from "./components/sidebarMenu/sidebarMenu";
import ThemeHOC from "@/hooks/themeHOC";
import AutoScroll2Top from "@/global/autoScroll2Top/autoScroll2Top";
import GoUpBtn from "@/global/goUpBtn/goUpBtn";
// Redux Toolkit
import { Provider } from "react-redux";
import store from "@/Redux/store";
// Mui Components
import Box from "@mui/material/Box";

declare module "@mui/material/styles" {
  interface TypeText {
    theme1: string;
    theme2: string;
    theme3: string;
    theme4: string;
    online: string;
    offline: string;
    pending: string;
    seen: string;
    greenDegree: string;
    blueDegree: string;
    cardsBorder: string;
    success: string;
    error: string;
  }
  interface TypeBackground {
    default: string;
    paper: string;
    sideBarMenu: string;
    icons: string;
    hoverBg: string;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <ThemeHOC>
            <Box
              sx={{
                "@media (min-width: 1024px)": {
                  display: "flex",
                },
              }}
            >
              <Box>
                <SidebarMenu />
              </Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Header />
                {children}
                <AutoScroll2Top />
                <GoUpBtn />
              </Box>
            </Box>
          </ThemeHOC>
        </body>
      </html>
    </Provider>
  );
}
