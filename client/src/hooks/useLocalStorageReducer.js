import { useReducer, useEffect } from 'react';
import axios from 'axios';

function useLocalStorageReducer(defaultVal, reducer) {

    const [state, dispatch] = useReducer(reducer, defaultVal);
    useEffect(()=>{
        axios.get('/api/todos')
        .then(response => console.log(response.data))
        .catch(e => console.log(e))
    },[]);
   
    return [state, dispatch]
}

export {useLocalStorageReducer};