import { useState } from "react"

export const Cart = ({cartItems, onUpdateQuantity, onRemove, onSaveCart}) => {
    const[discountCode, setDiscountCode]= useState('')
    const[applieDiscount, setApplieDiscount]=useState(0)

    const totalPrice = cartItems.reduce((sum, item)=> sum+item.price*item.quantity,0)
    const discountPrice = totalPrice - totalPrice * appliedDiscount

    return (
        
    )
}