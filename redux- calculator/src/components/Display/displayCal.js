import React from "react";
import './displayCal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Display = ({displayValue}) => {
    return(
        <div className="row p-3 border border-secondary" id="manhinh">{displayValue}</div>
    )
}

export default Display;