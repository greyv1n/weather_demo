import '../components/Main.css'
import { MainRight } from '../components/MainRight'
import {MainLeft} from '../components/MainLeft'

import React, { useContext } from 'react'
import { Context } from '../Context'

function MainList() {
    const context = useContext(Context);
    if (Object.keys(context.dataApi).length === 0) return null;

    const dataDaily = context.dataApi.daily;
    const dataCurrent = context.dataApi.current;
    const city = context.city;

    return (
        <div className='main'>
            <div className="container">
                <div className="row">
                    <div className="main__left col-md-5 col-12">
                        <div className="row justify-content-center">
                            <MainLeft  {...dataCurrent} city={city}/>
                        </div>
                    </div>
                    <div className="main__right col-md-7 col-12">
                        <div className="row justify-content-start">
                            {dataDaily === undefined ? null : dataDaily.map((item, index) => index > 0 && index < 5 ? <MainRight key={index} {...item} /> : null)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainList };