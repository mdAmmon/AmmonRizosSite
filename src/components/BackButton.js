import React from 'react'
import { withRouter } from 'react-router-dom'

function BackButton({history}) {
    return (
        <div style={{position:"absolute", display:"inline-block", left:"17.5%"}}>
            <button onClick={history.goBack} className="btn btn-ar-2" style={{width: "100px"}}> <i className="fas fa-arrow-left" style={{padding: "0 5% 0 0"}}></i> Back</button>
        </div>
    )
}

export default withRouter(BackButton)