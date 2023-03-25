import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_FAIL, LOGIN_REUQUEST, LOGIN_SUCCESS } from '~/store/actions/type';

// const register = (username, email, password) => {
//     return axios.post(API_URL + 'signup', {
//         username,
//         email,
//         password,
//     });
// };

export const loginFacebook = async (token) => {
    const response = await axios.post(`http://localhost:3002/api/v1/client/authentication/login`, {
        firebase_token: token,
    });
    if (response.data.data.accessToken) {
        sessionStorage.setItem('accessToken', JSON.stringify(response.data.data.accessToken));
    }
    return response.data;
};

export const loginSubmit = async (token) => {
    try {
        const response = await axios.post(`http://localhost:3002/api/v1/client/authentication/login`, {
            firebase_token: token,
        });
        if (response.data.data.accessToken) {
            sessionStorage.setItem('accessToken', JSON.stringify(response.data.data.accessToken));
        }
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};
export const useAuth = () => {
    const dispatch = useDispatch();
    const { token, user, isAuthenticating, error } = useSelector((state) => state.auth);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (token) {
            const decoded = jwt_decode(token);
            if (decoded.exp * 1000 < Date.now()) {
                dispatch(logout());
            } else {
                setIsAuthenticated(true);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [token, dispatch]);

    return {
        token,
        user,
    };
};
