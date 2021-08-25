import React from 'react'
import {useState} from 'react'
import marked from 'marked'

function NoteContainer({idx, date, onDelete}) {

   const initialNotes = JSON.parse(localStorage.getItem('notes'));
   const [notes, setNotes] = useState(initialNotes || []);
   const [edit, setEdit] = useState(false);
   const [content, setContent] = useState(notes[idx].content);
   
   function changeEdit() {
      const tmp = [...notes];
      tmp[idx].content = content;
      setNotes(tmp);
      localStorage.setItem('notes', JSON.stringify(tmp));
      setEdit(!edit);
   }

   function updateContent(event) {
      const newContent = event.target.value;
      setContent(newContent);
   }

   function NoteButton() {
      return(
         <div className="note-button">
            <button onClick={changeEdit}>
               {
                  edit? 
                  (<i class="far fa-check-square fa-lg"></i>)
                  :(<i class="fas fa-edit fa-lg"></i>)
               }
               </button>
            <button onClick={onDelete}><i class="fas fa-trash-alt fa-lg"></i></button>
         </div>
      )
   }

   function NoteHeader() {
      
      return (
         <div className="note-header">
            {date}
            <NoteButton/>
         </div>
      )
   }
   
   function getMarkDown() {
      const rawMarkup = marked(content || '', {sanitize: true});
      return {__html: rawMarkup};
   } 

   return (
      <div className="note-container">
         <NoteHeader/>
         <>
            { edit? 
               ( 
                  <textarea 
                     type="text" 
                     className="note-body" 
                     onChange={updateContent} 
                     value={content}>
                  </textarea> 
               ) : 
               ( 
                  <div 
                     className="note-body" 
                     dangerouslySetInnerHTML={getMarkDown()} 
                  />
               )
            }
         </>
      </div>
   )
}

export default NoteContainer
