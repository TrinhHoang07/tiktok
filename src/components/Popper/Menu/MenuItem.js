import Button from '~/components/Button'
import style from './Menu.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

function MenuItem({ data, onClick }) {

    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            className={classes}
            onClick={onClick}
        >
            {data.title}
        </Button>
    )
}

export default MenuItem