import axios from 'axios';
import authHeader from './auth-header';

export const User = async (id) => {
    const header = await authHeader();
    try {
        const response = await axios.get(`http://localhost:3002/api/v1/client/user/me`, {
            headers: { Authorization: header.Authorization },
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const AllUser = async (id) => {
    const header = await authHeader();
    try {
        const response = await axios.get(`http://localhost:3002/api/v1/client/user`, {
            headers: { Authorization: header.Authorization },
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
};
