import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from "./components/Pages/employee-list/employee-list";
import Home from "./components/Pages/Home/home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App