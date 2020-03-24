import React, { Component } from 'react';

class JumpToDate extends Component {
    render() {
        const years = [];
        let opt;
        for(let i=this.props.today.getFullYear()-1; i<this.props.today.getFullYear()+3;i++){
            opt = <option key={i} value={i}>{i}</option>
            years.push(opt);
        }

        return <div id="jumpTo">
            <div className="form-inline">
                <label className="lead col-3" id="jumpLabel" htmlFor="month">Jump To: </label>
                <select className="form-control col-4 mr-3" name="month" id="selMonth" value={this.props.month} onChange={this.props.changeMonth}>
                    <option value="0">Jan</option>
                    <option value="1">Feb</option>
                    <option value="2" > Mar</option >
                    <option value="3" > Apr</option >
                    <option value="4" > May</option >
                    <option value="5" > Jun</option >
                    <option value="6" > Jul</option >
                    <option value="7" > Aug</option >
                    <option value="8" > Sep</option >
                    <option value="9" > Oct</option >
                    <option value="10" > Nov</option >
                    <option value="11" > Dec</option >
                </select >


                <label htmlFor="year"></label> <select className="form-control col-4" name="year" id="selYear" value={this.props.year} onChange={this.props.changeYear}>
                    {years}
                </select >
            </div>

        </div >
    }
}

export default JumpToDate;