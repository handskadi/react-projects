import React from 'react'
let active = false;
const handleClick = (e) => {
    if (!active) {
        console.log(e);
        e.target.textContent = "I am active";
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        e.target.style.padding = "10px 30px";
        active=true;
        const heading3Element = document.getElementById('heading3');
        heading3Element.style.display = "none";
        //document.getElementById('heading3').target.style.display ="none";
    } else {
        e.target.textContent = "I am deactivated";
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
        e.target.style.padding = "10px 30px";
        active=false;
        const heading3Element = document.getElementById('heading3');
        heading3Element.style.display = "block";

    }
    

}


const Button = () => {
  return (
    <>
    <h2 id='heading3'>Hide me if you can!</h2>
    <button onClick={(e) => handleClick(e)}>Click me</button>
    </>
  )
}

export default Button