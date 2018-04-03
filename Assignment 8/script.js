//select btn for submitting form, alert paragraph for error checking.
var btn = document.getElementById('btn');
var alert = document.getElementById('alert');
//select quantity input, then focus on the quantity input.
var key = document.getElementById('qty')
key.focus();
//taken out for simplicity
//event listener for keyup to fire writesummary
//key.addEventListener("keyup", writeSummary);
//event listener for click that fires writesummary
btn.addEventListener('click', writeSummary);
//function writeSummary-> takes no arguments, selects qty, 
//checks validity and then parses, calculates 
//and returns values to input fields and alert.
function writeSummary() {
    var y = document.getElementsByClassName("userSquare");
    //removed with keyup event listener
    //    //while there are nodes with the class userSquare, remove self-referential child from it's parent node.
    //    while (y[0]) {
    //        y[0].parentNode.removeChild(y[0]);
    //    }
    //reset input value fields
    document.getElementById('subTotal').value = "";
    document.getElementById('tax').value = "";
    document.getElementById('orderTotal').value = "";

    //select value from qty input
    var qty = document.getElementById('qty').value;
    //switch statement: when value returns true, either return validation error message or proper results.
    switch (true) {
        //case : no discernable input, null value
        case (!qty.length > 0):
            alert.setAttribute('style', 'font-size:1.4em; color:red; font-weight:800');
            alert.innerHTML = "Please enter a valid quantity.";
            document.getElementById('qty').focus();
            document.getElementById('qty').value= "";
            break;
            //case : is not a number
        case (isNaN(qty)):
            alert.setAttribute('style', 'font-size:1.4em; color:red; font-weight:800');
            alert.innerHTML = "Please enter a valid numerical quantity.";
            document.getElementById('qty').focus();
              document.getElementById('qty').value = "";
            break;
            //case: is a number, value is less than zero (negative)
        case (!isNaN(qty) && parseFloat(qty) < 0):
            alert.setAttribute('style', 'font-size:1.4em; color:red; font-weight:800');
            alert.innerHTML = "Please enter a valid positive quantity."
            document.getElementById('qty').focus();
            document.getElementById('qty').value= "";
            break;
            //default case: everything is working!
        default:
            //call fix()-> which returns a number.tofixed(2) for the value
            var st = fix(259.99 * parseFloat(qty)); //unit price* float qty (Assuming partial units may be purchased)
            var tx = fix(parseFloat(st) * .06); //subtotal * 6% tax
            var ot = fix(parseFloat(st) + parseFloat(tx)); // order total = subtotal + tax
            //return to original style for proper input
            alert.setAttribute('style', 'font-size:1.0em; color:cornflowerblue; font-weight:300');
            //declare combiner variable to aggregate invoice totals
            var combined = 0;
            //call post receipt           
            postReceipt(st, tx, ot, qty);
            //iterate through receipts, pull order totals, variable combined remains outside the scope of the loop and
            //is then used to display the aggregated total.
            for (var i = 0; i < receipts.length; i++) {
                var add = parseFloat(receipts[i].orderTotal);
                combined += add;
            }
            //display order totals in alert
            alert.innerHTML = "Your order total(s) come to <span class='fn'>$" +

                combined.toFixed(2) + "</span>.";
            //display order totals in input fields.
            document.getElementById('subTotal').value = "$" + st;
            document.getElementById('tax').value = "$" + tx;
            document.getElementById('orderTotal').value = "$" + ot;


    }
}

//function fix-> accepts an input that is then cast as a number, parsed as a float, and fixed to
//2 digits.
function fix(a) {
    return Number.parseFloat(a).toFixed(2);
}

//array to hold receipts
var receipts = [];

function postReceipt(st, tx, ot, qty) {
    var rec = {
        quantity: qty,
        subTotal: st,
        tax: tx,
        orderTotal: ot
    }
    //push receipt to receipt array
    receipts.push(rec);
    var div = document.createElement("div");
    var text = document.createElement("ul");
    //add styling to these elements.
    div.className = "userSquare";
    text.className = "users";
    //add html content for receipt
    text.innerHTML =
        "<li class='fn'>Price: $259.99 </li> <li class='fn'> Qty: " +
        rec.quantity +
        "</li><li class='ln'>Subtotal: $" +
        rec.subTotal +
        "</li><li class='em'>Tax: $" +
        rec.tax +
        "</li><hr> <li class='fn' >Total: $" + rec.orderTotal;

    //append ul to div.
    div.appendChild(text);
    //select form with id "1" to insert before.
    var form = document.getElementById("1");
    //insert div.
    document.body.insertBefore(div, form);
}

/* 
Henry Fritz 
2/28/2018
For pedagogical use only
https://henryfritz.xyz/
*/