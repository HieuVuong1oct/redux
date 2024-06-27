import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateDisplay,addDisplay, resetDisplay,deleteDisplay, calculate, CB2  } from '../../redux/actions';
import Display from '../../components/Display/displayCal';
import NumberMap from '../../components/NumberMap/numberMap';
import './App.css'

function App() {
    const display = useSelector(state => state);
    
    const dispatch = useDispatch();
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'+','-','/','%','x','^2','AC','DEL','=','CB2'];
    
    const handleNumberClick = (number) => {
      if(display === '0'){
        dispatch(updateDisplay(number.toString()))
      }
      else if(number === 'AC'){
        dispatch(resetDisplay());
      }else if(number === 'DEL'){
        dispatch(deleteDisplay());
      }else if(number === '='){
        dispatch(calculate());
      }else if(number === 'CB2'){
        dispatch(calculate());
        dispatch(CB2());
      }else{
        dispatch(addDisplay(number.toString()))
      }
      }

    return (
       
          <div className="maytinh p-3 border border-secondary m-5">
      <Display displayValue={display}/>
      <NumberMap numbers={numbers} onClick={handleNumberClick}/>
    </div>
       
    );
}

export default App;
