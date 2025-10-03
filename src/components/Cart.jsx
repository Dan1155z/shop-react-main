import { useState } from "react"

export const Cart = ({ cartItems, onUpdateQuantity, onRemove, onSaveCart }) => {
    const [discountCode, setDiscountCode] = useState('')
    const [applieDiscount, setApplieDiscount] = useState(0)

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const discountPrice = totalPrice - totalPrice * appliedDiscount

    return (
        <div>
            <h2>Ваша корзина!</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста!</p>
            ) : (
                <>
                    <div>
                        {cartItems.map(item => (
                            <div>
                                <div>
                                    <img src='' alt='' />
                                    <div>
                                        <h3></h3>
                                        <p></p>
                                    </div>
                                </div>
                                <div>
                                    <button></button>
                                    <span></span>
                                    <button></button>
                                </div>
                                <div>
                                    <button></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}