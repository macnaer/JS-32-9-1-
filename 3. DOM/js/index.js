const sendMSG = document.querySelector(".sendMSG");

sendMSG.addEventListener("click", GetData);

function GetData(){
    const username = document.querySelector(".username").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;
    const telNumber = document.querySelector(".telNumber").value;
    
    const formData = {
        username: username,
        email: email,
        message: message,
        telNumber: telNumber
    }

    console.log(formData);
}
