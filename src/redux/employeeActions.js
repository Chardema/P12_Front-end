// employeeActions.js
export const saveEmployee = (employee) => {
    return {
        type: 'SAVE_EMPLOYEE',
        payload: employee,
    };
};
