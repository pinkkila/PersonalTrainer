import { useState, useEffect } from "react";
import { fetchTrainings } from "../apicalls";

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import dayjs from "dayjs";

const Traininglist = () => {
    const [trainings, setTrainings] = useState([]);
    const [colDef] = useState([
        { headerName: 'date', valueGetter: p => dayjs(p.data.date).format('DD.MM.YYYY HH:mm'), filter: true },
        { field: 'duration', filter: true },
        { field: 'activity', filter: true },
        { headerName: 'Customer', valueGetter: p => p.data.customer.firstname + ' ' + p.data.customer.lastname, filter: true },
    ]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        fetchTrainings()
            .then(data => setTrainings(data))
            .catch(err => console.error(err));
    };

    return (
        <>
            <div className="ag-theme-material" style={{ height: 600 }}>
                <AgGridReact
                    rowData={trainings}
                    columnDefs={colDef}
                    pagination={true}
                    paginationAutoPageSize={true}
                    suppressCellFocus={true}
                />
            </div>
        </>
    );
};

export default Traininglist;