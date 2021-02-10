/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
let box = document.getElementById("color-block");
let count = 0;

box.onclick =
function changeColor(){
    //Write a condition determine what color it should be changed to
    let box = document.getElementById("color-block");
    let words = document.getElementById("color-name");
    const x = box.getAttribute("style");
    if(x===null){
        //change the background color using JS
        box.style.backgroundColor = "#6495ED";
        //Change the text of the color using the span id color-name
        words.textContent = "#6495ED"; 
    }
    else{
        //change the background color using JS
        box.removeAttribute("style");
        //Change the text of the color using the span id color-name
        words.textContent = "#F08080";

    }
};




/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const form = document.getElementById("convertbtn");
// form.addEventListener("submit", convertTemp;

form.onclick = function(){convertTemp()};

function convertTemp(){
    let x = document.getElementById("f-input").value;
    // //Calculate the temperature here
    let y = (x - 32) * 5/9;
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = y;

};

// clear the input value when refresh
document.getElementById("f-input").value = "";

