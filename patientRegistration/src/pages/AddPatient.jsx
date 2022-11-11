import React, { useState } from 'react'
import "./style.css"
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from '../FirebaseConfig'
import { useNavigate } from "react-router-dom"
import { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATEVAL":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
    }
}

const initialState = {
    docName: "",
    patientName: "",
    subjectiveSymp: "",
    objectiveSymp: ""

};

function AddPatient() {


    const [state, dispatch] = useReducer(reducer, initialState)

    const patientCollectionRef = collection(db, "patientDetails")
    const navigate = useNavigate();

    const handleChange = event => {
        dispatch({
            type: "UPDATEVAL",
            payload: { name: event.target.name, value: event.target.value }
        })
    }

    const createPatientDetail = async () => {
        await addDoc(patientCollectionRef, {
            docName: state.docName,
            patienName: state.patientName,
            subjectiveSymp: state.subjectiveSymp,
            objectiveSymp: state.objectiveSymp,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
        navigate("/")
    }

    return (
        <div className='Background'>
            <h1> Register Here</h1>
            <div className='Container'>
                <h1>RECORDS</h1>
                { /* <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" id='name' /> */}

                <input type="text" placeholder="Name of Doctor" id='name' name='docName' onChange={handleChange} />
                <input type="text" placeholder="Name of Patient" name='patientName' id='patient' onChange={handleChange} />
                <input type="text" placeholder="Subjective Symptoms" name='subjectiveSymp' id='subjective' onChange={handleChange} />
                <input type="text" placeholder="Objective Symptoms" name='objectiveSymp' id='Objective' onChange={handleChange} />
                <button onClick={createPatientDetail}>Register</button>

            </div>
        </div>
    )
}

export default AddPatient
