

import { ProductList } from '../components/ProductList'
import products from '../data/products'

export const Home = () => {
  return (
    <div className='container mx-auto p-4'>
      <ProductList products={products} />
    </div>
  )
}