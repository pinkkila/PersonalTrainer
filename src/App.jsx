import { Link, Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

    return (
        <>
            <Container maxWidth="xl">
                <CssBaseline />
                <nav>
                    <Link to={"/"}>Customers</Link>
                    <Link to={"/trainings"}>Trainings</Link>
                </nav>
                <Outlet />
            </Container>
        </>
    );
}

export default App;
