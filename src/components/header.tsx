import React from 'react';

const Header : React.FC <{ logo : string }> = ({ logo }) => {
    return (
        <div className="fixedheader w100">
            <div className="header h100 f cent">
                <img className="wauto" src={logo} />
            </div>
        </div>
    )
}

export default Header;