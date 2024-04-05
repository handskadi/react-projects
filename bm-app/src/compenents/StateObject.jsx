import React, { useState } from 'react'

const StateObject = () => {

    const [car, setCar] = useState({
        year: 2024,
        make: "Peagot",
        model: "208"
    });

    const handleYearOnchange = (e) => {
        setCar(c => ({...c,
            year: e.target.value,
        }));
    }
    const handleModelOnchange = (e) => {
        setCar(c => ({...c,
            model: e.target.value,
        })); 
    }
    const handleMakeOnchange = (e) => {
        setCar(c => ({...c,
            make: e.target.value,
        })); 
    }
      return (
    <div>
       <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
       <input type="number" value={car.year} onChange={handleYearOnchange}/><br />
       <input type="text" name="model" value={car.model} onChange={handleModelOnchange}/><br />
       <input type="text" name="make" value={car.make} onChange={handleMakeOnchange}/>
    </div>
  )
}

export default StateObject