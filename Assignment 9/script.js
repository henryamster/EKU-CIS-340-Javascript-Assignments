//select Advisor field
var adv = document.getElementById('advisor');
//select alert para to list errors on invalid data.
var alert = document.getElementById('alert');
//select btn for event listenener, on click fire the function submit
var btn = document.getElementById('btn');
btn.addEventListener('click', submit);

//email regex
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//submit-> overarching function that resets alert para, calls modules to check input text, advisor input, and class input.
function submit() {
    //reset error borders
    resetErrorBorders();
    //change alert paragraph innerHTML to empty
    alert.innerHTML ="";
    //call validate all data
   validateAllData();

    
}

//populateAlert-> if returned value is an error instance, concat alert content to alert's innerHTML
function populateAlert(obj){
    if (obj instanceof Error){
        alert.innerHTML += obj;
    }
}

//validateAllData -> run populateAlert for all validation functions. If after iterating through these functions, we are error free in alert's innerHTML, set up a user object by calling combineIntoObject, then pass this user object into displayUser

function validateAllData(){
    populateAlert(validateInputText());
    populateAlert(validateAdvisorInput());
    populateAlert(validateClassInput());
    populateAlert(validateResidency());
    if (alert.innerHTML == ""){
    
        var user =combineIntoObject(validateInputText(), validateAdvisorInput(), validateClassInput(), validateResidency());
        console.log(user);
   displayUser(user);
           clearForm();
//    
    }
}
//validateInputText-> module that selects, validates input text and then either returns an object that will be used to construct a larger object or an error message due to validity.
function validateInputText() {
    //bool for validation
    var valid = true;
    //empty string to concatenate errors to.
    var error = ""
    //select text input values
    var lName = document.getElementById('lastName').value;
    var fName = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    //run these values through isSet-> returns true if value != "", otherwise, return false and concatenate error message. Regex match email when isSet is called
      if (!isSet(email) | !re.test(String(email))) {
        error += "Please enter a valid email address. ";
        valid = false;
         document.getElementById('email').focus();
         document.getElementById('email').style.border= '8px solid red';
    }
    
    if (!isSet(fName)) {
        error += "Please enter your first name. ";
        valid = false;
         document.getElementById('firstName').focus();
         document.getElementById('firstName').style.border= '8px solid red';
    }
    if (!isSet(lName)) {
        error += "Please enter your last name. ";
        valid = false;
        document.getElementById('lastName').focus();
        document.getElementById('lastName').style.border= '8px solid red';
    }
  
    //construct inputText object to be returned on valid input
    var inputText = {
        lName: lName,
        fName: fName,
        email: email
    }
    //test for values
    console.log(inputText.fName + " " + inputText.lName + " " + inputText.email + " " + error);
    //aforementioned return statements 
    if (valid) {
        return inputText;
    } else {
        return Error(error);
    }
}

//validateAdvisorInput-> function that selects and validates the advisor input. no parameters, but returns either the value of the Advisor or an error.
function validateAdvisorInput() {
    //select advisor input text value
    var rA = document.getElementById('advisor').value;
    //return a bool for validity if function isSet returns true for the value.
    var valid = (isSet(rA));
    //if valid, return the advisor.
    if (valid) {
        console.log(rA);
        return rA
    };
    //on error, return an error.
    console.log('Advisor is not set.')
    document.getElementById('fieldAdvisor').style.border = "8px solid red";
    return Error('please select an Advisor. ');
  
}
//validateClassInput-> function that selects and validates the class input.
function validateClassInput() {
    //validity bool
    var valid = false;
    //return value for fn
    var returnedVal;
    //select class input by NAME instead of ID
    var cl = document.getElementsByName('class');
    //cycle through elements checking for .checked value
    for (var i = 0; i < cl.length; i++) {
        if (cl[i].checked) {
            //return element, not value;
            //if found, set return value equal to checked list value and set valid bool to true
            returnedVal = cl[i].value;
            valid = true;
        }
   
    }
    //test output
var output = (valid)? returnedVal :  Error('Please select a valid class. ');
    if (!valid){ 
        document.getElementById('fieldClass').style.border = "8px solid red";
        
    }
    console.log(output);
    return output;
}
//validateResidency-> since there are no invalid data possible, simply return the bool value of checkbox's check.
function validateResidency(){
    var chk = document.getElementById('resident');
    console.log('Ky Res: ' + chk.checked);
    return (chk.checked);
}

//isSet-> check to make sure string value is not blank.
function isSet(x) {
    return (x != "");
}

function combineIntoObject(textInputObject, advisor, classRank, ky) {
 var user = {
        fName : textInputObject.fName,
        lName: textInputObject.lName,
        email: textInputObject.email,
        advisor: advisor,
        classRank : classRank,
        ky: ky
    }
 return user;
}

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
        ")'><span class='face'>:)</span></div><li class='fn'> " +
        user.fName +
        "</li><li class='ln'>" +
        user.lName +
        "</li><a href='mailto:" + user.email + "'><li class='em'>✉ " +
        user.email +
        "</li></a> <li class='ln'> " + user.classRank + " </li> <li class='em'>Advisor: " + user.advisor + " </li><li class='em'> Ky Resident: " + user.ky + "</li>";
    //append ul to div.
    div.appendChild(text);
    //select form with id "1" to insert before.
    var form = document.getElementById("1");
    //insert div.
    document.body.insertBefore(div, form);
}


function resetErrorBorders(){
    document.getElementById('lastName').style.border= '4px solid cornflowerblue';
    document.getElementById('firstName').style.border= '4px solid cornflowerblue';
      document.getElementById('email').style.border= '4px solid cornflowerblue';
    document.getElementById('fieldClass').style.border = "4px solid cornflowerblue";
    document.getElementById('fieldAdvisor').style.border = "4px solid cornflowerblue";
}
document.getElementById('lastName').focus();

/* empty out form on submission*/
function clearForm(){
 document.getElementById('1').reset();

}

/* 
Henry Fritz 
2/28/2018
For pedagogical use only
https://henryfritz.xyz/
*/