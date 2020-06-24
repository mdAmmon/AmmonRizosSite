import React from 'react';

import '../../styles/diagrams.css';
import BackButton from '../BackButton';

const Diagram = ({ match }) => {
    let svg;
    try{
        svg = require(`../../img/diagrams/${match.params.diagram}.svg`);
    } catch{
        svg = null;
    }
    return <div style={{height: '90%', position: "relative"}}>
        <BackButton/>
        <h1 style={{width: "calc(65% - 210px"}}>{match.params.diagram}</h1>
        { (svg)? <object type="image/svg+xml" aria-label="diagram" data={svg} id="svgDiagram" />: "" }
        
    </div>

}

export default Diagram;