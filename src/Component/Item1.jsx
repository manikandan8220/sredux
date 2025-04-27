import {createStore} from 'react'

function Item1() {
    const initialstate ={
        counter :0,
    }

    const counterreducer = (state =initialstate,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return {counter : state.counter +1};
            case 'DECREMENT':
                return {counter : state.counter -1};
            default :
                return state;   
        }
    }
}
    const store =createStore (counterreducer)
export default Item1