import style from './Sidebar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <h2>Side bar</h2>
    </aside>
}

export default Sidebar;