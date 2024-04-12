import { useState, useEffect } from "react";
import { fetchCustomers, fetchAddCustomer } from "../apicalls";

import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import Button from '@mui/material/Button';

import AddCustomer from "./AddCustomer";

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
            console.log(url); // tämä on nyt vaan omaks iloks.
            fetch(url, { method: 'DELETE' }) // tämä kanssa tonne carapi.js
                .then(response => {
                    if (!response.ok)
                        throw new Error("Error in deletion: " + response.statusText);

                    return response.json();
                })
                .then(() => handleFetch())
                .catch(err => console.error(err));
        }
    };

    return (
        <>
            <AddCustomer addCustomer={addCustomer} />
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