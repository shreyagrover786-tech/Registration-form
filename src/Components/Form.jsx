import './Form.css'
import { useState } from 'react';

function RegistrationForm() {
const[name, setName]= useState('')
const[age, setAge]= useState('')
const[dob, setDob]= useState('')
const[address, setAddress]= useState('')
const[phonenumber, setPhoneNumber]= useState('')
const[email, setEmail]= useState('')
const[gender, setGender]= useState('')
const[qualification, setQualification]= useState('')
const[data, setData]= useState(null)

const handleSave =() => {
    setData({name, age, dob, address, phonenumber, email, gender, qualification})
} 
return(
    <div style={{display: 'flex', gap:'30px', alignItems: 'flex-start'}}>
    {/* LEFT SIDE - FORM*/}
    <div style={{border: '1px solid black', width: '200px', padding: '15px', margin: '20px'}}>
        
        <h3>Registration Form</h3>
        <form>
            <label>Enter Name: <br/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{border: '1px solid black'}}/>
            </label>
             <label>Age: <br/>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}style={{border: '1px solid black'}}/>
            </label>
             <label>Date of Birth: <br/>
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={{border: '1px solid black'}}/>
            </label>
            <br/>
             <label>Address: <br/>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={{border: '1px solid black'}}/>
            </label>
             <label>Phone Number: <br/>
            <input type="text" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)}style={{border: '1px solid black'}}/>
            </label>
             <label>Email: <br/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{border: '1px solid black'}}/>
            </label>
             <label>Gender: <br/>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)}style={{border: '1px solid black'}}/>
            </label>
             <label>Qualification: <br/>
            <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)}style={{border: '1px solid black'}}/>
            </label>
            <br/>
            <button type="button" onClick={handleSave} className='save-btn'>Save</button>
        </form>
        
    </div>
     {/* RIGHT SIDE - OUTPUT*/}
     {data && (
        <div style={{border: '1px solid black', width: '300px', padding:'15px'}}>
        <h2>Output</h2>
        <p><b>Name:</b> {data.name}</p>
        <p><b>Age:</b> {data.age}</p>
        <p><b>Dob:</b> {data.dob}</p>
        <p><b>Address:</b> {data.address}</p>
        <p><b>PhoneNumber:</b> {data.phonenumber}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Gender:</b> {data.gender}</p>
        <p><b>Qualification:</b> {data.qualification}</p>
        </div>
     )}
   </div>
)
    
}export default RegistrationForm;