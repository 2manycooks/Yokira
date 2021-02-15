import React from 'react';
import PropTypes from 'prop-types';



function NavBar(props) {

    const logged_out_nav = (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div /* className="container-fluid" */>
                
                    
                        <span id="login" onClick={() => props.setDisplayedForm('login')}>
                            Log In
                        </span>
                        <span id="signup" onClick={() => props.setDisplayedForm('signup')}>
                            Sign Up
                        </span>
            </div>
        </nav>
    );

    const logged_in_nav = (
        <div className="navbar navbar-expand navbar-dark bg-dark">
            <span id="logout" onClick={props.handle_logout} > Log Out</span>
            <span id="profile" onClick={props.handleShowProfile}> Profile </span>
        </div>
        
    );
    return <div>{ props.logged_in ? logged_in_nav : logged_out_nav }</div>;
}

export default NavBar;

NavBar.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    setDisplayedForm: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired,
};