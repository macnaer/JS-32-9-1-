window.addEventListener("load", Init);

let ID = 1;
let userArr = [
  {
    ID: "ID",
    Name: "Name",
    Email: "Email",
    TelNumber: "Tel. Number",
    Message: "Message"
  }
];

function Init() {
  const sendMSG = document.querySelector(".sendMSG");
  const URL =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  let city = "Rivne";
  const TerminalURL = `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${city}`;

  sendMSG.addEventListener("click", GetData);
  PrintClients();
  Request(TerminalURL, Test2);
  Request(URL, Test1);
}

function GetData() {
  const username = document.querySelector(".username").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;
  const telNumber = document.querySelector(".telNumber").value;

  const formData = {
    ID: ID++,
    Name: username,
    Email: email,
    TelNumber: telNumber,
    Message: message
  };

  userArr.push(formData);
  PrintClients();
}

function Request(URL, callback) {
  //   console.log(xhr);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        console.log("Error loading page\n");
      }
    }
  };
  xhr.send();
}

function Test1(data) {
  console.log("Test1 ", data);
}

function Test2(data) {
  console.log("Test2 ", data);
}

function PrintClients(data) {
  console.log("userArr", userArr);

  let printUser = document.querySelector(".printUser");
  // printUser.removeChild("userTable");

  let chkTable = document.getElementsByClassName("userTable");
  if (chkTable.length > 0) {
    printUser.removeChild(printUser.lastChild);
  }

  let table = document.createElement("table");
  table.setAttribute("class", "userTable");
  for (let i = 0; i < userArr.length; i++) {
    let th = document.createElement("tr");
    let tableID = document.createElement("td");
    let tableName = document.createElement("td");
    let tableEmail = document.createElement("td");
    let tableTelNumber = document.createElement("td");
    let tableMessage = document.createElement("td");
    tableID.innerHTML = userArr[i].ID;
    tableName.innerHTML = userArr[i].Name;
    tableEmail.innerHTML = userArr[i].Email;
    tableTelNumber.innerHTML = userArr[i].TelNumber;
    tableMessage.innerHTML = userArr[i].Message;
    th.appendChild(tableID);
    th.appendChild(tableName);
    th.appendChild(tableEmail);
    th.appendChild(tableTelNumber);
    th.appendChild(tableMessage);
    table.appendChild(th);
  }
  printUser.appendChild(table);
}
