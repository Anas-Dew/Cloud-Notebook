import AddNote from "./AddNote";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";
export default function Home(props) {
  const navigate = useNavigate();

  const { showAlert } = props

  const run = () => {
    if (localStorage.getItem('token')) {
      console.log('d');
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      
      <button type="button" class="btn btn-primary d-flex align-self-center" data-bs-toggle="modal" data-bs-target="#AddNoteModal">Add a note</button>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="AddNoteModal" tabindex="-1" aria-labelledby="AddNoteModal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h1 class="modal-title fs-5" id="AddNoteModal"></h1> */}
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <AddNote />
            </div>
            {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
      <Notes showAlert={showAlert} />

    </>
  )
}
