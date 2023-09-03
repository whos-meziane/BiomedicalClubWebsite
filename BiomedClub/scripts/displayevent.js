import {events} from '../scripts/data/eventsdata.js';

let eventsDisplay = document.querySelector('.events');
let eventhtml = '';


//Display events on the small event containers
events.forEach((event, index) => {
    eventhtml += `<div class="column event-container" id="${event.eventID}">
        <img src="${event.eventImage}">
        <div class="project-info-display e${index}">
            <h4>${event.eventName}</h4>
            <p>${event.eventDescription}</p>
        </div>
    </div>
    `
})
eventsDisplay.innerHTML = eventhtml;

//Display events on the big container with all the datails

export function showBox() {
    bigBox.style.position = 'fixed';
    bigBox.style.top = '0';
    bigBox.style.bottom = '0';
    bigBox.style.transition = 'top 0.6s ease-in-out, bottom 0.6s ease-in-out';
   
}
//-----------------------------------------------
let eventDispAll = document.querySelectorAll('.event-container');
let bigBox = document.querySelector('.info-big-cont');

eventDispAll.forEach((column, index) => {
        column.addEventListener('click', () => {
            let boxHTML = '';
            let columnID = `e-${index}`;

            events.forEach((event) => {
                if(columnID === event.eventID) {
                    boxHTML += `<div class="info-disp">
                <svg id="close-tab" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" onclick="">
                    <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                    </svg>
                <div class="info-img">
                    <img src="${event.eventImage}">
                </div>
                <div class="info-text">
                    <div class="info-title">
                        <h4>${event.eventName}</h4>
                    </div>
                    <div class="info-date">
                        <p><span>Date:</span> ${event.eventDate}</p>
                    </div>
                    <div class="info-members">
                        <p><span>Invités:</span> ${event.eventMembers}</p>
                    </div>
                    <div class="info-description">
                        <p>${event.eventDescription}</p>
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
            });
        }
        
    );
        
});