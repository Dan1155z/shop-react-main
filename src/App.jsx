import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { CartPage } from './pages/CartPage'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { PurShareHistory } from './pages/PushareHistory'
import { CheckoutPage } from './pages/CheckoutPage'

export const App = () => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = product => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => {
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        })
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prev => {
      prev.map(item => {
        item.id === id ? { ...item, quantity: newQuantity } : item
      })
    })
  }

  const handleRemoveItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} />} />
          <Route
            path='/cart'
            element={<CartPage cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onRemove={onRemove} />}
          />
          <Route
            path='/product/:id'
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route path='checkout' element={<CheckoutPage cartItems={cartItems} />} />
          <Route path='/orders' element={<PurShareHistory />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}