import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Customerlist from './components/Customerlist.jsx';
import Traininglist from './components/Trainingslist.jsx';
import ErrorComponent from './components/ErrorComponent.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorComponent />,
        children: [
            {
                element: <Customerlist />,
                index: true
            },
            {
                path: "trainings",
                element: <Traininglist />
            }
        ]
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
