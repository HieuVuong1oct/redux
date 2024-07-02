export const setInput = (input) => {
    return {
        type : 'SET_INPUT',
        payload: input
    }
}

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

export const setDate = (date) => {
    return{
        type: 'SET_DATE',
        payload : date
    }
}

