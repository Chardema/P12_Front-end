// redux/store.js

import { createStore } from 'redux';
import employeesReducer from "./reducer/employeeReducer";

const store = createStore(employeesReducer);

export default store;
