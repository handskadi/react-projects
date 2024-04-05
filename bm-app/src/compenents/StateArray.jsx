import React, {useState} from 'react'

const StateArray = () => {

    const [foods, setFoods] = useState(["Apple", "Orange","Banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setFoods(f => [...f, newFood])

    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }

    const listItems = foods.map( (food, index )=> <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)  //For every list item (do this) => <li>item</li> 

  return (
    <div>
        <h2>List of Foods</h2>
        <ul>
            {listItems} 
        </ul>
        <br />
        <input type="text" placeholder='Enter Food name' id='foodInput'/>
        <button onClick={handleAddFood}> Add Food </button>
    </div>
  )
}

export default StateArray