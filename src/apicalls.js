export const fetchCustomers = async () => {
    const response = await fetch(import.meta.env.VITE_API_CUSTOMERS);
    if (!response.ok)
        throw new Error("Error in customers fetch: " + response.statusText);
    return await response.json();
};

export const fetchTrainings = async () => {
    const response = await fetch(import.meta.env.VITE_API_TRAININGS);
    if (!response.ok)
        throw new Error("Error in training fetch: " + response.statusText);
    return await response.json();
};

export const fetchAddCustomer = async (newCustomer) => {
    const response = await fetch(import.meta.env.VITE_API_CUSTOMERS, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newCustomer)
    });
    if (!response.ok)
        throw new Error("Error when adding new customer: " + response.statusText);

    return await response.json();
};

export const fetchDeleteCustomer = async (url) => {
    const response = await fetch(url, { method: 'DELETE' });
    if (!response.ok)
        throw new Error("Error in deletion: " + response.statusText);
    return await response.json();
}

export const fetchUpdateCustomer = async (url, updatedCustomer) => {
    const response = await fetch(url, { 
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedCustomer)
    })
    if (!response.ok)
        throw new Error("Error when updating customer " + response.statusText);
    return await response.json();
}