
window.onload = function() {
    let formBtn = 
        <HTMLEmbedElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    resetErrorsMessage();
    isTextPresent("first-name","First name is required");
    isTextPresent("last-name","Last name is required");
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
