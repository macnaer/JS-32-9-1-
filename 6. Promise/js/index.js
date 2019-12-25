// const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
// const URL = "https://swapi.co/api/people/";
const URL = "https://swapi.co/api/people/?page=2";

fetch(URL, {
  method: "GET"
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    CurrencyExange(data);
  })
  .catch(err => console.log("Catch => ", err));

function CurrencyExange(data) {
  console.log(data);
}
