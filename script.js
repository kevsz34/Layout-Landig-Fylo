const emailInput = document.querySelector("#inputEmail");
const errorM = document.querySelector(".errorEmail");
const emailForm = document.querySelector("#emailForm");

emailForm.addEventListener("submit", function(event){
    event.preventDefault()
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const validEmail = regex.test(emailInput.value);
   if(validEmail){
    errorM.classList.remove("displayBlock")
   }
   else{
    errorM.classList.add("displayBlock")
   }
});  