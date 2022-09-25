import '../App.css';

import Profile from "../../src/images/CV-Profile.png"
import github from "../../src/images/github.png"
import linkedin from "../../src/images/in.png"
import cv from "../../src/images/cv.png"

function AboutMe() {
    return (

        <div className='TitleLeft'>
            <h3 className='titleText'>ABOUT ME</h3>

            <div class='row'>
                <div class='column-left'>
                    <img src={Profile} className="cvProfile"></img>
                    <p>Daniel - Ciprian Moș</p>
                </div>
                <div class='column-right'>
                    <p>
                        This should be a self description (boring). <br />But how could one describe himself, and not present a favorable impression, willing to project it into the reader's mind ?<br />
                        Therefore, I asked my friends for a brief view onto myself: <br />
                    </p>
                    <p>
                        “You always knew that a problem needs a solution, thing that has contributed to your development.
                        Patience and determination are your stroing points, those are helping you to touch your maximum potential
                        and your perseverance benefited you to embrace failure and start again.”<br />
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.<br />
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </p>
                    <div className='projectsImages'>
                        <div>

                            <div className='row'>
                                <a href="https://github.com/Danyelss" target="_blank">
                                    <img src={github} className="iconsEducation"></img>
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
                                <a href="https://www.linkedin.com/in/daniel-ciprian-mos-406486209/" target="_blank">
                                    <img src={linkedin} className="iconsEducation"></img>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className='row'>
                                <a href="https://drive.google.com/file/d/1iaGfOqGeY_z8UUsdDEJU1xzaw3Pdsif_/view?usp=sharing" target="_blank">
                                    <img src={cv} className="iconsAboutMe"></img>
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
