import React from 'react'
import { useState } from 'react'
const Note = (props) => {
  const [Data,setData]=useState({
    title:"",
    text:""
  })
  const changeable=(e)=>{
    const {value,name}=e.target
    setData((prevItems)=>{
      return{
        ...prevItems,
        [name]:value
      }
    })
  }
  const submitted=(e)=>{
    e.preventDefault()

    props.clicked(Data)
    setData({
      title:"",
      text:""
    })
  }
  return (
    <>
    <div className="main-note">
        <form>

            <input type="text" placeholder='Title' name='title' value={Data.title} onChange={changeable}/>
            <textarea placeholder='Write Your Note...' name='text' value={Data.text} onChange={changeable}></textarea>
            <button onClick={submitted}><p>+</p></button>

        </form>
        </div>
    </>
  )
}

export default Note