import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

// Brands
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  sourceName: string,
  sourceImg: JSX.Element,
  sourceImgBgColor: string,
  visitors: number,
  revenues: number,
  sales: number,
  conversion: number
) {
  return {
    sourceName,
    sourceImg,
    sourceImgBgColor,
    visitors,
    revenues,
    sales,
    conversion,
  };
}

const rows = [
  createData(
    "Google",
    <GoogleIcon fontSize="large" />,
    "#FD1D1D",
    3.5,
    5.768,
    590,
    4.8
  ),
  createData("X", <XIcon fontSize="large" />, "#000000", 2.2, 4.635, 467, 4.3),
  createData(
    "Github",
    <GitHubIcon fontSize="large" />,
    "#fbbc05",
    2.1,
    4.29,
    420,
    3.7
  ),
  createData(
    "Instagram",
    <InstagramIcon fontSize="large" />,
    "#E1306C",
    1.5,
    3.58,
    389,
    2.5
  ),
  createData(
    "Facebook",
    <FacebookIcon fontSize="large" />,
    "#4285f4",
    1.2,
    2.74,
    230,
    1.9
  ),
];

const TopChannels = () => {
  const theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{
        height: "100%",
      }}
    >
      <Table
        sx={{
          minWidth: 700,

          height: "100%",
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{
                fontFamily: "Syne",
                fontWeight: "700",
              }}
            >
              SOURCE
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{
                fontFamily: "Syne",
                fontWeight: "700",
              }}
            >
              VISITORS
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{
                fontFamily: "Syne",
                fontWeight: "700",
              }}
            >
              REVENUES
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{
                fontFamily: "Syne",
                fontWeight: "700",
              }}
            >
              SALES
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{
                fontFamily: "Syne",
                fontWeight: "700",
              }}
            >
              CONVERSION
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, indx) => (
            <StyledTableRow key={indx}>
              <StyledTableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "Syne",
                  fontWeight: "700",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      color: row.sourceImgBgColor,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {row.sourceImg}
                  </Box>
                  <Box>{row.sourceName}</Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{
                  fontFamily: "Oswald",
                  letterSpacing: 1.5,
                }}
              >
                {`${row.visitors}K`}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{
                  fontFamily: "Oswald",
                  letterSpacing: 1.5,
                  color: theme.palette.text.greenDegree,
                }}
              >{`$${row.revenues}`}</StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{
                  fontFamily: "Oswald",
                  letterSpacing: 1.5,
                }}
              >
                {row.sales}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{
                  fontFamily: "Oswald",
                  letterSpacing: 1.5,
                  color: theme.palette.text.blueDegree,
                }}
              >{`${row.conversion}%`}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopChannels;
