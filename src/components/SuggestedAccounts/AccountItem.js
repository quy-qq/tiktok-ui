import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AllUser } from '~/services/userService';

const cx = classNames.bind(styles);
function AccountItem({ hidden }) {
    const [accounts, setAccounts] = useState([]);
    const getACcount = async () => {
        try {
            const res = await AllUser();
            if (hidden === false) setAccounts(res.data.nodes.slice(0, 3));
            else setAccounts(res.data.nodes);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getACcount();
    }, [hidden]);
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            {accounts &&
                accounts.length > 0 &&
                accounts.map((account, index) => (
                    <Tippy
                        key={index}
                        interactive
                        delay={[800, 0]}
                        offset={[-20, 0]}
                        placement="bottom"
                        render={renderPreview}
                    >
                        <div key={index} className={cx('account-item')}>
                            <img className={cx('avatar')} src={account.avatar} alt="" />
                            <div className={cx('item-info')}>
                                <p className={cx('nickname')}>
                                    <strong>{account.username}</strong>
                                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                </p>
                                <p className={cx('name')}>{account.username}</p>
                            </div>
                        </div>
                    </Tippy>
                ))}
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
