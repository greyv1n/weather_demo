function FormHelps(props) {

    return (
        <div className="form__helps">
            <div className="form__close" onClick={props.close}><span className='from-close--x' >x</span></div>

            <div className="row" onClick={props.open}>
                <div className='col-3 '><div className="form__img"></div></div>
                <div className='col-9'>
                    <h3>Need Help?</h3>
                    <p>Click here and start chatting wiht us!</p>
                </div>
            </div>
        </div>
    )
}
export { FormHelps };