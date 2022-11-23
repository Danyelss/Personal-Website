import '../App.css';

import techStackApps from "../../src/images/techStackAppsW.png"
import epe from "../../src/images/epe.png"
import nonDisclosure from "../../src/images/NonDisclosure.png"
import nedaviSolar from "../../src/images/nedaviSolar.png"
import csmOradea from "../../src/images/csmOradea.png"
import puri from "../../src/images/puri.png"

function Experience() {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    function shake() {
        var shakes = document.querySelectorAll(".shake");

        for (var i = 0; i < shakes.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = shakes[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                shakes[i].classList.add("active");
            } else {
                shakes[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", shake);

    return (
        <div className='TitleLeft'>
            <h3 className='titleText'>EXPERIENCE</h3>
            <div className='row'>
                <div className='column-left'>
                    <a href="https://techstackapps.com/" target="_blank" rel="noreferrer">
                        <img alt='logo' src={techStackApps} className="techStackApps"></img>
                    </a>
                </div>
                <div className='column-center' />
                <div className='column-right'>
                    <div className='rowTitle reveal fade-left'>
                        <h3>Full Stack Developer</h3>
                        <h3 className='timelinePadding '>Dec 2021 - Present</h3>
                    </div>
                    <p className='reveal fade-left'><b>Team Lead</b> - CSM Oradea Mobile App - Flutter</p>
                    <p>Main responsibilities:</p>
                    <ul>
                        <li>Make sure that we work towards the proposed goals</li>
                        <li>Help colleagues</li>
                        <li>Make decisions that will bring us closer to the final result</li>
                        <li>Write code and implement logic</li>
                        <li>Replicate the design</li>
                    </ul>
                    <div className='projectsImages shake shake-in1'>
                        <a href="https://play.google.com/store/apps/details?id=com.techstackapps.csmoradea" target="_blank" rel="noreferrer">
                            <img alt='logo' src={csmOradea} className="csmOradea"></img>
                        </a>

                    </div>
                    <p className='reveal fade-left'><b>Flutter</b> and <b>Native Android</b> developer</p>
                    <ul>
                        <li>Translate the design provided into the app's UI</li>
                        <li>Create the logic and link it to the interface for a dynamic and fluid feel</li>
                    </ul>
                    <p>
                        The projects I worked on:
                    </p>
                    <div className='projectsImages'>
                        <a href="https://play.google.com/store/apps/details?id=com.techstackapps.smartnedavi" target="_blank" rel="noreferrer">
                            <img alt='logo' src={nedaviSolar} className="nedaviSolar shake shake-in3"></img>
                        </a>
                        {/* <a href="https://play.google.com/store/apps/details?id=com.saeace.vista" target="_blank" rel="noreferrer"> */}
                        <img alt='logo' src={nonDisclosure} className="nonDisclosure shake shake-in1"></img>
                        {/* </a> */}
                        <a href="https://play.google.com/store/apps/details?id=com.tekzee.puri" target="_blank" rel="noreferrer">
                            <img alt='logo' src={puri} className="puri  shake shake-in2"></img>
                        </a>
                    </div>
                    <div className='rowTitle timelineTop reveal fade-left'>
                        <h3>Node.js developer</h3>
                        <h3 className='timelinePadding '>Mar 2022 - Present</h3>
                    </div>
                    <ul>
                        <li>Develop backend solutions for data persistence using MongoDB </li>
                        <li>End to end communication between IoT devices and mobile clients using HTTP and MQTT (GCP) channels of transmission.</li>
                        <li>Job queuing using Redux and execute logic </li>
                        <li>Microservices creation using Docker</li>
                        <li>Node-Red: upgrade and add mandatory features on the IoT devices</li>
                        <li>Test functionalities</li>
                    </ul>
                    <div className='projectImage'>
                        <a href="https://play.google.com/store/apps/details?id=com.techstackapps.smartnedavi" target="_blank" rel="noreferrer">
                            <img alt='logo' src={nedaviSolar} className="nedaviSolar  shake shake-in3"></img>
                        </a>

                    </div>
                </div>
            </div>
            <p />
            <div className='row'>
                <div className='column-left'>
                    <a href="https://encodeplusenergy.ro/en/" target="_blank" rel="noreferrer">
                        <img alt='logo' src={epe} className="epe"></img>
                    </a>
                </div>
                <div className='small-distance' />
                <div className='column-center' />
                <div className='column-right'>
                    <div className='rowTitle reveal fade-left'>
                        <h3>Collaborative Robot Programmer</h3>
                        <h3 className='timelinePadding '>Jan 2019 - Nov 2019</h3>
                    </div>
                    <p>Findind solutions for clients in the industrial sector was the main task, that implied:</p>
                        <ul>
                            <li>Simulating and prototyping devices and programs for robots</li>
                            <li>Implementation and testing of appliences that solved the specific problem</li>
                        </ul>

                </div>
            </div>

        </div >
    );
}

export default Experience;