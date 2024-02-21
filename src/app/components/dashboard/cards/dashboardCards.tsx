import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// icons
import SvgIcon from "@mui/material/SvgIcon";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
// card types
import { DashboardCardsTypes } from "@/types/dashboardTypes";

// Cards Info
const cardsInfo: DashboardCardsTypes = [
  {
    icon: <RemoveRedEyeOutlinedIcon />,
    amount: "$3.456K",
    totalCategory: "views",
    rate: 0.43,
    arrowIcon: <ArrowUpwardOutlinedIcon />,
    arrowDir: "up",
  },
  {
    icon: <ShoppingCartOutlinedIcon />,
    amount: "$45,2K",
    totalCategory: "Profit",
    rate: 4.35,
    arrowIcon: <ArrowUpwardOutlinedIcon />,
    arrowDir: "up",
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
    amount: "2.450",
    totalCategory: "Product",
    rate: 2.59,
    arrowIcon: <ArrowUpwardOutlinedIcon />,
    arrowDir: "up",
  },
  {
    icon: <PeopleOutlineIcon />,
    amount: "3.456",
    totalCategory: "Users",
    rate: 0.95,
    arrowIcon: <ArrowDownwardOutlinedIcon />,
    arrowDir: "down",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.text.cardsBorder}`,
  padding: 20,
  boxSizing: "border-box",
}));

const DashboardCards = () => {
  return (
    <Box sx={{ width: "100%", m: 3 }}>
      <Grid container spacing={1.5}>
        {cardsInfo.map((card) => (
          <>
            <Grid item xs={12} sm={6} lg={3}>
              <Item>
                <Typography
                  variant="subtitle2"
                  sx={{
                    bgcolor: "background.icons",
                    width: "fit-content",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    p: 1,
                    mb: 2,
                  }}
                >
                  {card.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Oswald",
                    fontWeight: "600",
                    color: "text.primary",
                  }}
                >
                  {card.amount}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary" }}
                    fontSize="small"
                  >{`Total ${card.totalCategory}`}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color:
                        card.arrowDir === "up"
                          ? "text.greenDegree"
                          : "text.blueDegree",
                    }}
                  >
                    <Typography variant="subtitle2">{`${card.rate}%`}</Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        ml: 1,
                        bgcolor: "background.icons",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        p: "3px",
                      }}
                    >
                      <SvgIcon fontSize="small">{card.arrowIcon}</SvgIcon>
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardCards;
