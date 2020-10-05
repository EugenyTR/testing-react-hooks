import React from 'react';
import { useAlertToggle } from './alert/AlertContext';

export default function Main() {
    const toggle = useAlertToggle()
    return (
        <>
            <h1>Hello context</h1>
            <button onLCick={toggle} className="btn btn-success">Показать alert</button>
        </>
    )
}