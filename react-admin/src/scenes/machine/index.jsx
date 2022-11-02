import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMachine } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material"; 

// Create Machine component
const Machine = () => {
    // Allow access to css settings
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // Create table columns fields
    const columns = [
        { field: "id", headerName: "ID", flex: 0.25 },
        { field: "make", headerName: "Manufacturer", flex: 0.5},
        { 
            field: "model",
            headerName: "Model",
            flex: 0.5,
            // Create name-column--cell class
            cellClassName: "name-column--cell",
        },
        {
            field: "year",
            headerName: "Year",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "type",
            headerName: "Type",
            flex: 1,
        },
       {
            field: "maintenance",
            headerName: "Maintenance hours",
            flex: 0.50
       },
       {
            field: "capacity",
            headerName: "Capacity Gallons",
            flex: 0.5
       },
       {
            field: "description",
            headerName: "Description",
            flex: 1,
       },
    ];

    return (
        <Box m="20px">
            {/* Header */}
            <Header 
                title="SPECIFICATIONS" 
                subtitle="List of manufacturer specifications" 
            />
            <Box 
                m="40px 0 0 0" 
                height="75vh"
                // Overwrite Datagrid default css properties
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        fontSize: "18px",
                    },
                    // Customize name-column--cell class
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                        fontSize: "14px"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !Important`
                    },
                    "& .MuiDataGrid-toolarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !Important`
                    },
                }}
            >
                {/* Retrieve data to feed table and set GridToolbar option */}
                <DataGrid
                    rows={mockDataMachine} 
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Machine;
