import {Cart} from '../components/Cart'
export const CartPage = ({cartItems, onUpdateQuantity, onRemoveItem}) =>{
    return(
        <div className='container mx-auto p-4'>
        <Cart
        cartItems={cartItems}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}/>
        </div>
    )
}