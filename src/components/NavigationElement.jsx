import { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

const NavigationElemt = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                edge="start"
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>
                    <Link to={"/"} style={{ color: "#424242", textDecoration: "none" }}>Customers</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/trainings"} style={{ color: "#424242", textDecoration: "none" }}>Trainings</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/calendar"} style={{ color: "#424242", textDecoration: "none" }}>Calendar</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/charts"} style={{ color: "#424242", textDecoration: "none" }}>Charts</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/pie"} style={{ color: "#424242", textDecoration: "none" }}>Piedesdi</Link>
                </MenuItem>
            </Menu>
        </>
    );
};

export default NavigationElemt;