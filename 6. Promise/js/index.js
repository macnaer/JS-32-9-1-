// const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
// const URL = "https://swapi.co/api/people/";
// const URL = "https://swapi.co/api/people/?page=2";

// fetch(URL, {
//   method: "GET"
// })
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     CurrencyExange(data);
//   })
//   .catch(err => console.log("Catch => ", err));

// function CurrencyExange(data) {
//   console.log(data);
// }

const promise = new Promise((resolve, reject) => {
  // reject("Bad idea");
  let car = {
    vendor: "Tesla",
    model: "X",
    engineType: "Electro",
    price: 120000
  };
  setTimeout(() => {
    //reject("Bad idea");
    resolve(car);
  }, 3000);
})
  .then(data => {
    return new Promise((resolve, reject) => {
      // reject("Bad document!");
      data = {
        vendor: "Tesla",
        model: "X",
        engineType: "Electro",
        price: 120000,
        police: "Document good"
      };
      resolve(data);
    }).then(data => {
      return new Promise((resolve, reject) => {
        // reject("Car is broken!");
        data = {
          vendor: "Tesla",
          model: "X",
          engineType: "Electro",
          price: 120000,
          police: "Document good",
          CTO: "Technical is good"
        };
        resolve(data);
      }).then(data => {
        console.log("You bought = ", data);
      });
    });
  })
  .catch(err => console.log("Error Type", err));
