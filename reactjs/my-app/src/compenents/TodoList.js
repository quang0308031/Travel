import React, { useState } from "react";


const TodoList = () => {
    const click = (event) => {
        console.log("Dep trai")
    }
    const [name, setname] = useState()
    return (
        <div>
            <label>Name</label>
            <input value={name} type="text" onChange={(event) => setname(event.target.value)} />
            <button type="buttom" onClick={(event) => click(event)}>submit</button>
            <p>Ten may la {name}</p>
        </div >

    )
}

export default TodoList