import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import { geoChartFeatures } from "@/data/charts/geoChartFeatures";
import { geoChartData } from "@/data/charts/geoChartData";
import AutoSizer from "react-virtualized-auto-sizer";
import Box from "@mui/material/Box";

const GeoChart = () => {
  const myOwnCustomtheme = useTheme();
  const theme = {
    background: myOwnCustomtheme.palette.background.paper,
    axis: {
      domain: {
        line: {
          stroke: myOwnCustomtheme.palette.text.primary,
        },
      },
      legend: {
        text: {
          fill: myOwnCustomtheme.palette.text.primary,
        },
      },
      ticks: {
        line: {
          stroke: myOwnCustomtheme.palette.text.primary,
          strokeWidth: 1,
        },
        text: {
          fill: myOwnCustomtheme.palette.text.primary,
        },
      },
    },
    legends: {
      text: {
        fill: myOwnCustomtheme.palette.text.primary,
      },
    },
    tooltip: {
      container: {
        background: myOwnCustomtheme.palette.background.paper,
        color: myOwnCustomtheme.palette.text.primary,
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
          <ResponsiveChoropleth
            theme={theme}
            data={geoChartData}
            features={geoChartFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors={[
              myOwnCustomtheme.palette.text.theme2,
              myOwnCustomtheme.palette.text.theme1,
              myOwnCustomtheme.palette.text.theme3,
              myOwnCustomtheme.palette.text.theme4,
            ]}
            domain={[0, 1000000]}
            unknownColor={myOwnCustomtheme.palette.text.greenDegree}
            label="properties.name"
            valueFormat=".2s"
            projectionScale={100}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={false}
            graticuleLineColor="#444444"
            borderWidth={0.5}
            borderColor="#fff"
          />
        </Box>
      )}
    </AutoSizer>
  );
};

export default GeoChart;
