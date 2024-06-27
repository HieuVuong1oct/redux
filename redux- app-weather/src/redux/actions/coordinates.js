import axios from 'axios' 


export const setInput = (input) => {
    return {
        type : 'SET_INPUT',
        payload: input
    }
}

export const setLat = (lat) => {
    return {
        type : 'SET_LAT',
        payload: lat
    }
}

export const setLon = (lon) => {
    return {
        type : 'SET_LON',
        payload: lon
    }
}

export const setData = (data) => {
    return {
        type: 'SET_DATA',
        payload: data
    }
}

export const fetchDataWeather = (input) => {
    return() => {
        axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=b475a77ad1eee9360b814683bff76d02`
        )
        .then((response) => {
          const resLat = response.data[0].lat.toString();
          const resLon = response.data[0].lon.toString();
          setLat(resLat);
          setLon(resLon);
        })
        .catch((error) => console.log(error))
    }   
  }
  

