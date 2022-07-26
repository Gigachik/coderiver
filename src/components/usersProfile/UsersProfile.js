import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserByID } from "./store/action";

import style from "./UsersProfile.module.css";

import bg from "../../images/background.png";
import cat from "../../images/cat.png";

import Filter from "../filter/Filter";

const UsersProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userProfile.user);

    const { id } = useParams();
    useEffect(() => {
        dispatch(getUserByID(id));
    }, []);

    return (
        <>
            <Filter />
            <div className={style.user}>
                {user ? (
                    <>
                        <img className={style.user_bg} src={bg} alt="bg" />
                        <div className={style.user_info}>
                            <div className={style.avatar}>
                                <img src={cat} alt="avatar" />
                            </div>

                            <div className={style.user_top}>
                                <h2>{user.name}</h2>
                                <h4>{user?.company?.catchPhrase}</h4>
                            </div>

                            <h2>Address</h2>
                            <p>
                                {user.address?.street}, {user.address?.suite},
                                <br />
                                {user.address?.city}, {user.address?.zipcode},
                            </p>

                            <h2>Phone</h2>
                            <p>{user.phone}</p>

                            <h2>Website</h2>
                            <a href={user.website}>{user.website}</a>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
};
export default UsersProfile;
