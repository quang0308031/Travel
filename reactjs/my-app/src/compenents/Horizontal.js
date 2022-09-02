import React, { useState } from "react"


const Horizontal = () => {

    const [search, setsearch] = useState()
    const result = () => {
        console.log(search)
    }
    const can = (height, width) => {
        let style = { height: height + "px", width: width + "px" }
        return style
    }
    return (
        <div>
            <div className="menu">
                <ul>
                    <b>

                        <li><a href="https://travel.com.vn/">Travel</a></li>
                        <li><a href="#">Tour</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                    </b>
                </ul>
            </div>
            <div className="search">
                <ul>
                    <img src={require("../logo/user.png")} height={"40px"} />
                    <b>

                        <li><button type="button" style={can(35, 80)} onClick={() => { result() }}>Search</button></li>
                        <li><input type="search" placeholder="Search..." style={can(35, 300)} onChange={(event) => setsearch(event.target.value)}></input></li>

                    </b>

                </ul>
            </div>
        </div >

    )
}

export default Horizontal