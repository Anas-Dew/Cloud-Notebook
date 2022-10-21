import Notes from "./Notes";

export default function Home() {
  
  return (
    <>
      <h1 className='my-3 mx-1'>Add a note</h1>
      <form className='my-3'>
        <div class="mb-3">
          <label for="note-title" class="form-label">Title</label>
          <input class="form-control" id="note-title" placeholder="Write a title..." />
        </div>
        <div class="mb-3">
          <label for="note-description" class="form-label">Story</label>
          <textarea class="form-control" id="note-description" rows="3" placeholder='It was a starting of spring...'></textarea>
        </div>
        <button type="button" class="form-control btn btn-primary">Create</button>
      </form>

      <Notes/>

    </>
  )
}
