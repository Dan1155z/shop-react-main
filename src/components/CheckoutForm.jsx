import { useState } from "react"

export const CheckoutForm = ({ finalPrice, onSubmit }) => {
    const [formData, SetFormData] = useState({
        name: '',
        email: '',
        adress: '',
        PaymentMethod: 'card',
    })
    const handleChange = (e) => {
        SetFormData(prev => ({
            ...prev, [e.target.name]: e.target.value,
        }))
    }
}

const handleChange = (e) => {
    e.preventDefault()
    onSubmit(formData)
}

const handleSubmit = e => {
    e.preventDefault()
    onSubmit(formData)
}

return (
    <div className='max-w-2xl mx-auto bg-white show rounded'>
        <h2 className="text-2xl mb-4">Оформление заказа</h2>
        <p className="mb-4">Итоговая стоимость со скидкой: {finalPrice.toFixed(2)}₽</p>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label htmlFor="name" className="block mb-1 font-semibold"> Имя</label>
                <input
                    type="text"
                    name="name"
                    id='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded"
                />
            </div>

            <div>
                <label htmlFor="name" className="block mb-1 font-semibold"> Email</label>
                <input
                    type="text"
                    name="email"
                    id='email'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded" />
            </div>

            <div>
                <label htmlFor=""> Адресс</label>
                <input
                    type="text"
                    name="adress"
                    id='adress'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded" />
            </div>

            <div>
                <label htmlFor="paymentMethod"> Способ оплаты</label>
                <select
                    name="paymentMethod"
                    id="paymentMethod"
                    onChange={handleChange}
                    value={formData.PaymentMethod}
                    className="w-full border px-4 py-2 rounded">
                    <option value="card">Карта</option>
                    <option value="sbp">СБП</option>
                    <option value="cash">Наличными</option>
                </select>
                <button type='submit' className="w-full bg-green-500 text-white px-4 py-2 rounded
                hover:bg-green-600 transition-colors"> Подтвердить заказ
                </button>
            </div>
        </form>
    </div>
)