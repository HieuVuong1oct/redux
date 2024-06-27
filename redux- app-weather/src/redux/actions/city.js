import axios from "axios";

export const setLat = (lat) => {
    return {
        type: 'SET_LAT',
        payload: lat
    }
}

export const setLon = (lon) => {
    return {
        type: 'SET_LON',
        payload: lon
    }
}

export const setIcon = (icon) => {
    return {
        type: 'SET_ICON',
        payload: icon
    }
}

export const setData = (data) => {
    return {
        type : 'SET_DATA',
        payload: data
    }
}

export const setCity = (city) => {
    return{
        type: 'SET_CITY',
        payload: city
    }
}

export const setIndex = (index) => {
    return{
        type: 'SET_INDEX',
        payload: index
    }
}
export const fetchDataCity = (lat,lon,index) => {
    return() => {
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
          setData(resList);
          const city = response.data.city;
          setCity(city);
          const iconCode = resList[index]?.weather[0].icon;
          const icon = `http://openweathermap.org/img/wn/${iconCode}.png`;
          setIcon(icon)
        })
        .catch((error) => console.log(error));
      }
    }
