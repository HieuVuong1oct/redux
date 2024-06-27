const counterReducer = (state='0' , action) => {
    switch(action.type){
        case 'UPDATE_DISPLAY':
            return action.payload ;
        case 'ADD_DISPLAY':
            return state + action.payload;
        case 'RESET_DISPLAY':
            return '0';
        case 'DELETE_DISPLAY':
            return  state.toString().slice(0,-1);
        case 'CALCULATE_DISPLAY':
            let newDisplay = state.toString().replace(/x/g,'*');
            newDisplay = newDisplay.replace(/\^2/g,'**2');
            newDisplay = newDisplay.replace(/--/g, '+');
            newDisplay = newDisplay.replace(/\+\+/g, '+');
            return eval(newDisplay);
        case 'CB2_DISPLAY':
            return Math.sqrt(eval(state)).toString();
        default:
            return state;
    }
};
 export default counterReducer;