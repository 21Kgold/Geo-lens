import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

// Create BarChart shareable component
const BarChart = ({ isDashboard = false }) => {
  // Include css settings
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    // Chart code from nivo
    <ResponsiveBar
    data={data} // Feed data to the chart
    // theme object customize the chart
    theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
    keys={[
        'Inactive',
        'Maintenance',
        'Operation',
        'Emergency repair'
    ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '1.6'
            ]
        ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // When used outside dashboard, remove leyend
        legend: isDashboard ? undefined : 'Month',
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // When used outside dashboard, remove leyend
        legend: isDashboard ? undefined : 'Machine Status',
        legendPosition: 'middle',
        legendOffset: -40
    }}
    labelSkipWidth={18}
    labelSkipHeight={10}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                '1.3'
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 97,
            translateY: 29,
            itemsSpacing: 2,
            itemWidth: 98,
            itemHeight: 41,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 26,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    role="application"
    isFocusable={true}
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
  );
};

export default BarChart;
