import React from 'react'

const Header = ({opentask,isopen}) => {
    return (
        <header className="header">
            <h1>TASK TRACKER</h1>
            <button className="addbtn" onClick={opentask}>{isopen ? "close" : "ADD"}</button>
        </header>
    )
}

export default Header
