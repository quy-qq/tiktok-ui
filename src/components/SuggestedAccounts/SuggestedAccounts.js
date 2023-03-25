import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [seeMore, setSeeMore] = useState({ isShow: false, text: 'Xem thêm' });
    const checkSeemore = () => {
        if (!seeMore.isShow) {
            setSeeMore({ isShow: true, text: 'Ẩn bớt' });
        } else {
            setSeeMore({ isShow: false, text: 'Xem thêm' });
        }
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem hidden={seeMore.isShow} />
            <button onClick={checkSeemore} className={cx('more-btn')}>
                {seeMore.text}
            </button>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
