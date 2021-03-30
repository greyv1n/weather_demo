import {Form} from '../components/Form'
import {FormHelps} from '../components/FormHelps'
import {FormOpen} from '../components/FormOpen'

import React, {useState} from 'react'

function FormList() {
    const [formHelp, setFormHelp] = useState('');
    const [formOpen, setFormOpen] = useState('hide');
    const [form, setFrom] = useState('');

    function openForm() {
        closeFromHelp();
        hideForm();
        formOpen === 'hide' ? setFormOpen('') : setFormOpen('hide');
    }

    function closeFromHelp() {
        if(formHelp !== 'hide') setFormHelp('hide');
    }

    function hideForm() {
        form === '' ? setFrom('hide') : setFrom('');
    } 

    return(
        <>  
            <div className={formOpen}><FormOpen close={openForm}/></div>
            <div className={formHelp}><FormHelps close={closeFromHelp} open={openForm}/></div>
            <div className={form}><Form open={openForm}/></div>
        </>
    )
}
export {FormList};