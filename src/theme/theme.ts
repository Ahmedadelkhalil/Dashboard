export const getDesignTokens = (mode: string) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#3c50e0",
    },
    secondary: {
      main: "#8fd0ef",
    },
    info: {
      main: "#fff",
    },
    warning: {
      main: "#6577f3",
    },
    success: {
      main: "#0fadcf",
    },
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: "#f1f5f9",
            paper: "#ffffff",
            sideBarMenu: "#000",
            icons: "#eff2f7",
            hoverBg: "#f5f5f5",
          },
          text: {
            primary: "#000",
            secondary: "rgb(100 116 139 / 1)",
            theme1: "#3c50e0",
            theme2: "#6577f3",
            theme3: "#8fd0ef",
            theme4: "#0fadcf",
            online: "rgb(16 185 129 / 1)",
            offline: "rgb(255 103 102 / 1)",
            pending: "rgb(255 186 0 / 1)",
            seen: "rgb(100 116 139 / 1)",
            greenDegree: "rgb(16 185 129 / 1 )",
            blueDegree: "rgb(37 154 230 / 1)",
            cardsBorder: "#000",
            success: "#5cb85c",
            error: "#ED4337",
          },
          divider: "#333",
        }
      : {
          // palette values for dark mode
          background: {
            default: "#1a222c",
            paper: "#24303f",
            sideBarMenu: "#24303f",
            icons: "#313d4a",
            hoverBg: "rgb(49 61 74)",
          },
          text: {
            primary: "#fff",
            secondary: "rgb(174 183 192 / 1)",
            theme1: "#3c50e0",
            theme2: "#6577f3",
            theme3: "#8fd0ef",
            theme4: "#0fadcf",
            online: "rgb(16 185 129 / 1)",
            offline: "rgb(255 103 102 / 1)",
            pending: "rgb(255 186 0 / 1)",
            seen: "rgb(100 116 139 / 1)",
            greenDegree: "rgb(16 185 129 / 1 )",
            blueDegree: "rgb(37 154 230 / 1)",
            cardsBorder: "#24303f",
            success: "#5cb85c",
            error: "#ED4337",
          },
        }),
  },
});
