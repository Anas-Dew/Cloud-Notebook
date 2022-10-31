import AddNote from "./AddNote";
import Notes from "./Notes";

export default function Home(props) {
  const {showAlert} = props
  return (
    <>
      
      <AddNote/>
      <Notes showAlert={showAlert}/>

    </>
  )
}
