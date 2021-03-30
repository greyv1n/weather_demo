import { MONTH, DAYS_WEEK } from '../config';


function MainLeft(props) {
    const months = MONTH;
    const daysWeek = DAYS_WEEK;
    const city = props.city;

    const unixTime = props.dt;
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const days = daysWeek[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const temp = Math.floor(+props.temp - +273);
    const realFeel = Math.floor(+props.feels_like - 273);
    const imageId = props.weather[0].icon;
    const imageUrl = `https://openweathermap.org/img/wn/${imageId}@2x.png`;
    const imageDescription = props.weather[0].description;

    return (
        <>
            <div className='main__header col-7'>
                <h1 className='main__title'>{city}</h1>
                <div className='main__time'>Time &nbsp;
                    {hours < 10 ? '0' + hours : hours}:
                    {minutes < 10 ? '0' + minutes: minutes}
                </div>
            </div>
            <div className='main__left__items col-5' >
                <div className='main__day'>{days.toUpperCase()}</div>
                <div>{month} {year}</div>
                <div className='main__wrap__temp'>
                    <img src={imageUrl} alt={imageDescription} className='main__left__img' />
                    <span className='main__left__temp'>{temp} °</span>
                </div>
                <div>Real feel {realFeel}</div>
            </div>
        </>
    )
}

export { MainLeft }