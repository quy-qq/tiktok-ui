import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { loginSuccess } from '~/store/actions/auth';
import { User } from '~/services/userService';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({});
    const userInfoRedux = useSelector((state) => state.auth.userInfo);

    const checkToken = async () => {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            const decoded = await jwt_decode(token);
            if (Date.now() < decoded.exp * 1000) {
                setUserInfo(await User());
                dispatch(loginSuccess(decoded));
                navigate(config.routes.home);
            } else {
                navigate(config.routes.login);
            }
        }
    };

    useEffect(() => {
        checkToken();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Header checkUser={userInfoRedux} />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
