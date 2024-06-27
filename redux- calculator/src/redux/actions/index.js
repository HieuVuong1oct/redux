export const updateDisplay = (value) => {
    return {
        type: 'UPDATE_DISPLAY',
        payload: value
    }
}
export const addDisplay = (value) => {
    return {
        type: 'ADD_DISPLAY',
        payload: value
    }
}
export const resetDisplay = () => {
    return {
        type : 'RESET_DISPLAY'
    }
}

export const deleteDisplay = () => {
    return {
        type : 'DELETE_DISPLAY'
    }
}

export const calculate = () => {
    return {
        type : 'CALCULATE_DISPLAY'
    }
}

export const CB2 = () => {
    return {
        type : 'CB2_DISPLAY'
    }
}

