import React from 'react'
import Image from 'next/image'
import logo from '../../public/DagmarTech.svg'
import MainMenu from '../navigation/MainMenu'

const Header = () => (
    <header>
        <MainMenu />
        <div className="logo">
            <Image src={logo} alt='Logo'/>
        </div>    
    </header>
)


export default Header
