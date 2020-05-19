import React, { Component } from 'react';
import '../../styles/birthdays.css'
import EmpBirthday from './EmpBirthday';


//This should have state and get the three employees whose birthdays are coming up.
class Birthdays extends Component {
    constructor(props) {
        super(props);

        this.state = {
            closeBirthdays: [
                {
                    name: "Mauricio Duran",
                    birthday: "October 21"
                },
                {
                    name: "Mauricio Duran",
                    birthday: "October 21"
                },
                {
                    name: "Mauricio Duran",
                    birthday: "October 21"
                }
            ]
        }
    }


    render() {
        const closeBirthdays = this.state.closeBirthdays;
        return (
            <div id={this.props.id} className="shadowing roundEdges birthdays">
                <h6>Upcoming Birthdays</h6>

                {
                    closeBirthdays.map((el, i) => {
                        return <EmpBirthday 
                            key={i}
                            name = {el.name}
                            birthday = {el.birthday}
                            url = "gray_square.png"
                        />
                    })
                }
            </div>
        )
    }
}

export default Birthdays;