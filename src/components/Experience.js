import '../App.css';

import techStackApps from "../../src/images/techStackAppsW.png"
import epe from "../../src/images/epe.png"
import nonDisclosure from "../../src/images/NonDisclosure.png"
import nedaviSolar from "../../src/images/nedaviSolar.png"
import csmOradea from "../../src/images/csmOradea.png"
import puri from "../../src/images/puri.png"

function Experience() {
    return (
        <div className='TitleLeft'>
            <h3 className='titleText'>EXPERIENCE</h3>
            <div class='row'>
                <div class='column-left'>
                    <a href="https://techstackapps.com/" target="_blank" rel="noreferrer">
                        <img alt='logo' src={techStackApps} className="techStackApps"></img>
                    </a>
                </div>
                <div class='column-center' />
                <div class='column-right'>
                    <div className='rowTitle'>
                        <h3>Full Stack Developer</h3>
                        <h3 className='timelinePadding '>Dec 2021 - Present</h3>
                    </div>
                    <p><b>Team Lead</b> - CSM Oradea Mobile App - Flutter</p>
                    <p>Main responsibilities:</p>
                    <ul>
                        <li>Make sure that we work towards the proposed goals</li>
                        <li>Help colleagues</li>
                        <li>Make decisions that will bring us closer to the final result</li>
                        <li>Write code and implement logic</li>
                        <li>Replicate the design</li>
                    </ul>
                    <div className='projectsImages'>
                        <a href="https://play.google.com/store/apps/details?id=com.techstackapps.csmoradea" target="_blank" rel="noreferrer">
                            <img alt='logo' src={csmOradea} className="csmOradea"></img>
                        </a>

                    </div>
                    <p>
                        <b>Flutter</b> and <b>Native Android</b> developer</p>
                    <ul>
                        <li>Translate the design provided into the app's UI</li>
                        <li>Create the logic and link it to the interface for a dynamic and fluid feel</li>
                    </ul>
                    <p>
                        The projects I worked on:
                    </p>
                    <div className='projectsImages'>
                        <a href="https://play.google.com/store/apps/details?id=com.techstackapps.smartnedavi" target="_blank" rel="noreferrer">
                            <img alt='logo' src={nedaviSolar} className="nedaviSolar"></img>
                        </a>
                        {/* <a href="https://play.google.com/store/apps/details?id=com.saeace.vista" target="_blank" rel="noreferrer"> */}
                            <img alt='logo' src={nonDisclosure} className="nonDisclosure"></img>
                        {/* </a> */}
                        <a href="https://play.google.com/store/apps/details?id=com.tekzee.puri" target="_blank" rel="noreferrer">
                            <img alt='logo' src={puri} className="puri"></img>
                        </a>
                    </div>
                    <div className='rowTitle timelineTop'>
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
                            <img alt='logo' src={nedaviSolar} className="nedaviSolar"></img>
                        </a>

                    </div>
                </div>
            </div>
            <p />
            <div class='row'>
                <div class='column-left'>
                    <a href="https://encodeplusenergy.ro/en/" target="_blank" rel="noreferrer">
                        <img alt='logo' src={epe} className="epe"></img>
                    </a>
                </div>
                <div className='small-distance' />
                <div class='column-center' />
                <div class='column-right'>
                    <div className='rowTitle'>
                        <h3>Collaborative Robot Programmer</h3>
                        <h3 className='timelinePadding '>Jan 2019 - Nov 2019</h3>
                    </div>
                    <p>Findind solutions for clients in the industrial sector was the main task, that implied:
                        <ul>
                            <li>Simulating and prototyping devices and programs for robots</li>
                            <li>Implementation and testing of appliences that solved the specific problem</li>
                        </ul>
                    </p>
                </div>
            </div>

        </div >
    );
}

export default Experience;