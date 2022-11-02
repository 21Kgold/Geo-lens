import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    // Allow access to theme, tokens and ColorModeContext css elements
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        // External component
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search bar, not functional element */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search machine" />
                <IconButton type="button" sx={{ p: 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* Icons buttons */}
            <Box display="flex">
                {/* button for mode change on click */}
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>                
                <IconButton>
                </IconButton>
                <IconButton>
                </IconButton>
            </Box>

        </Box>
    );
};

export default Topbar;
