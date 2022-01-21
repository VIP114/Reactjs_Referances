import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loding:true,
    article:{},
    error:''
}
const reducer = (state,action)=> {
    switch(action.type){
        case 'SUCCESS':
            return {
                loading: false,
                article:action.playload,
                error:''
            }
        case 'ERROR':
            return{
                loading:false,
                article:{},
                error:'Error in data faching'
            }
    }
}

const DatafachinbUseReducer = () => {
    const [state,disptach]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(resp =>{
            disptach({type:'SUCCESS',playload:resp.data})
        })
        .catch(error => {
            disptach({type:'ERROR'})
        })
    },[])
    return (
        <div>
            {state.loading ? 'loading': state.article.body}
            {state.error? state.error : null}
            
        </div>
    )
}

export default DatafachinbUseReducer
