import { DAYS_WEEK } from '../config';
import './Main.css'

function MainRight(props) {
    const daysWeek = DAYS_WEEK;

    const unixTime = props.dt;
    const time = new Date(unixTime * 1000);
    const days = daysWeek[time.getDay()];

    const imageId = props.weather[0].icon;
    const imageUrl = `https://openweathermap.org/img/wn/${imageId}@2x.png`;
    const imageDescription = props.weather[0].description;

    const tempMax = Math.floor(+props.temp.max - 273);
    const tempMin = Math.floor(+props.temp.min - 273);
    const realFeel = Math.floor(+props.dew_point - 273);
    
    return (
        <div className="main__right__item col-3">
            <ul className='main__list '>
                <li>{days.toUpperCase()}</li>
                <li><img src={imageUrl} alt={imageDescription} className='main__img'/></li>
                <li>Max {tempMin} °</li>
                <li>Min {tempMax} °</li>
                <li>Real feel {realFeel} °</li>
            </ul>
        </div>
    )
}

export { MainRight }