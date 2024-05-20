import './App.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Notes from './Notes';
import { useState } from 'react';
function App() {
  const [note ,setNote]=useState([])
  const passEvent=(Data)=>{
      setNote((oldItems)=>{
         return [...oldItems,Data]
      })
    
  }
  const eventFire=(id)=>{
    setNote((oldItems)=>{
     return oldItems.filter((currEle,index)=>{
       return index!=id
     })
    })
}
  return(
<>
    <div className="header">
      <Header/>
    </div>
    <Note clicked={passEvent} />
    <div className="mainNote" style={{display:"flex"}}>

    {note.map((ele,index)=>{
        return (<Notes   key={index} id={index} title={ele.title} content={ele.text} dustBin={eventFire} />)
    })}
    </div>
    <Footer/>
</>

  
  )  
}

export default App;
