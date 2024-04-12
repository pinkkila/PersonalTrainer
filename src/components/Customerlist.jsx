import { useState, useEffect } from "react";
import { fetchCustomers, fetchAddCustomer, fetchDeleteCustomer } from "../apicalls";

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";

const Customerlist = () => {
    const [customers, setCustomers] = useState([]);
    const [colDef] = useState([
        { field: 'firstname', filter: true },
        { field: 'lastname', filter: true },
        { field: 'streetaddress', filter: true },
        { field: 'postcode', filter: true },
        { field: 'city', filter: true },
        { field: 'email', filter: true },
        { field: 'phone', filter: true },
        {
            cellRenderer: params => <EditCustomer data={params.data} updateCustomer={updateCustomer} />,
            width: 120
        },
        {
            cellRenderer: params =>
                <Button size="small" color="error" onClick={() => deleteCustomer(params.data._links.customer.href)}>
                    Delete
                </Button>
            , width: 120
        }
    ]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        fetchCustomers()
            .then(data => setCustomers(data._embedded.customers))
            .catch(err => console.error(err));
    };

    const addCustomer = (newCustomer) => {
        fetchAddCustomer(newCustomer)
            .then(() => handleFetch())
            .catch(err => console.error(err));
    };

    const deleteCustomer = (url) => {
        if (window.confirm("Are you sure?")) {
            fetchDeleteCustomer(url)
                .then(() => handleFetch())
                .catch(err => console.error(err));
        }
    };

    const updateCustomer = (url, updatedCustomer) => {
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCustomer)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when updating: " + response.statusText);

                return response.json();
            })
            .then(() => handleFetch())
            .catch(err => console.error(err));
    };

    return (
        <>
            <Stack direction="row" spacing={2} mt={2} justifyContent="left" alignItems="center">
                <AddCustomer addCustomer={addCustomer} />
            </Stack>
            <div className="ag-theme-material" style={{ height: 600 }}>
                <AgGridReact
                    rowData={customers}
                    columnDefs={colDef}
                    pagination={true}
                    paginationAutoPageSize={true}
                    suppressCellFocus={true}
                />
            </div>
        </>
    );
};

export default Customerlist;