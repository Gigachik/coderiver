import "./App.css";
import Aside from "./components/aside/Aside";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="app">
            <Aside />

            <div className="main">
                <Header />
                <Filter />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/users/:id" element={<Users />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
