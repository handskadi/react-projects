import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=> {
        document.title = `Count: ${count} -  ${color}`;
    },[count, color]);

    function handleAdd(){
        setCount(c => c + 1);
    }
    function handleSubstruct(){
        setCount(c => c - 1);
    }
    function handleChangeColor(){
        setColor(c => c === "green"? "red" : "green")
    }

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect( () => {
        window.addEventListener("resize", handleResize)
        console.log("Event Listener Added")

        return ( () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event Removed")
        } )
    }, [])
  return (
    <div>
        <h2>UseEffect</h2>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubstruct}>Substruct</button>
        <button onClick={handleChangeColor}>Change color</button>
        <p>{width}px x {height}px</p>
    </div>
    
  )
}

export default UseEffect