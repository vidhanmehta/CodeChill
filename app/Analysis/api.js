// api.js

import axios from 'axios';

export const fetchData = async (link, filters) => {
    try {
        const response = await axios.post('http://localhost:3000/api/analysis', { link, filters });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // You can handle the error as needed in the component
    }
};
