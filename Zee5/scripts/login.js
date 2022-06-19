
let dataUser=JSON.parse(localStorage.getItem("SignKhan"))
console.log(dataUser)

let myform=document.querySelector("#formLG");
myform.addEventListener("submit",function(event){
    event.preventDefault();

    var data={

        userEM:myform.emailMB.value,
    };
    console.log(data)

    var found=false;
    dataUser.forEach(function(el){

        if(el.email===data.userEM)
        {
            found=true;
        }
    })
      
    if(found)
    {
     var login=data.userEM;

     localStorage.setItem("login",JSON.stringify(login));
     alert("Login Successfully")
    //  window.location.href=""
   
    } 

   else{
    alert("Invalid Email or Number")
   }











})