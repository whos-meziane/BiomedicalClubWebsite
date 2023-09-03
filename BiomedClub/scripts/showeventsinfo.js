let columnToDispEvent = document.querySelectorAll('.event-container');

function showInfos(infoContain) {
    removeEventListener('mouseover', hideInfos);

    infoContain.style.zIndex = '1';
    infoContain.style.transform = 'translateY(-100%)';
    infoContain.style.transition = 'transform 0.6s ease-in-out';
}
function hideInfos(infoContain) {
    removeEventListener('mouseout', showInfos);

    infoContain.style.zIndex = '1';
    infoContain.style.transform = 'translateY(+100%)';
    infoContain.style.transition = 'transform 0.6s ease-in-out';
}

columnToDispEvent.forEach((column, index) => {
    let infoContain = document.querySelector(`.e${index}`);
    column.addEventListener('mouseover', () => {
        showInfos(infoContain);
    } );
    column.addEventListener('mouseout', () => {
        hideInfos(infoContain);
    } );
    
})