import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'
const Notes = (props) => {
  const bin=()=>{
    props.dustBin(props.id)
  }
  return (
    <>
    <div className="note">
        <p style={{position:"absolute",left:"1rem",fontSize:"1.3rem",top:"1rem", fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>{props.title}</p>
        <p style={{position:"absolute",left:"2rem",fontSize:"1.5rem",top:"40%",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>{props.content}</p>
        <DeleteIcon onClick={bin} style={{position:"absolute",bottom:"0",right:"0",fontSize:"3rem",cursor:"pointer",color:"#f5ba13"}}/>
    </div>
    </>
  )
}

export default Notes