window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function changeHeading() {
    var heading = this;
    var randomColor = randomColorGenerator();
    heading.style.color = randomColor;
}
function randomColorGenerator() {
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    return color;
}
function main() {
    var msgHeading = document.createElement("h2");
    msgHeading.innerHTML = "Processing form";
    msgHeading.setAttribute("class", "message");
    msgHeading.onclick = changeHeading;
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    setTimeout(function () {
        msgHeading.remove();
    }, 20000);
    resetErrorsMessage();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    checkValidDate();
}
function checkValidDate() {
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        var errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Invalid format.Format should be mm/dd/yyyy.";
    }
}
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    var result = pattern.test(input);
    return result;
}
function resetErrorsMessage() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
