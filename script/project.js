const project = [];

function addProject(event){
    event.preventDefault();

    let tittle = document.getElementById("input-project-name").value;
    let projectDuration = document.getElementById ("input-project-duration").value;
    let startDate = document.getElementById("input-project-start").value;
    let endDate = document.getElementById("input-project-end").value;
    let descProject = document.getElementById("input-project-desciption").value;
    let techAndroid = document.getElementById ("input-project-android").value;
    let techReact = document.getElementById ("input-project-react").value;
    let techWired = document.getElementById ("input-project-wired").value;
    let techMicrochip = document.getElementById ("input-project-microchip").value;
    let image = document.getElementById("input-project-image").files;
    image = URL.createObjectURL(image[0]);

    // penggunaan ternary let variableName = condition ? valueIfTrue : valueIfFalse;
    let ternaryAndroid = techAndroid.checked ? android.value : null;
    let ternaryReact = techReact.checked ? react.value : null;
    let ternaryWired = techWired.checked ? wired.value : null;
    let ternaryMicrochip = techMicrochip.checked ? microchip.value : null;
    
    

const projectObject = {
    tittle,
    projectDuration,
    startDate,
    endDate,
    descProject,
    techCheck: [ternaryAndroid, ternaryReact, ternaryWired, ternaryMicrochip],
    image,
}

    project.push(projectObject);
    console.log(project);

    renderproject ();

};

 function renderproject (){
    let projectHTML = "";

    for(let i=0; i< project.length; i++){
        let projectItem = project[i]; 
        projectHTML += `
        <div class="project-list-item">
        <div class="project-image">
        <img src="${projectItem.image}" alt="Deus Ex Machina" />
        </div>
            <h1>
                <a target="_blank" href="project-detail.html">${projectItem.tittle}</a>
            </h1>
                <div class="project-duration">Durasi: ${projectItem.projectDuration}</div>
                <p>
                ${projectItem.descProject}
                </p>
            <div class="tag-tech">
            ${projectItem.techCheck[0] === null ? `<i class="fa-brands fa-android"></i>` : ``}
            ${projectItem.techCheck[1] === null ? `<i class="fab fa-react"></i>` : ``}
            ${projectItem.techCheck[2] === null ? `<i class="fa-solid fa-network-wired"></i>` : ``}
            ${projectItem.techCheck[3] === null ? `<i class="fa-solid fa-microchip"></i>` : ``}
            </div>
                <div class="button">
                <button class="button-edit">Edit</button>
                <button class="button-delete">Delete</button>
                </div>
            </div> 
            `;
    };

    document.querySelector(".project-list-item").innerHTML = projectHTML;
};