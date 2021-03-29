import './Footer.css'

function Footer() {

    return (
        <footer className='footer'> 
            <div className="container">
                <div className="row align-items-center" >
                    <div className="footer__logo col-2">Weather<span className='footer--color'>Info</span></div>
                    <div className='footer__item col-10'>© 2021 |  Privacy policy</div>
                </div>
            </div>
        </footer>
    )
}

export { Footer };