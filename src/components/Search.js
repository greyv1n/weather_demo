import './Search.css'

function Search() {

    return (
        <div className='search'>
            <div className="container" >
                <div className="row align-items-center">
                    <div className="col-5">
                        <input type="text" className='search__input' placeholder="Поиск" />
                    </div>
                    <div className='search__add col-7'>
                        <div className='search__btn'><span className='search_btn_item'>+</span></div>
                        <div className='search__title'>Add location</div>
                        <div className='search__subtitle'>Did you know you can add favourite locations?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Search };