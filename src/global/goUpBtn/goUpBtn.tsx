"use client";
import { useEffect, useState } from "react";
// Mui Components
import { Theme, useTheme } from "@mui/material/styles";
// Icons
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const GoUpBtn = () => {
  const theme: Theme = useTheme();
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [showBtnOnPage, setShowBtnOnPage] = useState(false);
  useEffect(() => {
    setShowBtnOnPage(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showBtnOnPage && (
        <button
          style={{
            width: "35px",
            height: "35px",
            position: "fixed",
            bottom: "15px",
            right: "15px",
            backgroundColor: theme.palette.text.theme1,
            color: "#fff",
            border: 0,
            outline: 0,
            borderRadius: "4px",
            cursor: "pointer",
            transition: "transform 0.5s ease",
            transform: showBtn ? "translateX(0)" : "translateX(150%)",
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default GoUpBtn;
