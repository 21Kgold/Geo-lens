import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataStatus } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material"; 

// Create Status component
const Status = () => {
    // Allow access to css settings
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // Set up table fields
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
            field: "yield",
            headerName: "Expected Hours yield",
            type: "number",
            headerAlign: "left",
            align: "left",
            flex: 0.5
        },
       {
            field: "project",
            headerName: "Project name",
            flex: 1,
       },
       {
            field: "manager",
            headerName: "Project manager",
            flex: 1,
       },
       {
            field: "operator",
            headerName: "Machine operator",
            flex: 1,
       },
       {
        field: "status",
        headerName: "Machine status",
        flex: 1,
    },
    ];

    return (
        <Box m="20px">
            {/* Header */}
            <Header 
                title="MACHINERY" 
                subtitle="Machine current status details" 
            />
            <Box 
                m="40px 0 0 0" 
                height="75vh"
                // Overwrite default DataGrid library css properties
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        fontSize: "18px"
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
                {/* Table data */}
                <DataGrid
                    rows={mockDataStatus} 
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Status;
