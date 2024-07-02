import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {setLat, setLon, setData, setCity, setIcon, setIndex ,setDate, setInput} from '../../redux/actions'

import Main from "./main";

function App(){
    const {input, city, lat, lon, icon, data, index , date} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData =() => {
     
         axios
           .get(
             `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=b475a77ad1eee9360b814683bff76d02`
           )
           .then((response) => {
             const resLat = response.data[0].lat.toString();
             const resLon = response.data[0].lon.toString();
             dispatch(setLat(resLat));
             dispatch(setLon(resLon));
           })
           .catch((error) => console.log(error));
         }
         
         if(input !== ''){
           getData();
         }
         
       }, [input,dispatch]);



       useEffect(() => {
        const getCoordinate = () => {
         axios
           .get(
             `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0322ef11d2cadcd44625773b4c6a2427`,
             {
               params: {
                 units: "metric",
               },
             }
           )
           .then((response) => {     
             const resList = response.data.list;
             dispatch(setData(resList));
             const city = response.data.city;
             dispatch(setCity(city));
             const iconCode = resList[index]?.weather[0].icon;
             const icon = `http://openweathermap.org/img/wn/${iconCode}.png`;
             dispatch(setIcon(icon));
           })
           .catch((error) => console.log(error));
         }
         if (lat !== '' && lon !== '') {
           getCoordinate();
         }
       }, [lat, lon, index,dispatch]);



var options = {
    timeZone: "Asia/Ho_Chi_Minh", 
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  var formatter = new Intl.DateTimeFormat("vi-VN", options);


  useEffect(() => {
    let time = new Date();
    let formattedDate;
    if (index === 0) {
      
      formattedDate = formatter.format(time);
    } else if (index === 5) {
      
      time.setDate(time.getDate() + 1);
      formattedDate = formatter.format(time);
    } else if (index === 13) {
     
      time.setDate(time.getDate() + 2);
      formattedDate = formatter.format(time);
    }
    dispatch(setDate(formattedDate));
  }, [index,dispatch]);


  const weatherToday = () => {
    dispatch(setIndex(0));
  }
  const weatherTomorrow = () => {
    dispatch(setIndex(5));
  }
  const weatherTomorrowAfter = () => {
    dispatch(setIndex(13));
  }

  var indexData = data[index];
  return (
      <Main 
      input={input} 
      setInput={(value) => dispatch(setInput(value))} 
      lat={lat} 
      lon={lon} 
      weatherToday={weatherToday} 
      weatherTomorrow={weatherTomorrow} 
      weatherTomorrowAfter={weatherTomorrowAfter} 
      city={city}
      index={index} 
      icon={icon}
      date={date}
      indexData={indexData}
      />
  )

}
export default App;
