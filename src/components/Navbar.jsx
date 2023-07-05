import { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(){
        setIsOpen(prev => !prev)
    }

    return (
        <header>
            <nav>
                <img 
                    onClick={toggleIsOpen}
                    className='menu-btn' 
                    src={`/images/icon-${isOpen ? "close" : "hamburger"}.svg`} 
                    alt='Menu button' 
                />
                <img className='logo' src='/images/logo.svg' alt='Logo' />
                <div className={`nav-items-background ${isOpen ? "opened" : ""}`}></div>
                <div className={`nav-items ${isOpen ? "opened" : ""}`}>
                    <a>Home</a>
                    <a>Shop</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
            </nav>
        </header>
    )
}