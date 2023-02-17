const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener("submit",(e)=>{
    let messages = [];
    if(name.value === "" || name.value === null){
        messages.push("You must provide your name")
    }
    else if(email.value === "" || email.value === null){
        messages.push("Empty email field is not allowed")
    }
    else if (!email.value.match(regex)){
        messages.push("Please Provide The Valid Email Address")
    }
    else if(subject.value === "" || subject.value === null){
        messages.push("Empty Subject field is not allowed")
    }
    else if(message.value === "" || message.value === null || message.value.length <= 10 ){
        messages.push("Your Message must be longer than 10 characters")
    }




    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(",")
    }
})
