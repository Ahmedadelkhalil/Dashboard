import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "@/Redux/store";
// Mui
import CssBaseline from "@mui/material/CssBaseline";
// theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "@/theme/theme";

const ThemeHOC = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");
  const isDarkMode = useSelector((state: IRootState) => state.theme.darkMode);
  useMemo(() => {
    if (isDarkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDarkMode]);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default ThemeHOC;
