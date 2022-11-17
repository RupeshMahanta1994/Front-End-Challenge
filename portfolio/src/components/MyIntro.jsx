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
                    About Me
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
