import style from './Header.module.scss';
import className from 'classnames/bind';
import img from '~/assets/image/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tippy from '@tippyjs/react/headless';
import TippyTooltip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical, faEarthAsia, faKeyboard, faCircleQuestion, faMessage, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useState } from 'react';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = className.bind(style)

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'Language',
            items: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    code: 'en',
                    title: 'English'
                }
            ]
        }
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback'
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />
    }
]

const MENU_ITEMS_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@rose',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
]

function Header() {

    const [searchAccounts, setSearchAccounts] = useState([])
    const currentUser = true

    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
                <img src={img} alt="Tiktok" />
            </div>
            <div>
                <Tippy
                    interactive
                    visible={searchAccounts.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <h4 className={cx('accounts')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPopper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            onFocus={() => setSearchAccounts([1, 2, 3])}
                            onBlur={() => setSearchAccounts([])}
                            type="text"
                            placeholder="Search accounts and videos" />
                        <button className={cx('close-icon')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
            </div>
            <div className={cx('actions')}>
                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text>
                    Upload
                </Button>
                {
                    currentUser
                        ? (<>
                            <TippyTooltip delay={[0, 200]} placement="bottom" content="Messages">
                                <button className={cx('btn-icon-message')}>
                                    <MessageIcon />
                                </button>
                            </TippyTooltip>
                            <TippyTooltip delay={[0, 200]} placement="bottom" content="Inbox">
                                <button className={cx('btn-icon-inbox')}>
                                    <InboxIcon />
                                </button>
                            </TippyTooltip>
                        </>)
                        : (
                            <Button primary>
                                Log in
                            </Button>
                        )
                }
                <Menu data={currentUser ? MENU_ITEMS_USER : MENU_ITEMS}>
                    {
                        currentUser
                            ? (<Image
                                src='https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg'
                                className={cx('user-avatar')}
                                alt='username'
                                fallback="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                            />)
                            : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                    }
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;
