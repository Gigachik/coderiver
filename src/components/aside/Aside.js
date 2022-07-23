import { NavLink, useNavigate } from "react-router-dom";
import style from "./Aside.module.css";

import logo from "../../images/logo.svg";
import nav_1 from "../../images/overview.svg";
import nav_2 from "../../images/users.svg";
import nav_3 from "../../images/ideas.svg";
import nav_4 from "../../images/contacts.svg";
import nav_5 from "../../images/agents.svg";
import nav_6 from "../../images/articles.svg";
import nav_7 from "../../images/settings.svg";
import nav_8 from "../../images/subscription.svg";

const navigationTop = [
    { label: "Overview", icon: nav_1, navLink: "/" },
    { label: "Users", icon: nav_2, navLink: "/home" },
    { label: "Ideas", icon: nav_3, navLink: "/" },
    { label: "Contacts", icon: nav_4, navLink: "/" },
    { label: "Agents", icon: nav_5, navLink: "/" },
    { label: "Articles", icon: nav_6, navLink: "/" },
];
const navigationBottom = [
    { label: "Settings", icon: nav_7, navLink: "/" },
    { label: "Subscription", icon: nav_8, navLink: "/" },
];

const Aside = () => {
    return (
        <aside className={style.aside}>
            <div className={style.logo}>
                <img src={logo} alt="logo" />
                <h3>Dashboard </h3>
            </div>
            <nav className={style.nav}>
                <ul>
                    {navigationTop.map((item) => (
                        <li key={item.label}>
                            <NavLink
                                to={item.navLink}
                                ClassName={({ isActive }) =>
                                    isActive ? "active" : null
                                }
                            >
                                <span className={style.nav_icon}>
                                    <img src={item.icon} alt="icon" />
                                </span>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul>
                    {navigationBottom.map((item) => (
                        <li key={item.label}>
                            <NavLink
                                to={item.navLink}
                                activeClassName={style.active}
                            >
                                <span className={style.nav_icon}>
                                    <img src={item.icon} alt="icon" />
                                </span>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;
