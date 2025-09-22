import { Link } from "react-router-dom"

export const Header = () => { 
    return ( <header className="bg-white shadow-md"> 
    <div className="constainer mx-auto flex justify-between items-center p-4">
        <Link to={"/"} className="text-2xl font-bold text-gray-600 hover:text-gray-800" >
        React Shop
        </Link>
        <nav>
            <Link to={"/cart"} className="text-gray-600 hover:text gray-800">
             Корзина
            
        </Link>
        </nav>

    </div>

        </header>
    )

}

