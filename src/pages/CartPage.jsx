import {Cart} from '../components/Cart'

export const CartPage= ({cartItems, onRemove}) => {
    return(
        <div className='container mx-auto p-4'>
            <Cart cartItems={cartItems} onRemove = {onRemove}/>
        </div>
    )
}
