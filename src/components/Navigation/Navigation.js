import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoggedIn } from '../../redux/User/user.selectors';
import { logout } from '../../redux/User/user.actions';

import {NavLink, withRouter } from "react-router-dom";
import Logo from '../../img/arLogo.png';
import "../../styles/navbar.css"

class Navigation extends Component {

    expandNav() {
        if(window.innerWidth<770){
            return;
        }else{
            document.getElementById("navbar").classList.add("hovered");
    
            document.getElementById("content").classList.add("hovered");
            document.getElementById("logo").classList.add("hovered");
        
            document.getElementById("nav-links").classList.add("hovered");
        
            const hide = document.getElementsByClassName('hide');
        
            Array.from(hide).forEach(element => {
                element.classList.add("hovered");
            });
        
            const fa = document.getElementsByClassName('fa-fw');
        
            Array.from(fa).forEach(element => {
                element.classList.add("hovered");
            });
        }
    
    }
    
    shrinkNav() {
        if(window.innerWidth<770){
            return;
        } else{
            document.getElementById("navbar").classList.remove("hovered");
    
            document.getElementById("content").classList.remove("hovered");
            document.getElementById("logo").classList.remove("hovered");
        
            document.getElementById("nav-links").classList.remove("hovered");
        
            const hide = document.getElementsByClassName('hide');
        
            Array.from(hide).forEach(element => {
                element.classList.remove("hovered");
            });
        
            const fa = document.getElementsByClassName('fa-fw');
        
            Array.from(fa).forEach(element => {
                element.classList.remove("hovered");
            });
        }
    }


    render() {
        const logButton = (this.props.isLogged)? 
        <span className="login" id="loginBtn" onClick={this.props.logout}>Logout</span>:
        <span className="login" id="loginBtn" onClick={this.props.showModal}>Login</span>;

        const navHeader = (
            <div id="nav-header">
                <img src={Logo} id="logo" alt="" />
                <span id="title" className="hide" >Ammon & Rizos</span>
            </div>
        );
        const navBody = (
            <div id="nav-body">
                {logButton}
                <ul id="nav-links">
                    <li>
                        <NavLink exact to="/" onClick={()=>{}} activeStyle={{ color: '#F3F3F3' }}>
                            <i className="fas fa-home fa-fw"></i>
                            <span className="hide">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/directory" activeStyle={{ color: '#F3F3F3' }}>
                            <i className="fas fa-users fa-fw"></i>
                            <span className="hide">Directory</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/accounts" activeStyle={{ color: '#F3F3F3' }}>
                            <i className="fas fa-suitcase fa-fw"></i>
                            <span className="hide">Accounts</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/calendar" activeStyle={{ color: '#F3F3F3' }}>
                            <i className="fas fa-calendar-alt fa-fw"></i>
                            <span className="hide">Calendar</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/crosses" activeStyle={{ color: '#F3F3F3' }}>
                            <i className="fas fa-exchange-alt fa-fw"></i>
                            <span className="hide">Crosses</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/diagrams" activeStyle={{ color: '#F3F3F3' }}>
                            <i className="fas fa-sitemap fa-fw"></i>
                            <span className="hide">Diagrams</span>

                        </NavLink>
                    </li>


                </ul>

            </div>
        );
        const navbar = (this.props.location.pathname === '/') ? (
            <nav id="navbar">
                {navHeader}
                {navBody}
            </nav>
        ) : (
            <nav id="navbar" className='nav-collapsed' onMouseOver={this.expandNav} onMouseOut={this.shrinkNav}>
                {navHeader}
                {navBody}
            </nav>
        );
        return navbar;


    }
}

const mapStateToProps = createStructuredSelector({
    isLogged: selectIsLoggedIn,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));