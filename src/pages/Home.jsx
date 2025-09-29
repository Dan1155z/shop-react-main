

import { ProductList } from '../components/ProductList'
import products from '../data/products'

export const Home = ({addToCart}) => {
  return (
    <div className='container mx-auto p-4'>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  )
}