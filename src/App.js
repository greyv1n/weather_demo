import {Header} from './components/Header'
import {Search} from './components/Search'
import {MainList} from './containers/MainList'
import {Footer} from './components/Footer'
import {FormList} from './containers/FormList'

import React, { useEffect, useState } from 'react'
import {Context} from './Context'
import { LAT_START, LOT_START, NAME_CITY_START} from './config'


function App() {
  const [lat, setLat] = useState(LAT_START);
  const [lon, setLon] = useState(LOT_START);
  const [city, setCity] = useState(NAME_CITY_START)
  const [dataApi, setDataApi] = useState({});
  const [stateBurger, setStateBurger] = useState('hide');

  const data = {
    handleClickCity,
    showBurger,
    stateBurger,
    dataApi,
    city,
  }

  function handleClickCity(item) {
    setLat(item.coord.lat);
    setLon(item.coord.lon);
    setCity(item.name)
  }

  function showBurger() {
    setStateBurger(stateBurger === 'hide' ? '' : 'hide');
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=7066d31e3c3b044909f4917983208f28`)
    .then(data=> data.json())
    .then(data => setDataApi(data))
  }, [lat, lon])

  return (
    <Context.Provider value={data}>
      <Header />
      <Search />
      <MainList />
      <FormList />
      <Footer />
    </Context.Provider>
  );
}

export default App;
