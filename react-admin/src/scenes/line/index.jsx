import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Header title="Fuel consumption: Caterpillar 44LO (ID: 5)" subtitle="Last week Fuel consumption" />
      <Box height="75vh">
        {/* Chart */}
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
