import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../config/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const cx = classNames.bind(styles);
function Login() {
    return (
        <section id="content">
            <header>
                <h1>Log In</h1>
            </header>
            <form method="post" className={cx('small centered')}>
                <fieldset>
                    <p>
                        <label for="input-username">gmail</label>
                        <input type="text" className={cx('text')} name="username" id="input-username" />
                    </p>
                    <p>
                        <label for="input-password">Password</label>
                        <input type="password" className={cx('text password')} name="password" id="input-password" />
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}

export default Login;
