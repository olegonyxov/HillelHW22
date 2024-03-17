let mainDiv = document.querySelector('.mainDiv');
let saveBtn = document.querySelector('.save_btn');
let userData;
saveBtn.addEventListener("click", (event)=> {
    userData = collectData();
    exitForm() ;
})



function exitForm(){
    mainDiv.innerHTML="";
    let newForm = document.createElement("ul");
    mainDiv.appendChild(newForm);
    for (let elem in userData){
        let newLi = document.createElement("li");
        if (userData[elem] === "F"){userData[elem] = "Female"}else if(userData[elem] === "M"){userData[elem] = "Male"};
        if (userData[elem] === "1"){userData[elem] = "Kiyv"}else if(userData[elem] === "2"){userData[elem] = "Odesa"};
        newLi.textContent = `${elem}  : ${userData[elem]}`;
        newForm.appendChild(newLi);
    }
}
