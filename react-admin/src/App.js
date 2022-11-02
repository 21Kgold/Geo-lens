import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Machine from "./scenes/machine";
import Status from "./scenes/status";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Quote from "./scenes/quote";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Calendar from "./scenes/calendar";
import { useEffect, useState } from "react";

// Acces theme and colorMode
function App() {
  const [theme, colorMode] = useMode();


  const [allsensors, setAllsensors] = useState([]);
useEffect(() => {
  Fetchdata();
});
  function Fetchdata () {
    console.log('Fetching data..........');
    fetch("../all_sensors")
    .then(response => response.json())
    .then(data => setAllsensors(data.json()))
      console.log('Data Fetched..');
      console.log(allsensors);
    };

  return (
    // Set up color context
    <ColorModeContext.Provider value={colorMode}>
      {/* Set up access for mateerial UI to theme */}
      <ThemeProvider theme={theme}>
        {/* Reset the css to defaults */}
        <CssBaseline />
          {/* Create app class */}
          <div className="app">
            <Sidebar />
            {/* Create content class */}
            <main className="content">
              <Topbar />
              {/* Set up routes for each url page */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/machine" element={<Machine />} />
                <Route path="/status" element={<Status />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
