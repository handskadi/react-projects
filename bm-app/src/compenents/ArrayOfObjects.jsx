import React, {useState} from 'react'

const ArrayOfObjects = () => {
    
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = () => {
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars(c => [...c,newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_, i) => i !== index)); // Show us all that is not in this filter
    }

    const handleYearChange = (e) => {
        setCarYear(e.target.value)
    }

    const handleMakeChange = (e) => {
        setCarMake(e.target.value)
    }

    const handleModelChange = (e) => {
        setCarModel(e.target.value)
    }

    const listCars = cars.map( (car, index )=> 
    <li key={index} onClick={() => handleRemoveCar(index)}>
        {car.year} {car.make} {car.model} 
    </li>)

  return (
    <div>
        <h2>List of Cars Objects</h2>
        <ul>
            {listCars}
        </ul>

        <input type="number" value={carYear}  onChange={handleYearChange}/><br />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make'/><br />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model'/><br /><br />
        <button onClick={handleAddCar}>Add New Car</button>
    </div>
  )
}

export default ArrayOfObjects