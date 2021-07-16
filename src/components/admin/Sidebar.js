import React from 'react'

function Sidebar({ sidebars, isActive }) {

    return (
        <>
            {sidebars.map((sidebar, i) => (
                <a href={sidebar.link} key={i} onClick={e => isActive(i)} className={sidebar.isActive ? 'active' : ''}><i className={sidebar.icon}></i><span id="hideable">{sidebar.name}</span></a>
            ))}
        </>
    )
}

export default Sidebar
