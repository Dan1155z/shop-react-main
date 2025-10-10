import { useState } from 'react'
import { CheckoutForm } from '../components/CheckoutForm'

export const CheckoutPage = ({ cartItems, clearCart }) => {
	const [orderSubmitted, setOrderSubmitted] = useState(false)
	const [orderData, setOrderData] = useState(null)

	const totalPrice = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)
	const discountCode = localStorage.getItem('discountCode') || ''
	const discountPercentage =
		discountCode.trim().toUpperCase() === 'SALE2025' ? 0.1 : 0
	const finalPrice = totalPrice - totalPrice * discountPercentage

	const handleCheckoutSubmit = async formData => {
		const order = {
			...formData,
			items: cartItems,
			total: finalPrice,
			data: new Date().toISOString(),
		}

		try {
			const response = await fetch('http://localhost:3001/orders', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(order),
			})
			if (!response.ok) throw new Error('Ошибка при оформлении заказа')
			const saveOrder = await response.json()
			setOrderData(saveOrder)
			setOrderSubmitted(true)
			clearCart()
			localStorage.removeItem('discountCode')
		} catch (error) {
			console.error(error)
			alert('Ошибка при оформлении заказа')
		}
	}

	if (orderSubmitted) {
		return (
			<div className='container mx-auto p-4'>
				<div className='max-w-2xl mx-auto p-6 bg-white shadow rounded text-center'>
					<h2 className='text-2xl mb-4'>Спасибо за заказ!</h2>
					<p>
						Ваш заказ успешно оформлен! Мы свяжемся с вами для подтверждения
						доставки!
					</p>
					<p className='mt-4'>Итоговая стоимость заказа: {orderData.total} ₽</p>
				</div>
			</div>
		)
	}

	return (
		<div className='container mx-auto p-4'>
			<CheckoutForm
				cartItems={cartItems}
				finalPrice={finalPrice}
				onSumbit={handleCheckoutSubmit}
			/>
		</div>
	)
}
