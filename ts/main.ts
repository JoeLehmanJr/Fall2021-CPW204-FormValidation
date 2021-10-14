
window.onload = function() {
    let formBtn = 
        <HTMLEmbedElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

/**
 * Change the message heading to a random color when it is clicked.
 */
function changeHeading() {
    let heading = <HTMLElement>this;
    let randomColor = randomColorGenerator();
    heading.style.color = randomColor;

}

/**
 * generate three random numbers and concatenate in to rgb code string
 * @returns the rgb color string
 */
function randomColorGenerator():string {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    let color = "rgb(" + red + "," + green + "," + blue + ")"
    return color;
}

function main():void {
let msgHeading = document.createElement("h2");
    msgHeading.innerHTML ="Processing form";
    msgHeading.setAttribute("class", "message");
    msgHeading.onclick = changeHeading;

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);

    setTimeout(function() {
        msgHeading.remove();
    }, 20000);

    resetErrorsMessage();
    isTextPresent("first-name","First name is required");
    isTextPresent("last-name","Last name is required");

    checkValidDate();
}

function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        let errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "Invalid format.Format should be mm/dd/yyyy.";

    }
}

function isValidDate(input:string):boolean{
    // Validating  mm/dd/yyyy and m/d/yyyy 

    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    let result = pattern.test(input);
    return result;

}

/**
 * Rests all the spans back to the default text
 */
function resetErrorsMessage():void {
    let allSpans = document.querySelectorAll("form span");

    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the textBox with the given id has some text inside it.
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the textBox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
