let columnToDispProject = document.querySelectorAll('.project-container');

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

columnToDispProject.forEach((column, index) => {
    let infoContain = document.querySelector(`.p${index}`);
    column.addEventListener('mouseover', () => {
        showInfos(infoContain);
    } );
    column.addEventListener('mouseout', () => {
        hideInfos(infoContain);
    } );
    
})