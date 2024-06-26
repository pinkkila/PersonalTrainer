export const fetchCustomers = async () => {
    const response = await fetch(import.meta.env.VITE_API_CUSTOMERS);
    if (!response.ok)
        throw new Error("Error in customers fetch: " + response.statusText);
    return await response.json();
};

export const fetchTrainings = async () => {
    const response = await fetch(import.meta.env.VITE_API_GETTRAININGS);
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
        throw new Error("Error in customer deletion: " + response.statusText);
    return await response.json();
};

export const fetchUpdateCustomer = async (url, updatedCustomer) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedCustomer)
    });
    if (!response.ok)
        throw new Error("Error when updating customer " + response.statusText);
    return await response.json();
};

export const fetchAddTraining = async (newTraining) => {
    const response = await fetch(import.meta.env.VITE_API_TRAININGS, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newTraining)
    });
    if (!response.ok)
        throw new Error("Error when adding new training: " + response.statusText);
    return await response.json();
};

export const fetchDeleteTraining = async (id) => {
    const response = await fetch(import.meta.env.VITE_API_TRAININGS + '/' + id, { method: 'DELETE' });
    if (!response.ok)
        throw new Error("Error in training deletion: " + response.statusText);
    return await response.json();
}


