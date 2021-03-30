import './Form.css'

function Form(props) {

    return (
        <div className='forms' onClick={()=> props.open()}>
            <div className='form__massege' >
                <div className='form__massege__header'>
                    <p className='form__massege__text'>Написать сейчас</p>
                </div>
            </div>
           
        </div>
    )
}
export { Form }