


let myVariable;
myVariable = "Welcome";
alert(myVariable);

const myImage = document.getElementById("myImage");
myImage.onclick = function() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/alatoo_logo.png") {
        myImage.setAttribute("src", "img/alatoo.jpg");
    } else {
        myImage.setAttribute("src", "img/alatoo_logo.png")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}`;
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Welcome, ${storedName}`;
    }
}

myButton.onclick = () => {
    setUserName();
};

const imgElement = document.querySelector("img");

const img1URL = "img\alatoo_logo.png";
const img2URL = "img\alatoo.jpg";

function changePhoto(event) {
    let current = imgElement.getAttribute("src");
    if (current == img1URL) {
        imgElement.setAttribute("src", img2URL);
    } else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;
