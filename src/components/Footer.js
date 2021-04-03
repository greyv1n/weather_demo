import './Footer.css'

function Footer() {

    return (
        <footer className='footer'> 
            <div className="container">
                <div className="row align-items-center" >
                    <div className="footer__logo col-12 col-sm-4 col-md-3 col-lg-2">Weather<span className='footer--color'>Info</span></div>
                    <div className='footer__item col-12 col-sm-8'>© 2021 |  Privacy policy</div>
                </div>
            </div>
        </footer>
    )
}

export { Footer };