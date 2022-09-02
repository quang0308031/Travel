import React, { useState } from "react"



const Promotitional = () => {


    const [location, nextlocation] = useState()
    const [state, nextstate] = useState()

    const listDestination = (location) => {
        if (location == 2) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")}></img></a></li>
                </div>
            )
        }
        else if (location == 3) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"530px"}></img></a></li>
                </div >
            )
        }
        else if (location == 4) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/R.jfif")}></img></a></li>
                </div>
            )
        }
        else {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")}></img></a></li>
                </div>
            )
        }
    }
    const listTour = (location) => {
        if (location == 6) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")}></img></a></li>
                </div>
            )
        }
        else if (location == 7) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"530px"}></img></a></li>
                </div >
            )
        }
        else if (location == 8) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/R.jfif")}></img></a></li>
                </div>
            )
        }
        else {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")}></img></a></li>
                </div>
            )
        }
    }
    const listPlaneHotel = (location) => {
        if (location == 10) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")}></img></a></li>
                </div>
            )
        }
        else if (location == 11) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"530px"}></img></a></li>
                </div >
            )
        }
        else if (location == 12) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/R.jfif")}></img></a></li>
                </div>
            )
        }
        else {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")}></img></a></li>
                </div>
            )
        }
    }
    const listTourBusHotel = (location) => {
        if (location == 14) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")}></img></a></li>
                </div>
            )
        }
        else if (location == 15) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"530px"}></img></a></li>
                </div >
            )
        }
        else if (location == 16) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/R.jfif")}></img></a></li>
                </div>
            )
        }
        else {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")}></img></a></li>
                </div>
            )
        }
    }
    const listHotel = (location) => {
        if (location == 18) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/logo-ao-lop-hinh-may-bay-dep.jpg")}></img></a></li>
                </div>
            )
        }
        else if (location == 19) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")} height={"530px"}></img></a></li>
                </div >
            )
        }
        else if (location == 20) {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/R.jfif")}></img></a></li>
                </div>
            )
        }
        else {
            return (
                <div className="fixbox">
                    <li><a href="#"><img src={require("../logo/kisspng-airplane-aircraft-logo-bay-5b4f0f3cc416f9.1435969215319079008032.jpg")}></img></a></li>
                </div>
            )
        }
    }
    const information = (state) => {
        console.log(location, state)
        if (state == 1 || state == null) {
            return (
                <div>
                    {listDestination(location)}
                    <div className="menu">
                        <ul>
                            <li><button tyle="button" onClick={() => nextlocation(1)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(2)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(3)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(4)}></button></li>
                        </ul>
                    </div>
                </div>

            )
        }
        else if (state == 2) {
            return (
                <div>
                    {listTour(location)}
                    <div className="menu">
                        <ul>
                            <li><button tyle="button" onClick={() => nextlocation(5)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(6)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(7)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(8)}></button></li>
                        </ul>
                    </div>
                </div>

            )
        }
        else if (state == 3) {
            return (
                <div>
                    {listPlaneHotel(location)}
                    <div className="menu">
                        <ul>
                            <li><button tyle="button" onClick={() => nextlocation(9)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(10)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(11)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(12)}></button></li>
                        </ul>
                    </div>
                </div>

            )
        }
        else if (state == 4) {
            return (
                <div>
                    {listTourBusHotel(location)}
                    <div className="menu">
                        <ul>
                            <li><button tyle="button" onClick={() => nextlocation(13)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(14)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(15)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(16)}></button></li>
                        </ul>
                    </div>
                </div>

            )
        }
        else if (state == 5) {
            return (
                <div>
                    {listHotel(location)}
                    <div className="menu">
                        <ul>
                            <li><button tyle="button" onClick={() => nextlocation(17)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(18)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(19)}></button></li>
                            <li><button tyle="button" onClick={() => nextlocation(20)}></button></li>
                        </ul>
                    </div>
                </div>

            )
        }

    }

    return (
        <div>
            <div className="title2">
                <h1>Promotitional</h1>
            </div>

            <div className="fixbutton">
                <b>
                    <li><button type="menu" onClick={() => nextstate(1)}>Destination</button></li>
                    <li><button type="menu" onClick={() => nextstate(2)}>Tour</button></li>
                    <li><button type="menu" onClick={() => nextstate(3)}>Plane & Hotel</button></li>
                    <li><button type="menu" onClick={() => nextstate(4)}>Tour Bus & Hotel</button></li>
                    <li><button type="menu" onClick={() => nextstate(5)}>Hotel</button></li>
                </b>

            </div>
            {information(state)}

        </div>
    )
}
export default Promotitional