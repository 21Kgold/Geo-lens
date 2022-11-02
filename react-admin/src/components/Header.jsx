import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

// Create styled title and subtitle variables, that will be used in all pages
const Header = ({ title, subtitle}) => {
    // Allow access to css settings
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box mb="30px">
            <Typography 
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
