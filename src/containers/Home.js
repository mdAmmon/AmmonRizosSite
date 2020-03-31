import React, { Component } from 'react';
import BoxTitle from '../components/DashBoard/BoxTitle';

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
                <BoxTitle>
                    <h2>Adios Mundo</h2>
                </BoxTitle>
            </div>

        );

    }
}

export default Home;