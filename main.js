let orderNumber = 1000;

document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
   document.getElementById("experience").disabled = true;
   
})


function formSubmitEvent ()
{
     
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let paymentpref = document.getElementById("paymentpreference").value;

    let div = document.getElementById("list");

    let h2 = document.getElementById("customerlist");

    let list = document.createElement("ul");

    div.appendChild(list);

    let myUL = document.createElement("li");
    myUL.innerHTML = name + " " + city + " " + paymentpref + "<br>"
    list.appendChild(myUL);
}
   


 

