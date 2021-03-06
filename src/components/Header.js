import './Header.css'
import cityArr from '../city.json'

function Header(props) {
    const link = props.link;

    return (
        <>
            <header className='header'>
                <div className="container" >
                    <div className="row  align-items-center">
                        <div className="header__logo col-2">Weather<span className='header--color'>Info</span></div>

                        <div className='header__nav col-10'>
                            {cityArr.map((item, index) => index < 5
                                ? <nav key={item.id} className='header__link'>{item.name}</nav>
                                : null)}
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export { Header };