import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import style from "./Home.module.css";
import { getUsers } from "./store/action";

import sort from "../../images/sort.svg";
import more from "../../images/more.svg";

const tasks = [
    { id: 0, label: "Finish ticket update", mark: "urgent" },
    { id: 1, label: "Create new ticket example", mark: "new" },
    { id: 2, label: "Update ticket report", mark: "default" },
];

const stylesByMark = {
    urgent: style.yellow,
    new: style.green,
    default: style.white,
};

const tickets = [
    { id: 0, label: "Waiting on Feature Request", count: 4238 },
    { id: 1, label: "Awaiting Customer Response", count: 1005 },
    { id: 2, label: "Awaiting Developer Fix", count: 914 },
    { id: 3, label: "Pending", count: 281 },
];

const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.home.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div>
            <div className={style.users}>
                <div className={style.users_top}>
                    <h3>All users</h3>
                    <div className={style.users_sort}>
                        <img src={sort} alt="icon" />
                        Sort
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User details</th>
                            <th>Company name</th>
                            <th>Email</th>
                            <th>Distance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            ? users.map((item) => (
                                  <tr key={item.id}>
                                      <td>
                                          <p>{item.name}</p>
                                          <span>{item.address.city}</span>
                                      </td>
                                      <td>
                                          <p>{item.company.name}</p>
                                          <span>
                                              {item.company.catchPhrase}
                                          </span>
                                      </td>
                                      <td>
                                          <p>{item.email}</p>
                                          <span>{item.website}</span>
                                      </td>
                                      <td>
                                          <span className={style.distance}>
                                              High
                                          </span>
                                      </td>
                                      <td>
                                          <NavLink to={"/users/" + item.id}>
                                              <img src={more} alt="icon" />
                                          </NavLink>
                                      </td>
                                  </tr>
                              ))
                            : null}
                    </tbody>
                </table>
            </div>
            <div className={style.info}>
                <div className={style.info_item}>
                    <div className={style.info_block}>
                        <div className={style.info_top}>
                            <h3>Unresolved tickets</h3>
                            <NavLink to={"/home"} className="link">
                                View details
                            </NavLink>
                        </div>
                        <span>
                            Group: <strong>Support</strong>
                        </span>
                    </div>
                    {tickets
                        ? tickets.map((item) => (
                              <div className={style.tickets} key={item.id}>
                                  <p>{item.label}</p>
                                  <p>{item.count}</p>
                              </div>
                          ))
                        : null}
                </div>
                <div className={style.info_item}>
                    <div className={style.info_block}>
                        <div className={style.info_top}>
                            <h3>Tasks</h3>
                            <NavLink to={"/home"} className="link">
                                View all
                            </NavLink>
                        </div>
                        <span>Today</span>
                    </div>

                    <div className={style.tickets}>
                        <form>
                            <input type="text" placeholder="Create new task" />
                            <button>+</button>
                        </form>
                    </div>
                    {tasks
                        ? tasks.map((item) => (
                              <div
                                  className={`${style.tickets} ${style.tasks}`}
                                  key={item.id}
                              >
                                  <input type="checkbox" id={item.id} />
                                  <label for={item.id}>{item.label}</label>
                                  <span className={stylesByMark[item.mark]}>
                                      {item.mark}
                                  </span>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
};
export default Home;
