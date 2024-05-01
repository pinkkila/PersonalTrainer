import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hamburger from './components/Hamburger';
import NavigationBtn from './components/NavigationBtn'
import NavigationElement from './components/NavigationElement';

function App() {

    return (
        <>
            <Container maxWidth="xl">
                <CssBaseline />
                <AppBar position='static'>
                    <Toolbar>

                        {/* <IconButton edge="start" size="large" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton> */}

                        {/* <Hamburger /> */}

                        {/* <NavigationBtn /> */}

                        <NavigationElement />

                        <Typography variant='h4'>
                            Personal Trainer
                        </Typography>
                    </Toolbar>
                </AppBar>


                {/* <nav>
                    <Link to={"/"}>Customers</Link>
                    <Link to={"/trainings"}>Trainings</Link>
                    <Link to={"/calendar"}>Calendar</Link>
                    <Link to={"charts"}>Charts</Link>
                </nav> */}
                <Outlet />
            </Container>
        </>
    );
}

export default App;
