import '../App.css';

import University from "../../src/images/university.png"
import github from "../../src/images/github.png"
import API from "../../src/images/API.png"
import web from "../../src/images/web.png"
import mobile from "../../src/images/mobile.png"


function Education() {
    return (

        <div className='TitleLeft'>
            <h3 className='titleText'>EDUCATION</h3>

            <div className='row'>
                <div class='column-left'>
                    <a href="https://www.utcluj.ro/en/" target="_blank">
                        <img src={University} className="university"></img>
                    </a>
                </div>
                <div class='column-right'>
                    <h3>Faculty of Automation and Computer Science</h3>
                    <p> Licensed in Automation Engineering</p>
                    <p>Thesis: <b>Management system of digital assets</b></p>
                    <div className='rowTitle'>
                        <p>Source Code:</p>
                        <a href="https://github.com/Danyelss/License-Backend-Spring-Boot" target="_blank">
                            <img src={API} className="iconsEducation"></img>
                        </a>
                        <a href="https://github.com/Danyelss/license-spa-bank-react" target="_blank">
                            <img src={web} className="iconsEducation"></img>
                        </a>
                        <a href="https://github.com/Danyelss/license-android-app-flutter" target="_blank">
                            <img src={mobile} className="iconsEducation"></img>
                        </a>

                    </div>

                </div>
            </div>

        </div >
    );
}

export default Education;
