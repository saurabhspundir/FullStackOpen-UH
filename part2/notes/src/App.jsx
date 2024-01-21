import { useState } from 'react'
import Note from './components/Note'

const App = ( props) => {
  const [notes, setNotes]=useState(props.notes)
  const [newNote,setNewNotes]=useState('')
  const [showAll, setShowAll]=useState(true)
  
  const addNotes=(event)=>{
    event.preventDefault()
    const noteObject={
      content:newNote,
      id:notes.length+1,
      important: Math.random()<0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }
  const handleNoteChange= (event)=>{
    setNewNotes(event.target.value)
  }
  const notesToShow=   showAll?notes:notes.filter(note=>note.important)
  

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNotes}>
      <input value={newNote} onChange={handleNoteChange}/>
      <button type = "submit">Submit</button>
      </form>  
    </div>
  )
}

export default App