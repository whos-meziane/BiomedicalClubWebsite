import { projects } from '../scripts/data/projectsdata.js';
import { showBox } from './displayevent.js';

let projectsDisplay = document.querySelector('.projects');
let projecthtml = '';

//Display events on the small project containers
projects.forEach((project, index) => {
    projecthtml += `<div class="column project-container" id="${project.projectID}">
        <img src="${project.projectImage}">
        <div class="project-info-display p${index}">
            <h4>${project.projectName}</h4>
            <p>${project.projectDescription}</p>
        </div>
    </div>
    `
});
projectsDisplay.innerHTML = projecthtml;

//-----------------------------------------------
let projectsDispAll = document.querySelectorAll('.project-container');
let bigBox = document.querySelector('.info-big-cont');

projectsDispAll.forEach((column, index) => {
        column.addEventListener('click', () => {
            let boxHTML = '';
            let columnID = `p-${index}`;
            
            projects.forEach((project) => {
                if(columnID === project.projectID) {
                    boxHTML += `<div class="info-disp">
                <svg id="close-tab" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" onclick="">
                    <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                    </svg>
                <div class="info-img">
                    <img src="${project.projectImage}">
                </div>
                <div class="info-text">
                    <div class="info-title">
                        <h4>${project.projectName}</h4>
                    </div>
                    <div class="info-date">
                        <p><span>Date de remise:</span> ${project.projectDate}</p>
                    </div>
                    <div class="info-members">
                        <p><span>Membre de l'équipe:</span> ${project.projectMembers}</p>
                    </div>
                    <div class="info-description">
                        <p>${project.projectDescription}</p>
                    </div>
                </div>
            </div>`;
                }
            });

            bigBox.innerHTML = boxHTML;
        //-----------------------------------------------
            showBox();
        //-----------------------------------------------
            let closeTab = document.getElementById('close-tab');
            closeTab.addEventListener('click', () => {
                bigBox.style.top = '-100%';
                bigBox.style.transition = 'top 0.6s ease-in-out';
            })
        } 
        
    );
        
});