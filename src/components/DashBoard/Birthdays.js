import React, { Component } from 'react';
import '../../styles/birthdays.css'
import EmpBirthday from './EmpBirthday';
import { pad } from '../../assets/functions';



const binarySearch = (arr, value, start, end, field) => {
    if (start > end) return start;

    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid][field] === value) return mid;
    else if (arr[mid][field] > value) return binarySearch(arr, value, start, mid - 1, field);
    else return binarySearch(arr, value, mid + 1, end, field);
}

const getUpcomingBirthdays = (bdays) => {
    // return bdays.slice(0, 3);
    const myDate = new Date();

    const date = `${pad(myDate.getMonth() + 1 + "")}/${pad(myDate.getDate() + "")}`;

    const startIndex = binarySearch(bdays, date, 0, bdays.length - 1, 'birthday');

    const upcomingBdays = bdays.slice(startIndex, startIndex + 3);

    const birthdaysLeft = 3 - upcomingBdays.length;

    for (let i = 0; i < birthdaysLeft; i++) {
        upcomingBdays.push(bdays[i]);
    }
    return upcomingBdays;
}



//This should have state and get the three employees whose birthdays are coming up.
class Birthdays extends Component {
    constructor(props) {
        super(props);

        this.state = {
            upcomingBirthdays: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/directory/birthdays')
            .then( res => res.json())
            .then( res => {
                const birthdaysComingUp = getUpcomingBirthdays(res);

                this.setState({upcomingBirthdays: birthdaysComingUp})
            })
            .catch( err => console.log(err));
    }

    render() {
        const upcomingBirthdays = this.state.upcomingBirthdays;
        return (
            <div id={this.props.id} className="shadowing roundEdges birthdays">
                <h6>Upcoming Birthdays</h6>

                {
                    upcomingBirthdays.map((el, i) => {
                        return <EmpBirthday
                            key={i}
                            name={el.nombre}
                            birthday={el.birthday}
                            url="gray_square.png"
                        />
                    })
                }
            </div>
        )
    }
}

export default Birthdays;