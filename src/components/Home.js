import React, { Component } from 'react';

class Home extends Component {

    state = {
        name: ''
    }
    setCookies = () => {
        const { cookies } = this.props;
        // now.setSeconds(now.getSeconds()+15);
        const hour = 3600;
        cookies.set('name', this.state.name, {maxAge: 3 * hour});

        alert(cookies.get('name'));
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
                <button onClick={this.setCookies}>Get them Cookies!</button>
            </div>

        );

    }
}

export default Home;