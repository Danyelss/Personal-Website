import '../App.css';

import Profile from "../../src/images/CV-Profile.png"
import github from "../../src/images/github.png"
import linkedin from "../../src/images/in.png"
import cv from "../../src/images/cv.png"

function AboutMe() {
    return (

        <div className='TitleLeft'>
            <h3 className='titleText'>ABOUT ME</h3>

            <div className='row'>
                <div className='column-left'>
                    <img alt='portrait' src={Profile} className="cvProfile"></img>
                    <p>Daniel - Ciprian Moș</p>
                </div>
                <div className='column-right'>
                    <p>
                        This should be a self description (boring). <br />But how could one describe himself, and not present a favorable impression,
                        willing to project it into the reader's mind ?<br />
                        Therefore, I asked two of my friends for a brief view onto myself: <br />
                    </p>
                    <p>
                        <i> “You always knew that a problem needs a solution, thing that has contributed to your development. <br />
                            Patience and determination are your strong points, those are helping you touch your maximum potential
                            and your perseverance benefited you to embrace failure and start again.”</i>
                    </p>
                    <p>
                        <i>“You have a talent in working with people and are always proactive in all social and professional interactions.
                            Your hunger for learning and doing new things sets you apart from others and you are continuously looking for things
                            that help you grow.”</i>
                    </p>
                    <div className='projectsImages'>
                        <div>

                            <div className='row'>
                                <a href="https://github.com/Danyelss" target="_blank" rel="noreferrer">
                                    <img alt='logo' src={github} className="iconsEducation shake shake-in1"></img>
                                </a>
                                <div>
                                    <div className='githubProjectsNumber'>20</div>
                                    <div>Open-source<br />
                                        projects</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row'>
                                <a href="https://www.linkedin.com/in/daniel-ciprian-mos-406486209/" target="_blank" rel="noreferrer">
                                    <img alt='logo' src={linkedin} className="iconsEducation shake shake-in3"></img>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className='row'>
                                <a href="https://drive.google.com/file/d/1sXUR-jLHbMZBX6kZ1oO9N-rSJmhUlXy-/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <img alt='logo' src={cv} className="iconsAboutMe shake shake-in2"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
}

export default AboutMe;
