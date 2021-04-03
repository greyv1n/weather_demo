import './Header.css'
import cityArr from '../city.json'

import React, {useContext} from 'react'
import {Context} from '../Context'

function Header() {
    const context = useContext(Context);

    return (
        <>
            <header className='header'>
                <div className="container" >
                    <div className="row  align-items-center">
                        <div className="header__logo col-2 col-md-3">Weather<span className='header--color'>Info</span></div>

                        <div className='header__nav col-10 col-md-9'>
                            {cityArr.map((item, index) => index < 5
                                ? <nav key={item.id} 
                                        className='header__link'
                                        onClick={() => context.handleClickCity(item)}
                                >{item.name}</nav>
                                : null)}
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export { Header };