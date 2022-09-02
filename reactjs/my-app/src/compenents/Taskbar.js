import React, { useState } from "react"


const Taskbar = () => {
    const [state, nextstate] = useState()
    const broad = (state) => {
        if (state == 1) {
            return (
                <div className="broad1">

                </div>
            )
        }
        else if (state == 2) {
            return (
                <div className="broad2">

                </div>
            )
        }
        else if (state == 3) {
            return (
                <div className="broad3">

                </div>
            )
        }
        else if (state == 4) {
            return (
                <div className="broad4">

                </div>
            )
        }
    }
    return (
        <div>
            <div className="taskbarbox">
                <ul>
                    <li><button tyle="button" onClick={() => nextstate(1)}>Destination</button></li>
                    <li><button tyle="button" onClick={() => nextstate(2)}>Tour</button></li>
                    <li><button tyle="button" onClick={() => nextstate(3)}>Event</button></li>
                    <li><button tyle="button" onClick={() => nextstate(4)}>Book</button></li>
                </ul>
            </div>
            {broad(state)}
        </div >
    )
}

export default Taskbar
