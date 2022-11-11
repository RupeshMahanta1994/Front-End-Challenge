import React from 'react'
import "./style.css"

function Patient({ patient }) {
    return (
        <div className="Container">
            <h1>Patient Name: {patient.patientName}</h1>
        </div>
    )
}

export default Patient
