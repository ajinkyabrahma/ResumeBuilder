
window.onload = function () {
    const elements = document.getElementsByClassName("cv-template");

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function AddWE() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.classList.add("WEfield");
    newNode.setAttribute("placeholder", "Enter here");

    let WEOb = document.getElementById("WE");
    let WEfieldOb = document.getElementById("WEid");
    WEOb.insertBefore(newNode, WEfieldOb);

}

function AddAQ() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("mt-2");
    newNode.classList.add("AQfield");
    newNode.setAttribute("placeholder", "Enter here");

    let AQOb = document.getElementById("AQ");
    let AQfieldOb = document.getElementById("AQid");
    AQOb.insertBefore(newNode, AQfieldOb);

}

function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var imgtag = document.getElementById("img");
    imgtag.title = selectedFile.name;

    reader.onload = function (event) {
        imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
}

function GenerateCV() {

    console.log(document.getElementById("img"));
    // Assuming there's only one element with the class "imgT"
    const imgTElement = document.getElementsByClassName("imgT")[0];
    imgTElement.src = document.getElementById("img").src;

    // For elements with class "name1T"
    const name1TElements = document.getElementsByClassName("name1T");
    for (let i = 0; i < name1TElements.length; i++) {
        name1TElements[i].innerHTML = document.getElementById("nameField").value;
    }

    // Similarly for other elements...

    const name2TElements = document.getElementsByClassName("name2T");
    for (let i = 0; i < name2TElements.length; i++) {
        name2TElements[i].innerHTML = document.getElementById("nameField").value;
    }

    const contactTElements = document.getElementsByClassName("contactT");
    for (let i = 0; i < contactTElements.length; i++) {
        contactTElements[i].innerHTML = document.getElementById("contactField").value;
    }

    const addressTElements = document.getElementsByClassName("addressT");
    for (let i = 0; i < addressTElements.length; i++) {
        addressTElements[i].innerHTML = document.getElementById("addressField").value;
    }

    const linkedinTElements = document.getElementsByClassName("linkedinT");
    for (let i = 0; i < linkedinTElements.length; i++) {
        linkedinTElements[i].innerHTML = document.getElementById("linkedinField").value;
    }

    const githubTElements = document.getElementsByClassName("githubT");
    for (let i = 0; i < githubTElements.length; i++) {
        githubTElements[i].innerHTML = document.getElementById("githubField").value;
    }

    const objectiveTElements = document.getElementsByClassName("objectiveT");
    for (let i = 0; i < objectiveTElements.length; i++) {
        objectiveTElements[i].innerHTML = document.getElementById("objectiveField").value;
    }

    let wes = document.getElementsByClassName("WEfield");
    let str = '';

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    // Assuming there's only one element with the class "weT"
    const weTElement = document.getElementsByClassName("weT")[0];
    weTElement.innerHTML = str;

    let aqs = document.getElementsByClassName("AQfield");
    let str1 = '';

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    // Assuming there's only one element with the class "aqT"
    const aqTElement = document.getElementsByClassName("aqT")[0];
    aqTElement.innerHTML = str1;



    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";


    document.body.style.backgroundColor = `skyblue`;




}



function printResume() {
    document.getElementById("DownloadButton").style.display = "none";
    window.print();
    document.getElementById("DownloadButton").style.display = "block";

}

