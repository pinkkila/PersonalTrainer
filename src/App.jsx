import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import NavigationElement from './components/NavigationElement';

function App() {

    return (
        <>
            <Container maxWidth={false} sx={{width: "90%"}}>
                <CssBaseline />
                <AppBar position='static'>
                    <Toolbar>
                        <NavigationElement />
                        <Typography variant='h4'>
                            Personal Trainer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Outlet />
            </Container>
        </>
    );
}

export default App;
