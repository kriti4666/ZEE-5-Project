
let dataUser=JSON.parse(localStorage.getItem("SignKhan"))
// console.log(dataUser)

let forform=document.querySelector("#forgotForm");
forform.addEventListener("submit",function(event){
          event.preventDefault();

          var data={
            password:forform.psscode.value,
            newpassword:forform.Newcode.value,
          }
          console.log(data)
     
          var found=false;

          dataUser.forEach(function(el){
            if(data.password===data.newpassword)
            {
                found=true;
                el.password=data.password
            }
          })
         
          if(found)
          {
            alert("Password Update")
            localStorage.setItem("SignKhan",JSON.stringify(dataUser))
            window.location.href=""
          }
          else{
            alert("Enter Correct Password")
          }
          



})