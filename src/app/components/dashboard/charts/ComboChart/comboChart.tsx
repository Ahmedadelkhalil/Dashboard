import { ResponsiveBar } from "@nivo/bar";
import { comboChartData } from "@/data/charts/comboChartData";
import { useTheme } from "@mui/material/styles";
import AutoSizer from "react-virtualized-auto-sizer";
import Box from "@mui/material/Box";

const ComboChart = () => {
  const myOwnCustomtheme = useTheme();
  const theme = {
    background: myOwnCustomtheme.palette.background.paper,
    axis: {
      fontSize: "14px",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: myOwnCustomtheme.palette.text.primary,
          fontSize: "9px",
        },
      },
      legend: {
        text: {
          fill: myOwnCustomtheme.palette.text.primary,
          fontWeight: "bold",
        },
      },
    },
  };
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Box
          sx={{
            width: width,
            height: height,
          }}
        >
          <ResponsiveBar
            data={comboChartData}
            theme={theme}
            keys={["sales", "revenue"]}
            indexBy="day"
            margin={{ top: 50, right: 10, bottom: 50, left: 45 }}
            padding={0.55}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={[
              myOwnCustomtheme.palette.text.theme1,
              myOwnCustomtheme.palette.text.theme3,
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "THIS WEEKEND",
              legendPosition: "middle",
              legendOffset: 35,
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "SALES & REVENUES",
              legendPosition: "middle",
              legendOffset: -40,
              truncateTickAt: 0,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) =>
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
          />
        </Box>
      )}
    </AutoSizer>
  );
};
export default ComboChart;
