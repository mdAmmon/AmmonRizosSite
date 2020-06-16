import React from 'react';

import '../../styles/diagrams.css';

const Diagram = ({ match }) => {
    let svg;
    try{
        svg = require(`../../img/diagrams/${match.params.diagram}.svg`);
    } catch{
        svg = null;
    }
    return <div>
        <h1>{match.params.diagram}</h1>
        { (svg)? <object type="image/svg+xml" aria-label="diagram" data={svg} id="svgDiagram" />: "" }
        
    </div>

}

export default Diagram;