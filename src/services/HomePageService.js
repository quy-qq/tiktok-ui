import axios from 'axios';
import authHeader from './auth-header';

export const home = async (currentPage) => {
    const res = await axios.get(`http://localhost:3002/api/v1/client/post?page=${currentPage}&limit=2`, {
        headers: authHeader(),
    });

    return res;
};
