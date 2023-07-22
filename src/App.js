import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import EmployeeList from './components/Pages/employee-list/employee-list';
import Home from './components/Pages/Home/home';
import store from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;

