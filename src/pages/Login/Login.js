import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { auth } from '~/config/firebase/firebase';

import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword, FacebookAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import SocialLoginButton from '~/components/Button/LoginButton';
import config from '~/config';
import { loginSubmit, loginFacebook, currentUser } from '~/services/authService';
import { useNavigate } from 'react-router-dom';
import { login, loginSuccess } from '~/store/actions/auth';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '~/store/actions/type';
import { DefaultLayout } from '~/layouts';
const cx = classNames.bind(styles);
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
export const Login = ({ props }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: '',
        password: '',
        loading: false,
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleFacebookLogin = async (dispatch) => {
        try {
            const provider = new FacebookAuthProvider();
            const loginFb = await firebase.auth().signInWithPopup(provider);
            const token = await loginFb.user._delegate.getIdToken();
            const response = await loginFacebook(token);
            const action = await dispatch(login(token));
            navigate(config.routes.home);
            window.location.reload();
        } catch (error) {
            setState({
                loading: false,
            });
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setState({
                loading: true,
            });
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            let token = await userCredential.user.getIdToken();
            const response = await loginSubmit(token);
            dispatch(loginSuccess(response.data.user));
            if (response) {
                navigate(config.routes.home);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>
                <div className={cx('input-form')}>
                    <label>
                        Email:
                        <input
                            type="email"
                            validations={[required]}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                </div>
                <div className={cx('input-form')}>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            validations={[required]}
                        />
                    </label>
                </div>
                {}
                <button className={cx('button-login')}>Login</button>
            </form>
            <SocialLoginButton provider="Facebook" onClick={handleFacebookLogin} />
        </div>
    );
};
export default Login;
