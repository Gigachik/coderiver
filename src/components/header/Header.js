import style from "./Header.module.css";

import notification from "../../images/notification.svg";
import search from "../../images/search.svg";
import avatar from "../../images/avatar.png";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <div className={style.header}>
            <h2 className={style.title}>{location.pathname.substring(1)}</h2>
            <div className={style.header_info}>
                <img src={search} alt="search" />
                <div className={style.notification}>
                    <img src={notification} alt="notification" />
                </div>

                <div className={style.profile}>
                    <p>Jones Ferdinand</p>
                    <div className={style.profile_img}>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
