import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Header title="Operation yield: Caterpillar 44LO (ID: 5)" subtitle="Expected operation hours: 176 hours per month" />
      <Box height="75vh">
        {/* Chart */}
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
