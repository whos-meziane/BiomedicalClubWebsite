//The script was used to develop a general view of the functionalities, then adopt each of them to their corresponding container.

let boxDispAll = document.querySelectorAll('.column');
let bigBox = document.querySelector('.info-big-cont');

function showBox() {
    bigBox.style.position = 'fixed';
    bigBox.style.top = '0';
    bigBox.style.bottom = '0';
    bigBox.style.transition = 'top 0.6s ease-in-out, bottom 0.6s ease-in-out';
   
}
//-----------------------------------------------
boxDispAll.forEach((column, index) => {
        column.addEventListener('click', () => {
            let boxHTML = '';
            let columnID = `p-${index}`;

            console.log(columnID);
            
            projects.forEach((project) => {
                if(columnID === projects.projectID) {
                    boxHTML += `<div class="info-disp">
                <svg id="close-tab" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" onclick="">
                    <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                    </svg>
                <div class="info-img">
                    <img src="static/AL.jpg">
                </div>
                <div class="info-text">
                    <div class="info-title">
                        <h4><span>PROJECT TITLE:</span> Conception et realisation d'un respirateur d'anesthesie.</h4>
                    </div>
                    <div class="info-date">
                        <p><span>RELEASE DATE:</span> 01/06/2023</p>
                    </div>
                    <div class="info-members">
                        <p><span>TEAM MEMBERS:</span> a, b, c</p>
                    </div>
                    <div class="info-description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus cum laudantium quam, deleniti delectus. Explicabo quod magni sint perferendis harum ad, laboriosam ipsa ipsam ipsum eligendi? Eos, aspernatur deleniti? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non aut pariatur error corrupti nihil adipisci aliquam illo, quo facilis nisi voluptate inventore sunt quae soluta similique quibusdam laborum cum quidem?</p>
                    </div>
                </div>
            </div>`;
                }
            });

            
            
            bigBox.innerHTML = boxHTML;
            console.log(boxHTML);
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
        
})

