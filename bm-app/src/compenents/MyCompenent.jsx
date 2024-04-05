import React, { useState } from 'react'

const MyCompenent = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Mohamed KADI")
        console.log(name)
    }
    const updateAge = () => {
        setAge(age + 2)
        console.log(age)
    }
    const toggleEmployeeStatus = () => {
        setIsEmployed(!isEmployed)
        console.log(isEmployed)
    } 
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Update</button>

            <p>Is Employed: {isEmployed? "Yes" : "No"}</p>
            <button onClick={toggleEmployeeStatus}>Update</button>
        </div>
    )
}

export default MyCompenent