window.addEventListener("load", Init);

function Init() {
  const sendMSG = document.querySelector(".sendMSG");
  sendMSG.addEventListener("click", GetData);
  Request();
}

function GetData() {
  const username = document.querySelector(".username").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;
  const telNumber = document.querySelector(".telNumber").value;

  const formData = {
    username: username,
    email: email,
    message: message,
    telNumber: telNumber
  };

  console.log("formData", formData);
}

function Request() {
  const URL =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  let xhr = new XMLHttpRequest();
  //   console.log(xhr);
  xhr.open("GET", URL, true);
  xhr.onreadystatechange = function(aEvt) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.log("Error loading page\n");
      }
    }
  };
  xhr.send();
}
