import React from 'react'
import applicationFields from './apps-block-diagrams-list';
import { Link, withRouter } from "react-router-dom";

import '../../styles/diagrams.css';
import BackButton from '../BackButton';

const ApplicationSubFields = ({ match }) => {
    const subfields = applicationFields[match.params.field]
    const field = match.params.field.charAt(0).toUpperCase() + match.params.field.slice(1)
    return (
        <div style={{height: '90%', position: "relative"}}>
            <BackButton/>
            <h1 style={{width: "calc(65% - 210px"}}>{field}</h1>
            <section id="block-diagrams" className="subfields">
                {(subfields) ? subfields.map((subfield) => {
                    return (<Link key={subfield} to={`/diagrams/${match.params.field}/${subfield}`} className="shadowing">
                        <h2>{subfield}</h2>
                    </Link>)
                }) : ""}

            </section>

        </div>
    )
}

export default withRouter(ApplicationSubFields);