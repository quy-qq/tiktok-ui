import classNames from 'classnames/bind';
import React from 'react';
import config from '~/config';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const SocialLoginButton = ({ provider, onClick }) => {
    return (
        <button className={cx('social-login')} to={config.routes.home} onClick={onClick}>
            Login with {provider}
        </button>
    );
};

export default SocialLoginButton;
