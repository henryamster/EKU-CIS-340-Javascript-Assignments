//init bool for validation.
var check = true;
//select button, attach event listener.
var btn = document.getElementById("btn");
btn.addEventListener("click", getData);

//function getData-> Take values from input fields, test their validity, and add valid data to dummyData array. Calls addUsers/displayUser to cycle through users and display their data in userSquares.
function getData() {
    //select last name, first name, and email values after click event.
    var lastN = document.getElementById("lastN").value;
    var firstN = document.getElementById("firstN").value;
    var em = document.getElementById("email").value;

    //clear input fields
    document.getElementById("lastN").value = "";
    document.getElementById("firstN").value = "";
    document.getElementById("email").value = "";
    //select alert paragraph.
    var alert = document.getElementById("alert");
    //if these values are not blank, bool 'check' remains true for valid data, otherwise print error message in alert paragraph.
    if ((lastN != "") & (firstN != "") & (em != "")) {
        check = true;
        btn.style.border = "4px solid cornflowerblue";
    } else {
        alert.style.fontSize = "1.4em";
        alert.style.color = "red";
        btn.style.border = "4px solid red";
        alert.style.fontWeight = "800";
        alert.innerHTML = "Please fill out all necessary information.";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.getElementById("lastN").focus();
        check = false;
    }

    //if valid data has been entered, continue into getData->
    if (check) {
        //return an object with these properties
        var t = displayData(lastN, firstN, em);
        // create an empty object to make a shallow copy, as pushing objects into an array is done by reference, instead of value.
        var s = {};
        s.firstName = t.firstName;
        s.lastName = t.lastName;
        s.email = t.email;
        //push newly minted object s into the dummyData array.
        dummyData.push(s);
        //clear out all userSquares before reloading with new value. Select all userSquares by class.
        var y = document.getElementsByClassName("userSquare");
        //while there are nodes with the class userSquare, remove self-referential child from it's parent node.
        while (y[0]) {
            y[0].parentNode.removeChild(y[0]);
        }
        //run external program to display all data from dummyData array.
        addUsers();
    }
}
//function displayData-> take in arguements and return an object with appropriately named properties.
function displayData(ln, fn, em) {
    this.lastName = ln;
    this.firstName = fn;
    this.email = em;
    return this;
}
//array full of  dummy user objects
var dummyData = [
    {
        firstName: "David",
        lastName: "Polk",
        email: "dpolk@example.com"
  },
    {
        firstName: "Justin",
        lastName: "Mop",
        email: "jmop@example.com"
  },
    {
        firstName: "Mark",
        lastName: "Morrison",
        email: "mmorr@example.com"
  },
    {
        firstName: "Shane",
        lastName: "Ribble",
        email: "sribble@example.com"
  },
    {
        firstName: "Chris",
        lastName: "Mool",
        email: "cmool@example.com"
  },
    {
        firstName: "Faron",
        lastName: "Young",
        email: "fyoung@example.com"
  },
    {
        firstName: "Frank",
        lastName: "Zilto",
        email: "fzilto@example.com"
  }
];
//function displayUser-> create a div with a ul, add lis for user's data. add styling, an icon standin, insert div into document before form. takes user as input, called from addUsers->
function displayUser(user) {
    //create div and li elements.
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
        ")'><span class='face'>:)</span></div><li class='fn'>" +
        user.firstName +
        "</li><li class='ln'>" +
        user.lastName +
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
//function addUsers-> cycle through dummyData and use displayUser-> to add objects from dummyData to the page.
function addUsers() {
    for (var t = 0; t < dummyData.length; t++) {
        displayUser(dummyData[t]);
    }
}
addUsers();

/* 
Henry Fritz 
2/28/2018
For pedagogical use only
https://henryfritz.xyz/
*/