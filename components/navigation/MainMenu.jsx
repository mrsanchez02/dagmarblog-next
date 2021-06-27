import React from 'react'
import Link from 'next/link'

const MainMenu = () =>  (
    <nav>
        <ul className='banner'>
            <li className="banner__item"><p className="banner__title"><Link href='/'>Inicio</Link></p></li>
            <li className="banner__item"><p className="banner__title"><Link href='/about'>Acerca de</Link></p></li>
            <li className="banner__item"><p className="banner__title"><Link href='/contact'>Contactanos</Link></p></li>
        </ul>
    </nav>
)

export default MainMenu
