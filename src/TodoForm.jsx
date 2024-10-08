import { useState } from "react"


function TodoForm(props) {
    const [newItem, setNewItem]= useState(" ")
    
    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return 

        props.onSubmit(newItem)
        setNewItem("")
      }
    return (
        <form onSubmit={handleSubmit} className="new-item-form"> {/* onSubmit={handleSubmit()}*/}
        <div className="form-row">
          <label htmlFor="item">
            New Item
          </label>
          <input type="text" value={newItem} onChange = {e => setNewItem(e.target.value)} id="item"/>
        </div>
        <button type = "submit" className="btn">Add</button>
      </form>
    )
}

export default TodoForm