import React,{useEffect,useState} from 'react'

function Useeffect() {
 const[content, setContent] = useState('Hello Dssd')
    useEffect(()=>{
        console.log('componentDidMount')
    },[])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/'+content)
    .then(response => response.json())
    .then(response => console.log(json))

console.log('componentDidUpdate')
  return ()=>{
    console.log('Unmount')
  }
},
[content])
 return (
    <div>
      <button onClick={()=>setContent('posts')}>Post</button>
    </div>
  )
}

export default Useeffect
