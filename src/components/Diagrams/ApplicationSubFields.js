import React from 'react'
import applicationFields from './apps-block-diagrams-list';
import { Link, withRouter } from "react-router-dom";

const ApplicationSubFields = ({ match }) => {
    const subfields = applicationFields[match.params.field]
    return (
        <div>
            <h1>{match.params.field}</h1>
            <section id="block-diagrams" >
                {(subfields) ? subfields.map((subfield) => {
                    return (<Link to={`/diagrams/${match.params.field}/${subfield}`} className="shadowing">
                        <h2>{subfield}</h2>
                    </Link>)
                }) : ""}


                {/* <Link to='/diagrams/dcdc' className="shadowing">
                    <h2>DC-DC</h2>
                </Link>

                <Link to='/diagrams/motorcontrol' className="shadowing">
                    <h2>MOTOR CONTROL</h2>
                </Link>

                <Link to='/diagrams/ledlighting' className="shadowing">
                    <h2>LED LIGHTING</h2>
                </Link> */}

            </section>

        </div>
    )
}

export default withRouter(ApplicationSubFields);