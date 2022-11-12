import "./style.css"
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from '../FirebaseConfig'
import { useNavigate } from "react-router-dom"





function AddPatient() {
    const patientCollectionRef = collection(db, "patientDetails")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(patientCollectionRef, {
            docName: e.target[0].value,
            patientName: e.target[1].value,
            subjectiveSymp: e.target[2].value,
            objectiveSymp: e.target[3].value
        });
        navigate("/")
    }

    return (
        <div className='Background'>
            <h1> Register Here</h1>
            <div className='Container'>
                <h1>RECORDS</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name of Doctor' />
                    <input type="text" placeholder='name of patient' />
                    <input type="text" placeholder='Subjective Symptoms' />
                    <input type="text" placeholder='Objective Symptoms' />
                    <button>Submit</button>
                </form>



            </div>

        </div>
    )
}

export default AddPatient
