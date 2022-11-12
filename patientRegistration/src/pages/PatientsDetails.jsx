import React from 'react'
import Patient from './Patient'
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore"
import { db, auth } from '../FirebaseConfig'
import "./style.css"
import { useEffect } from 'react'
import { useState } from 'react'


function PatientsDetails() {
    const [patientList, setPatientList] = useState([]);
    const patientCollectionRef = collection(db, "patientDetails");

    useEffect(() => {
        const getPatientDetails = async () => {
            const data = await getDocs(patientCollectionRef);
            {/* setPatientList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); */ }
            setPatientList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(patientList);
        };
        getPatientDetails();
    }, []);

    const deletePatient = async (id) => {
        const patientDoc = doc(db, "patientDetails", id);
        await deleteDoc(patientDoc);

    }
    return (
        <div className="Background">
            <h1>Welcome to Bharati's Dental Care</h1>
            {patientList.map((patient) => {
                return (
                    <div className="Container">
                        <p>Patient Name: {patient.patientName}</p>
                        <p>Diagnosed by: {patient.docName}</p>
                        <p>Objective Symptoms: {patient.objectiveSymp}</p>
                        <p>Subjective Symptoms: {patient.subjectiveSymp}</p>
                        <button className='deleteBtn' onClick={() => { deletePatient(patient.id) }}>X</button>
                    </div>
                )
            })}

        </div >
    )
}

export default PatientsDetails
