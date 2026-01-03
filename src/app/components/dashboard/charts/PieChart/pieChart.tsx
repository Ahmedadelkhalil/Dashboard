import { ResponsivePie } from "@nivo/pie";
import { pieChartData } from "@/data/charts/pieChartData";
import { useTheme } from "@mui/material/styles";
import AutoSizer from "react-virtualized-auto-sizer";
import Box from "@mui/material/Box";

const PieChart = () => {
  const theme = useTheme();
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Box
          sx={{
            width: width,
            height: height,
          }}
        >
          <ResponsivePie
            data={pieChartData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={[
              theme.palette.text.theme4,
              theme.palette.text.theme1,
              theme.palette.text.theme3,
              theme.palette.text.theme2,
            ]}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={theme.palette.text.primary}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
          />
        </Box>
      )}
    </AutoSizer>
  );
};

export default PieChart;
