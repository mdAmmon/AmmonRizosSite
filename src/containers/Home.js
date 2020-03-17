import React, { Component } from 'react';

class Home extends Component {
    state = {
        name: ''
    }

    componentDidMount() {
        document.title = "Ammon & Rizos"
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>

        );

    }
}

export default Home;