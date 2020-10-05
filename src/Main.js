import React from 'react';

export default function Main({ toggle }) {
    return (
        <>
            <h1>Hello context</h1>
            <button onLCick={toggle} className="btn btn-success">Показать alert</button>
        </>
    )
}