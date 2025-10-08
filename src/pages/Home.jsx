import { useEffect } from 'react'
import { ProductList } from '../components/ProductList'
import { Banner } from '../components/Banner'
import products from '../data/products'
import { useState } from 'react'

export const Home = ({ addToCart }) => {
  const [query, setQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortOption, setSortOption] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  useEffect(() => {
    let filtered = products

    if (query.trim() !== '') {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )

    }

    if (minPrice !== '') {
      filtered = filtered.filter(
        product => product.price >= parseFloat(minPrice)
      )
    }

    if (maxPrice !== '') {
      filtered = filtered.filter(
        product => product.price >= parseFloat(maxPrice)
      )
    }

    if (sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortOption === 'name-desc') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortOption === 'name-asc') {
      filtered.sort((a, b) => b.price - a.price)
    }
    setFilteredProducts(filtered)
  }, [query])

  return (
    <div className='container mx-auto p-4'>
      <Banner />
      <div className='container mx-auto p-4'>
        <h2 className='text-2xl mb-4 text-center'>Фильтрация</h2>
        <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <label className="block text-gray mb-1" htmlFor='search'>Поиск</label>
            <input
              id='search'
              type="text"
              placeholder='Введите название'
              value={query} onChange={e => setQuery(e.target.value)}
              className='w-full px-4 py-2 border rounded focus:outline-none
            focus:ring-2 focus:ring-blue-400' />
          </div>
        </div>

        <div className='flex space-x-2'>
          <div className='w-1/2'>
            <label htmlFor="minSpace" className='block text-gray-700 mb-1'>От</label>
            <input type="number"
              placeholder='0'
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              id='minPrice'
              className='w-full px-4 py-2 border rounded rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div>
            <label htmlFor="maxSpace" className='block text-gray-700 mb-1'>До</label>
            <input type="number"
              id='maxPrice'
              placeholder='Макс'
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className='w-full px-4 py-2 border rounded rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
        </div>
        <div>

          <label className='block text-gray-700 mb-1' htmlFor="sort">Сортировка
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className='w-full px-4 py-2 border rounded rounded focus:outline-none focus:ring-2 focus:ring-blue-400'>
            <option value="">Сортировать</option>
            <option value="price-asc">Цена: По возрастанию</option>
            <option value="price-desc">Цена: По убыванию</option>
            <option value="name-asc"> Название: А(F)-Я(Z)</option>
            <option value="name-desc">Название: Я(Z)-А(A)</option>
          </select>
        </div>
      </div>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  )
}