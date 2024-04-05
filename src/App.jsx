import { Link, Outlet } from 'react-router-dom';

function App() {

    return (
        <>
            <div className='App'>
                <nav>
                    <Link to={"/"}>Customers</Link>
                    <Link to={"/trainings"}>Trainings</Link>
                </nav>
                <Outlet />
            </div>
        </>
    );
}

export default App;
