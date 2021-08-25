import React, {useState} from 'react'
import AddButton from './AddButton'
import Header from './Header'
import NoteContainer from './NoteContainer'


function Container() {

   const initialNotes = JSON.parse(localStorage.getItem('notes'));

   const [notes, setNotes] = useState(initialNotes || []);
   

   function createNewDate() {
      const date = new Date();
      const time = date.toLocaleTimeString();
      const day = date.toLocaleDateString('en-GB');
      return `${day} ${time}`;
   }

   function addNote() {
      const tmp = [...notes];
      const date = createNewDate();
      tmp.push({
         content:'',
         date: date
      });
      localStorage.setItem('notes', JSON.stringify(tmp));
      setNotes(tmp);
   }

   function deleteNote(idx) {
      const tmp = [...notes];
      tmp.splice(idx,1);
      setNotes(tmp);
      localStorage.setItem('notes', JSON.stringify(tmp));
      // console.log(tmp);
   }

   const renderNote = (item, idx) => {
      return <NoteContainer 
         idx={idx} 
         date={item.date} 
         onDelete={() => deleteNote(idx)}
      />
   }

   return (
      <div className="container">
         <Header/>
         <AddButton onClick={addNote}/>
         {notes.map(renderNote)}
      </div>
   )
}

export default Container
 