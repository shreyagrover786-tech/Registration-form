
import { useState } from 'react';

function RegistrationForm() {
const[name, setName]= useState('')
const[nameerror, setNameError]= useState('')
const[age, setAge]= useState('')
const[dob, setDob]= useState('')
const[address, setAddress]= useState('')
const[phonenumber, setPhoneNumber]= useState('')
const[phonenumberError, setPhoneNumberError]= useState('')
const[email, setEmail]= useState('')
const[emailError, setEmailError]= useState('')
const[gender, setGender]= useState('')
const[qualification, setQualification]= useState('')
const[data, setData]= useState({})

const handleSave =() => {
    if(!name) {
        setNameError('This Field is required');
        return;
    }
    if(name[0] !== name[0].toUpperCase()) {
        setNameError('First letter should be capital');
        return;
    } else {
        setNameError('');
    }
    if(!email) {
        setEmailError('This field is required');
        return;
    }
    if(!email.includes('@gmail.com')){
        setEmailError('Please enter a valid Gmail with @gmail.com');
        return;
    }
    else {
        setEmailError('');
    }
    if(!phonenumber) {
        setPhoneNumberError('This field is required');
        return;
    }
    if(phonenumber.length !==10) {
        setPhoneNumberError('Phone number must be 10 digits');
        return;
    }
    else {
        setPhoneNumberError('');
    }
    setData({name, age, dob, address, phonenumber, email, gender, qualification})
    alert('Submission Completed Succesfully');
} 
// Form ka return wala part aise kar do
return (
  <div className="container mt-4">
    <div className="row g-4">
      <div className="col-md-7">
        <div className="card shadow rounded-4 p-4">
          <h3 className="text-center fw-bold mb-4">Registration Form</h3>
          
          <div className="mb-3">
            <label className="form-label">Enter Name:</label>
            <input className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
            {nameerror && <div className="text-danger small">{nameerror}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input className="form-control" type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth:</label>
            <input className="form-control" type="date" value={dob} onChange={(e)=>setDob(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Address:</label>
            <input className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input className="form-control" value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
            {phonenumberError && <div className="text-danger small">{phonenumberError}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="abc@gmail.com" />
            {emailError && <div className="text-danger small">{emailError}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Gender:</label>
            <select className="form-select" value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Qualification:</label>
            <select className="form-select" value={qualification} onChange={(e)=>setQualification(e.target.value)}>
              <option value="">Select Qualification</option>
              <option>10th</option>
              <option>12th</option>
              <option>Under Graduation</option>
              <option>Post Graduation</option>
            </select>
          </div>

          <button className="btn btn-primary w-100" onClick={handleSave}>Save</button>
        </div>
      </div>

      <div className="col-md-5">
        <div className="card shadow rounded-4 p-4 bg-light">
          <h4 className="text-center fw-bold mb-3">Output</h4>
          <p><b>Name:</b> {data?.name}</p>
          <p><b>Age:</b> {data?.age}</p>
          <p><b>Dob:</b> {data?.dob}</p>
          <p><b>Address:</b> {data?.address}</p>
          <p><b>PhoneNumber:</b> {data?.phonenumber}</p>
          <p><b>Email:</b> {data?.email}</p>
          <p><b>Gender:</b> {data?.gender}</p>
          <p><b>Qualification:</b> {data?.qualification}</p>
        </div>
      </div>
      </div>
  </div>
)
}
export default RegistrationForm