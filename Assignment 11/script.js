
var userName = document.getElementById('userN').focus();
//function logIn-> takes no arguments. validates values of username and pin input are larger than zero, then calls loggedIn to add user to the connected pool.
function logIn() {
    //select username/pin values.
    var userName = document.getElementById('userN').value;
    var pin = document.getElementById('pin').value;
    //select alert paragraph for errors if errors occur.
    var alert = document.getElementById('alert');
    //check to see if username length is greater than zero.
    if (userName.length < 1) {
        //fire alertError, passing both the selected alert paragraph 
        //as well as the string representative of the invalid input.
        alertError(alert, "User name. ");
        //refocus to invalid input, add border to indicate validity.
        document.getElementById("userN").focus();
        document.getElementById("userN").style.border = "4px solid red";
        //scroll to the top of the page.
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        //return false on invalid data, to prevent form submission
        return false;
    } else if (alert, pin.length < 1) {
        //fire alertError, passing both the selected alert paragraph 
        //as well as the string representative of the invalid input.
        alertError(alert, "PIN. ");
        //refocus to invalid input, add border to indicate validity.
        document.getElementById("pin").focus();
        document.getElementById("userN").style.border = "4px solid cornflowerblue";
        document.getElementById("pin").style.border = "4px solid red";
        //scroll to the top of the page.
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return false;
        //return false on invalid data, to prevent form submission
    } else {
        //fire loggedIn, passing in userName and pin to instantiate a user object.
//        loggedIn(userName, pin);
        //set borders back to initial values on valid data entry.
        document.getElementById("userN").style.border = "4px solid cornflowerblue";
        document.getElementById("pin").style.border = "4px solid cornflowerblue";
        //clear alert.
        alert.innerHTML = "";
    }

}

function alertError(alert, missingInput) {
    //alert style adjustments
    alert.style.fontSize = "1.4em";
    alert.style.color = "red";
    alert.style.fontWeight = "800";
    alert.innerHTML = "Please input your " + missingInput;
}

function loggedIn(userN, pinN) {
    var user = {
        userN: userN,
        pin: pinN,
        email: userN + "@example.com"
    }
    //declare empty string for pinnified result
    var t = '';
    //push user information to an array that is then logged to the console,
    users.push(user);
    console.log(users);

    var div = document.createElement("div");
    var text = document.createElement("ul");
    //add styling to these elements.
    div.className = "userSquare";
    text.className = "users";
    //add html content for user
    text.innerHTML =
        "<div class='picture' style='background-color:rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")'><span class='face'>:)</span></div><li class='fn'> username: " +
        user.userN +
        "</li><li class='ln'>PIN: " +
        pinnify(user.pin, t) +
        "</li><a href='mailto:" + user.email + "'><li class='em'>✉ " +
        user.email +
        "</li></a>";
    //append ul to div.
    div.appendChild(text);
    //select form with id "1" to insert before.
    var form = document.getElementById("1");
    //insert div.
    document.body.insertBefore(div, form);
}
//array for collection of users
users = [];

//function pinnify-> take a visible PIN number and make it 
//private by replacing every character in the string with an *
function pinnify(x, t) {
    for (var i = 0; i < x.length; i++) {
        t += "*"
    }
    return t;
}
/* 
Henry Fritz 
2/28/2018
For pedagogical use only
https://henryfritz.xyz/
*/