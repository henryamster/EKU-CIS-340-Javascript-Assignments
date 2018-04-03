//store input DOM element into input variable, outside the updateTemp function's scope
var input = document.getElementById("newInput");
//event listener for keyup, when event occurs, the function updateTemp is fired to render the results of the input
input.addEventListener("keyup", updateTemp);

function updateTemp() {
    //store input DOM element into newInput variable.
    var newInput = document.getElementById("newInput");
    //parse input as a float, errors handled later
    var degnC = parseFloat(newInput.value);
    //declare degrees F
    var degnF;

    //set degrees F equal to a string based on whether or not it is a number.
    //if not a number, return a string explaining the error
    //if a number, return a string explaining the temperature in deg F
    degnF = !isNaN(degnC) ? "The temperature is " +
        (9 / 5 * degnC + 32).toFixed(2) +
        "\xB0 degrees Fahrenheit." :
        "The input is not valid. Please enter the temperature in degrees Celsius.";
    //store container div DOM element into container variable.
    var container = document.getElementById("container");
    //set the innerHTML for the container to a header containing the resulting string , variable degnF
    container.innerHTML = "<h1>" + degnF + "</h1>";
    //switch statement to change the style accordingly, black Nan
    //blue for temperatures under 9°C, purple for less than 24°C
    //and red for temperatures beyond the 24°C threshold
    switch (true) {
        case isNaN(degnC):
            container.style.color = "black";
            break;
        case degnC < 9:
            container.style.color = "blue";
            break;
        case degnC < 24:
            container.style.color = "purple";
            break;
        default:
            container.style.color = "red";
            break;
    }
}

//-- simplified prompt version
//var input = prompt("","Please enter degrees Celsius");
//var degC = parseInt(input);
//var degF;
//degF = (!isNaN(degC))? "The temperature is " + ((9/5)*degC + 32).toFixed(2) + " degrees fahrenheit." : "The input was not valid. Try entering a number";
//
//alert(degF);
//-- optional in page display
//var container = document.getElementById('container');
// container.innerHTML = '<h1>' + degF + '</h1>';

//Henry Fritz
//2/28/2018
//For pedagogical use only
//https://henryfritz.xyz/