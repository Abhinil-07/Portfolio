import React from 'react'
import profile from "./x dp.jpg"

const Navba = () => {
  return (
    <div>
        {/* <!-- component --> */}
<header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
    {/* <!-- logo --> */}
    <h1 className="w-3/12">
        <a href="https://flowbite.com/">
         <img src={profile} alt="" />
        </a>
    </h1>

    {/* <!-- navigation --> */}
    <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <a href="">Accueil</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Produits</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Collections</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Contact</a>
            </li>
        </ul>
    </nav>

    {/* <!-- buttons ---> */}
    <div className="w-3/12 flex justify-end">
        <a href="">
            <button className='className="h-8 p-1 hover:text-green-500 duration-200" aria-hidden="true" focusable="false"'></button>
        </a>
        
    </div>
</header>
    </div>
  )
}

export default Navba