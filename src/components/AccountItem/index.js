import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import style from './AccountItem.module.scss';

const cx = className.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-qua-bong-1.jpg" alt="avt" />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Ronaldo
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>Siuuuuuuuuu</p>
            </div>
        </div>
    )
}

export default AccountItem;