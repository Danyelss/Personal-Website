import '../App.css';

import University from "../../src/images/university.png"
import API from "../../src/images/API.png"
import web from "../../src/images/web.png"
import mobile from "../../src/images/mobile.png"


function Education() {
    return (

        <div className='TitleLeft'>
            <h3 className='titleText'>EDUCATION</h3>

            <div className='row'>
                <div className='column-left'>
                    <a href="https://www.utcluj.ro/en/" target="_blank" rel="noreferrer">
                        <img alt='logo' src={University} className="university"></img>
                    </a>
                </div>
                <div className='column-center' />
                <div className='column-right'>
                    <h3>Faculty of Automation and Computer Science</h3>
                    <p> Licensed in Automation Engineering</p>
                    <p className='reveal fade-left'>Thesis: <b>Management system of digital assets</b></p>
                    <div className='rowTitle'>
                        <p>Source Code:</p>
                        <a href="https://github.com/Danyelss/License-Backend-Spring-Boot" target="_blank" rel="noreferrer">
                            <img alt='logo' src={API} className="iconsEducation shake shake-in1"></img>
                        </a>
                        <a href="https://github.com/Danyelss/license-spa-bank-react" target="_blank" rel="noreferrer">
                            <img alt='logo' src={web} className="iconsEducation shake shake-in2"></img>
                        </a>
                        <a href="https://github.com/Danyelss/license-android-app-flutter" target="_blank" rel="noreferrer">
                            <img alt='logo' src={mobile} className="iconsEducation shake shake-in3"></img>
                        </a>

                    </div>

                </div>
            </div>

        </div >
    );
}

export default Education;
