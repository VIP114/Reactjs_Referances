import React,{useState,useEffect} from 'react'


function UsestateFunction() {

    const[count,setadd]= useState(0)
    const[text,setText]= useState("this is text")
    const[info,setInfo]= useState({name:'',email:''})
    const[articles,setArticles]=useState(['Article 1','Article 2','Article 3'])
    
    const addArticle = () =>{
        setArticles([...articles,'new article'])
    }

    useEffect(()=>{
        console.log("UseEffect is called");
        // document.title("hi")
    },[count])

    return (
        <div>
            <br />
            <h2>{count}</h2>
            <button onClick={()=> setadd(count+1)} className='btn btn-primary'>Add</button>
            <h2>{text}</h2>
            <button onClick={()=> setText("The text is changed")} className='btn btn-primary'>Change text</button>
            
            <input type="text" className='form-control mt-1' value={info.name} placeholder="enter your name" onChange={e => setInfo({...info ,name:e.target.value })} />
            <input type="text" className='form-control mt-1' value={info.email} placeholder="enter your name" onChange={e => setInfo({...info, email:e.target.value})} />
            <h2>Name is :{info.name}</h2>
            <h2>Email is :{info.email}</h2>
            <br />
            <br />
            {articles.map(article=>{
                return <h2 key={article}>{article}</h2>
            })}

            <button onClick={addArticle} className='btn btn-primary'>Add Article</button>

            
                
        </div>
    )
}

export default UsestateFunction
