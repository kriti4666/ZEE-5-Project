let form=document.querySelector("#signupForm");
form.addEventListener("submit",function(){

    event.preventDefault();
    var data={
        //  email:form.email.value,
         mob:form.mob.value,

    }
    if(data.mob.length==10)
    {
        console.log(data.mob.length)
        alert(
            getRndInteger(1000, 9999)
        )
        document.querySelector("#divsign").style.display="none";
        document.querySelector(".optclass").style.display="block";
    }
    else{
        alert("Invalid crediential!!")
    }

      

});
var time;
function getRndInteger(min, max) {
    time=Math.floor(Math.random() * (max - min + 1) ) + min;
 return time;

}

            //  opt js part


    function clickotp(){
        let p=document.querySelector("#inp1").value;
        let q=document.querySelector("#inp2").value;
        let t=document.querySelector("#inp3").value;
        let l=document.querySelector("#inp4").value;
        
        var opt="";
        opt=p+q+t+l;
    if(opt==time)
    {
        console.log("ok")
        document.querySelector("#divsign").style.display="none";
        document.querySelector(".optclass").style.display="none";
        document.querySelector(".emailpssddiv").style.display="block";
    }
    else{
        alert("Invalid OTP")
    }
    //    console.log(+opt)
    //    console.log(time)
 }
        
    //    signup details form

    var userData=[]

    let signform=document.querySelector("#emailForm");
    signform.addEventListener("submit",function(event){
        event.preventDefault();

        var data={
            email:signform.ak.value,
            username:signform.khan.value,
            password:signform.code.value,
        }
          userData.push(data)
        console.log(userData)
      localStorage.setItem("SignKhan",JSON.stringify(userData));
        window.location.href="login.html"
    })
       
       