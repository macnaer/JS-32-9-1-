window.addEventListener("load", Init);

let DARAARR = [];

let config = {
  city: "Rivne",
  URL:
    "https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=",

  GetUrl() {
    return this.URL + this.city;
  }
};

function Init() {
  const search = document.querySelector(".search");
  search.addEventListener("click", GetData);
  Request(config.GetUrl(), ShowTerminals);
}

function GetData() {
  const city = document.querySelector(".city").value;
  config.city = city;
  Request(config.GetUrl(), ShowTerminals);
}

function Request(URL, callback) {
  console.log("Request: ", URL);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
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

function ShowTerminals({ devices }) {
  DARAARR = devices;
  let showTerminals = document.getElementById("root");
  let ifExist = document.getElementsByClassName("devices");
  if (ifExist.length > 0) {
    console.log("Exist => ", ifExist);
    showTerminals.removeChild(showTerminals.lastChild);
  }

  let btnValue = 0;
  let pbDevices = document.createElement("div");
  pbDevices.setAttribute("class", "devices");
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  pbDevices.appendChild(row);

  for (let i = 0; i < devices.length; i++) {
    let block1 = document.createElement("div");
    block1.setAttribute("class", "col-sm-7");
    let block2 = document.createElement("div");
    block2.setAttribute("class", "col-sm-3");
    let block3 = document.createElement("div");
    block3.setAttribute("class", "col-sm-2");
    let btnShowInMap = document.createElement("button");
    btnShowInMap.setAttribute("type", "button");
    btnShowInMap.setAttribute("class", "btn btn-warning");
    btnShowInMap.textContent = "Show on map";
    btnShowInMap.setAttribute("value", `${btnValue++}`);
    btnShowInMap.addEventListener("click", ShowInMap);
    block1.innerHTML = devices[i].fullAddressUa;
    block2.innerHTML = devices[i].placeUa;
    block3.innerHTML = devices[i].cityUA;

    block3.appendChild(btnShowInMap);

    row.appendChild(block1);
    row.appendChild(block2);
    row.appendChild(block3);
  }
  showTerminals.appendChild(pbDevices);
}

function ShowInMap() {
  console.log(this.value);
  console.log("DATAARR ", DARAARR);
}
