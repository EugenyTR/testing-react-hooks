import React, {useContext, useState, useReducer} from 'react';

const AlertContext = React.createContext();
// const AlertToggleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext);
// }

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ({ children }) => {
    // const [alert, setAlert] = useState(false);

    // const toggle = () => setAlert(prev => !prev);

    // Первым параметром useReducer принимает сам reducer (функцию). Вторым - начальное значение стейта (обычно это объект)
    // useReducer нам возвращает кортеж
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    // ЧТобы изменить state, мы должны воспользоваться функцией dispatch. 
    // При этом мы должны указать тип события, которое происходит.
    const show = text => dispatch({type: SHOW_ALERT, text})
    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show, hide
        }} >
            { children }
        </AlertContext.Provider>
    )
}