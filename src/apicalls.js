export const fetchCustomers = async () => {
    const response = await fetch(import.meta.env.VITE_API_CUSTOMERS);
    if (!response.ok)
        throw new Error("Error in customers fetch: " + response.statusText);
    return await response.json();
}

export const fetchTrainings = async () => {
    const response = await fetch(import.meta.env.VITE_API_TRAININGS);
    if (!response.ok)
        throw new Error("Error in customers fetch: " + response.statusText);
    return await response.json();
}