import React from 'react'

function AddButton(props) {
   return (
      <button className="add-note" onClick={props.onClick}>
         Add new note
      </button>
   )
}

export default AddButton;