import React, { useState } from "react"

const Bigevent = () => {

    const [state, nextstate] = useState()
    const listevent = (state) => {
        if (state == 1 || state == null) {
            return (
                <div className="event">
                    <div className="News">
                        <a href="..."><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News">
                        <a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News" id="new9">
                        <a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"270px"} width={"381px"}></img></a>
                    </div>
                </div>
            )
        }
        else if (state == 2) {
            return (
                <div className="event">
                    <div className="News">
                        <a href="..."><img src={require("../logo/user.png")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News">
                        <a href="#"><img src={require("../logo/user.png")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News" id="new9">
                        <a href="#"><img src={require("../logo/user.png")} height={"270px"} width={"381px"}></img></a>
                    </div>
                </div>
            )
        }
        else if (state == 3) {
            return (
                <div className="event">
                    <div className="News">
                        <a href="..."><img src={require("../logo/download.png")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News">
                        <a href="#"><img src={require("../logo/download.png")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News" id="new9">
                        <a href="#"><img src={require("../logo/download.png")} height={"270px"} width={"381px"}></img></a>
                    </div>
                </div>
            )
        }
        else if (state == 4) {
            return (
                <div className="event">
                    <div className="News">
                        <a href="..."><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News">
                        <a href="#"><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")} height={"270px"} width={"381px"}></img></a>
                    </div>
                    <div className="News" id="new9">
                        <a href="#"><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")} height={"270px"} width={"381px"}></img></a>
                    </div>
                </div>
            )
        }

    }
    return (
        <div>
            <div className="title1">

                <h1>Big Event</h1>
            </div>

            {listevent(state)}

            <div className="menu">
                <ul>
                    <li><button tyle="button" onClick={() => nextstate(1)}></button></li>
                    <li><button tyle="button" onClick={() => nextstate(2)}></button></li>
                    <li><button tyle="button" onClick={() => nextstate(3)}></button></li>
                    <li><button tyle="button" onClick={() => nextstate(4)}></button></li>
                </ul>
            </div>

        </div>

    )
}

export default Bigevent