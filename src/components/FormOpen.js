function FormOpen(props) {

    return (
        <div className="form__open">
            <div className="form__open__header">Приветствуем в чате</div>
            <div className="from__btn__line" onClick={props.close} >&mdash;</div>
            <div className="form__open__body">
                <div className="form__open__items">
                    <h6>Приветствуем в нашем «LiveChat»! Прежде чем начать чат, заполните форму ниже.</h6>
                    <form>
                        <label htmlFor='name'><span className='name__inp'>Имя:</span></label>
                        <input type="text" id='name' className='form__inp' />
                        <label htmlFor='e-mail'><span className='email__inp'>E-mail:</span></label>
                        <input type="text" id='e-mail' className='form__inp' />
                        <button type="button" className="btn btn-primary form__btn">Начать чат</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { FormOpen }