import React from 'react';

import logo from '../assets/image/logo-full.png';

const Header : React.FC = () => {
    return (
        <div className="fixedheader w100">
            <div className="header h100 f cent">
                <img className="wauto" src={logo} />
            </div>
        </div>
    )
}

export default Header;