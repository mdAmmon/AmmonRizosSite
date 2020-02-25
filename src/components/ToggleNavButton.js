import React, { Component } from 'react';

class ToggleNavButton extends Component {
    toggleNav = (e) => {
        const navbar = document.getElementById("navbar");
        const content = document.getElementById("content");
        
        
        navbar.classList.toggle('active');
        content.classList.toggle('active');
        document.querySelector('body').classList.toggle('active');
        // $('#navbar').toggleClass('active');
        // $('#content').toggleClass('active');
        // $('body').toggleClass('active');

    }

    render() {
        return (
            <button id="navbarCollapse" onClick={this.toggleNav} type="button" className="btn bg-white rounded-pill shadow-sm">
                <i className="fa fa-bars"></i>
            </button>
        );

    }
}

export default ToggleNavButton;