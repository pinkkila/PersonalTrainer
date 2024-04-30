import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {

    return (
        <>
            <Container maxWidth="xl">
                <CssBaseline />
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h4'>
                            Personal Trainer
                        </Typography>
                        {/* <Button variant='outlined' sx={{ color: "white", borderColor: "white", position: "absolute", right:"5%" }} onClick={logOut}>Log out</Button> */}
                    </Toolbar>
                </AppBar>


                <nav>
                    <Link to={"/"}>Customers</Link>
                    <Link to={"/trainings"}>Trainings</Link>
                    <Link to={"/calendar"}>Calendar</Link>
                    <Link to={"charts"}>Charts</Link>
                </nav>
                <Outlet />
            </Container>
        </>
    );
}

export default App;
