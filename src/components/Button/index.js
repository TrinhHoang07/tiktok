import { Link } from 'react-router-dom'
import className from 'classnames/bind'
import style from './Button.module.scss';

const cx = className.bind(style)

function Button({
    href,
    disabled,
    to,
    small,
    large,
    className,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    leftIcon = false,
    rightIcon = false,
    children,
    onClick,
    ...passProps
}) {

    let Component = 'button'

    const props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (href) {
        props.href = href
        Component = 'a'
    } else if (to) {
        props.to = to
        Component = Link
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        leftIcon,
        rightIcon,
        rounded
    })

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    )
}

export default Button;