var form = document.getElementById("form");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    
    var cardNumber = document.getElementById("cardnumber").value;
    var ExpiryDate = document.getElementById("ExpiryDate").value;
    var Cvv = document.getElementById("Cvv").value;
    
    if (cardNumber == "" && ExpiryDate == "" && Cvv == "") {
        alert("Please fill all the fields");
    }
    else {
        alert("Payment Successful");
        window.location.href= "index3.html";
    }
})