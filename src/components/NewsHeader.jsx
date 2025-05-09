import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const StyledSelect = styled(Select)(({ theme }) => ({
    color: theme.palette.action,
    backgroundColor: theme.palette.common.white,
    "&:before": {
        borderColor: theme.palette.action,
    },
    "&:after": {
        borderColor: theme.palette.action,
    },
    "& .MuiSelect-icon": {
        color: theme.palette.action,
    },
    margin: theme.spacing(2),
    width: 200,
    height: 40,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
        backgroundColor: theme.palette.common.white,
    },
    marginLeft: "auto",
    width: 200,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.primary,
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 5),
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));

function NewsHeader({ onSearch, onCategoryChange }) {
    const [category, setCategory] = useState("general");
    function handleInputChange(e) {
        onSearch(e.target.value);
    }

    function handleCategoryChange(e) {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory)
        console.log(selectedCategory)
        onCategoryChange(selectedCategory)
    }

    return (
        <AppBar position="static">
            <Toolbar >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NewsFeed App
                </Typography>

                <StyledSelect value={category} onChange={handleCategoryChange}>
                    <StyledMenuItem value="general">General</StyledMenuItem>
                    <StyledMenuItem value="business">Business</StyledMenuItem>
                    <StyledMenuItem value="entertainment">Entertainment</StyledMenuItem>
                    <StyledMenuItem value="health">Health</StyledMenuItem>
                    <StyledMenuItem value="science">Science</StyledMenuItem>
                    <StyledMenuItem value="sports">Sports</StyledMenuItem>
                    <StyledMenuItem value="technology">Technology</StyledMenuItem>
                </StyledSelect>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon color="action" />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        onChange={handleInputChange}
                    />
                </Search>

            </Toolbar>
        </AppBar>
    );
}

export default NewsHeader;