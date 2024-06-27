export const setIndex = (index) => {
    return{
        type: 'SET_INDEX',
        payload: index
    }
}

export const setDate = (formattedDate) => {
    return{
        type: 'SET_DATE',
        payload : formattedDate
    }
}