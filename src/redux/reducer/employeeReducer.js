const initialState = {
    employees: [],
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_EMPLOYEE':
            return { ...state, employees: [...state.employees, action.payload] };
        default:
            return state;
    }
};

export default employeesReducer;
