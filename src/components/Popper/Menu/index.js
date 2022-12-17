import style from './Menu.module.scss';
import className from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import { useState } from 'react';

const cx = className.bind(style);

function Menu({ children, data = [] }) {

    const [menu, setMenu] = useState([{ items: data }])
    const current = menu[menu.length - 1]

    const handleBack = () => {
        setMenu(prev => prev.slice(0, prev.length - 1))
    }

    const changeMenu = (isParent, item) => {
        if (isParent) {
            setMenu(prev => [...prev, item.children])
        }
    }

    const renderItem = () => {
        return current.items.map((item, index) => {

            const isParent = !!item.children

            return (
                <MenuItem key={index} data={item} onClick={() => changeMenu(isParent, item)} />
            )
        })
    }

    return (
        <Tippy
            interactive
            offset={[12, 10]}
            delay={[0, 650]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper className={cx('menu-popper')}>
                        {menu.length > 1 && <Header title="Language" onBack={handleBack} />}
                        {
                            renderItem()
                        }
                        {menu.length === 1 && (
                            <div className={cx('dark-mode')}>
                                <span className={cx('icon-dark')}>
                                    <FontAwesomeIcon icon={faMoon} />
                                </span>
                                <span className={cx('title-dark-mode')}>Dark mode</span>
                                <span className={cx('icon-dark', 'large')}>
                                    <FontAwesomeIcon icon={faToggleOff} />
                                </span>
                            </div>
                        )}
                    </WrapperPopper>
                </div>
            )}
            onHide={() => setMenu(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu;