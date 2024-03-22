import React, { useState } from 'react';
import './From.css'
const From = () => {
    let [Objet, setObject] = useState({
        fname: "", lname: "", city: "Rangpur", gender: "Femele"
    })
    const change = (property,value) => {
        setObject(prevObj=>({
            ...prevObj,
            [property]:value
        }))

    }
    const fromSubmit=(even)=>{
        even.preventDefault();
        console.log(Objet);


    }
    return (
        <div className="container">
            <form onSubmit={fromSubmit} action="">
                <input onChange={(e)=>{change("fname",e.target.value)}} value={Objet.fname} type="text" placeholder='First Name' /><br />
                <input onChange={(e)=>{change("lname",e.target.value)}} value={Objet.lname} type="text" placeholder='Last Name' /><br />
                <select onChange={(e)=>{change("city",e.target.value)}} value={Objet.city} name="" id="">
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rangpur">Rangpur</option>
                </select>
                <br />
                <input onChange={(e)=>{change("gender","Male")}} checked={Objet.gender === "Male"} type="radio" name='gender' /> Male
                <input onChange={(e)=>{change("gender","Femele")}} checked={Objet.gender === "Femele"} type="radio" name='gender' /> Femele
                <br />
                <button type='submit'>Submit</button>

            </form>
            <div className="print">
                <h1>First Name is: {Objet.fname}</h1>
                <h1>Last Name is: {Objet.lname}</h1>
                <h1>City is: {Objet.city}</h1>
                <h1>Gender is: {Objet.gender}</h1>
            </div>
        </div>
    );
};

export default From;