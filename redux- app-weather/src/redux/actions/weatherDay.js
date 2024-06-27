export const weatherToday = () => {
    return {
        type: 'SET_WEATHER_TODAY',
        payload: 0
    }
}

export const weatherTomorrow = () => {
    return {
        type: 'SET_WEATHER_TOMORROW',
        payload: 5
    }
}

export const weatherTomorrowAfter = () => {
    return {
        type: 'SET_WEATHER_TOMORROW_AFTER',
        payload: 13
    }
}