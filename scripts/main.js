
let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/image.png") {
        myImage.setAttribute("src", "images/10.png");
    } else {
        myImage.setAttribute("src", "images/image.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Please input your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello，你好," + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello，你好," + storedName;
}
myButton.onclick = function () {
    setUserName();
};
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello 你好，" + myName;
  }
}
