import React from 'react'
import Img5 from "./img-5.jpg"

function MyIntro() {
    return (
        <>
            <div>
                <div className="container" id="home">

                    <div className="container-text">
                        <h2>Hello! <br />
                            My Name is
                            Rupesh Mahanta</h2>
                        <p>I design thoughtful digital
                            experiences & beautiful brand aesthetics.
                            I provide high quality web development services.</p>
                    </div>
                    <div className="container-image">
                        <img src={Img5} alt="" />
                    </div>

                </div>
                <div className="container" id='aboutMe'>
                    <div className="aboutme">
                        <div className="heading"><h2>about me</h2></div>
                        <div className="personal-details">
                            <table >
                                <tr>
                                    <td>Name:</td>
                                    <td>Rupesh Mahanta</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>mahanta.rupesh704@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>(+91)6206679616</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>Rourkela</td>
                                </tr>
                            </table>
                        </div>
                        <div className="short-description">Hello my name is Rupesh  mahanata
                            i an a front end developer, in proficeent in HTML CSS & React.Js</div>
                    </div>
                </div>
                <div className="container" id='education'>
                    education
                </div>
                <div className="container" id='projects'>
                    Projects
                </div>
            </div>
        </>
    )
}

export default MyIntro
