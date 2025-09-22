import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import {Footer} from "./components/Footer"
import { Header} from "./components/Header"
import {Home} from "./pages/Home"


export const App = () => {
  return (
    
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    <Footer />
    </Router>
    
  )
}