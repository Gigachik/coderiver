import "./App.css";
import Aside from "./components/aside/Aside";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/users/Users";
import Users from "./components/usersProfile/UsersProfile";
import Header from "./components/header/Header";
import routesByName from "./constants/routesByName";

function App() {
    return (
        <div className="app">
            <Aside />
            <div className="main">
                <Header />
                <Routes>
                    <Route path={routesByName.users} element={<Home />} />
                    <Route
                        path={routesByName.usersProfile}
                        element={<Users />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
