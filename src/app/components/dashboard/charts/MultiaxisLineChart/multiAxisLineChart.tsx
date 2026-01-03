import { ResponsiveLine } from "@nivo/line";
import { multiAxisChartData } from "@/data/charts/multiAxisChartData";
import { useTheme } from "@mui/material/styles";
import AutoSizer from "react-virtualized-auto-sizer";
import Box from "@mui/material/Box";

const MultiAxisLineChart = () => {
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
          fontSize: "11px",
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
          <ResponsiveLine
            colors={[
              myOwnCustomtheme.palette.text.theme1,
              myOwnCustomtheme.palette.text.theme3,
            ]}
            enableGridX={false}
            data={multiAxisChartData}
            theme={theme}
            margin={{ top: 50, right: 30, bottom: 50, left: 50 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "RATE FOR EACH MONTH",
              legendOffset: 38,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "SALES & REVENUES",
              legendOffset: -44,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
          />
        </Box>
      )}
    </AutoSizer>
  );
};

export default MultiAxisLineChart;
