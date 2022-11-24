import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <header class="bg-green-200 text-gray-600 body-font border-green-500 border-b-2">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
                <FontAwesomeIcon icon="fa-light fa-leaf" />
                <span class="ml-3 text-2xl">ProLeafic</span>
            </Link>
            <nav
                class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                <Link class="mr-5 hover:text-black" to="/crisis-aversion">Crisis Aversion</Link>
                <Link class="mr-5 hover:text-black" to="/">Diagnostic Test</Link>
                <Link class="mr-5 hover:text-black" to="/diseases">Disease</Link>
                <Link class="mr-5 hover:text-black" to="/pests">Pest</Link>
                <Link class="mr-5 hover:text-black" to="/" >Scanner</Link>
            </nav>
            <Link to="/about"
                class="inline-flex items-center bg-green-300 border-green-500 border-2 py-1 px-3 focus:outline-none hover:bg-green-400 hover:text-black rounded text-base mt-4 md:mt-0 text-bold">
                About us
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </Link>
        </div>
    </header>
  )
}
