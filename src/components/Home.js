import AddNote from "./AddNote";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";
export default function Home(props) {
  const navigate = useNavigate();

  const {showAlert} = props

  const run = () => {
    if (localStorage.getItem('token')) {
      console.log('d');
    } else {
      navigate('/login')
    }
  }
  return (
    <>
      
      <AddNote/>
      <Notes showAlert={showAlert}/>

    </>
  )
}
