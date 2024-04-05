import React, { useState } from 'react'

const OnChange = () => {
    const [name, setName] = useState("product name")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("Visa")
    const [shipping, setShipping] = useState("Pick up")
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value)
    }
  return (
    <div>
        <h2>Product : {name}</h2>
        <input type="text" value={name} onChange={handleNameChange}/>

        <h2>Quantity : {quantity}</h2>
        <input type="number" value={quantity} onChange={handleQuantityChange}/>

        <h2>Comment : {comment}</h2>
        <textarea value={comment} onChange={handleCommentChange} placeholder='Please enter a comment!'/>
        
        <h2>Payment : {payment}</h2>
        <select type="number" value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Paypal">Paypal</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Visa">Visa</option>
            <option value="Cash">Cash</option>
        </select>

        <h2>Shipping : {shipping}</h2>
        <label for="shipping">
            <input type="radio" name="shipping" id="shipping" value="Pick up" 
            checked={shipping === "Pick up"} onChange={handleShippingChange} />
            Pick up
        </label><br />
        <label for="shipping">
            <input type="radio" name="shipping" id="shipping" value="Delivery" 
            checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
        </label>
        
    </div>
  )
}

export default OnChange