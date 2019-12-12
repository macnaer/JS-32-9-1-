// let Person = {
//     name: "Jason",
//     age: 26,
//     ShowPerson(){
//         console.log("Name => ", Person.name);
//         console.log("Age => ", Person.age);
//     },

//     SetName(name){
      
//         if (typeof(name) == "string" ){
//             this.name = name;
//         }
//     }
// };

// Person.ShowPerson();
// Person.SetName("Tom");
// Person.ShowPerson();

// console.log("Plis = >", Plus(2, 6, 4));

let Person = [
    {
        name: "Jason",
        age: 26,
        ShowPerson(){
            console.log("Name => ", this.name);
            console.log("Age => ", this.age);
        },

        SetName(name){
        
            if (typeof(name) == "string" ){
                this.name = name;
            }
        }
    },
    {
        name: "Jesica",
        age: 22,
        ShowPerson(){
            console.log("Name => ", this.name);
            console.log("Age => ", this.age);
        },

        SetName(name){
        
            if (typeof(name) == "string" ){
                this.name = name;
            }
        }
    }
]

// console.log(Person);

// Person.map((item) => {
//     item.ShowPerson();
// })


function Plus (...params){
    // console.log(params);
    let result = 0;
    for(let i = 0; i < params.length; i++){
        result += params[i];
    }
    return result;
}


const Minus = function(a, b){
    return a - b;
}

// console.log("Minus => ", Minus(8, 2));

const Multiple = (...params) => {
    let result = 1;
    for(let i = 0; i < params.length; i++){
        result *= params[i];
    }
    return result;
}

// console.log("Multiple => ", Multiple(2,2,2,2));

// const App = id => console.log(id);



// App(32);

// (function () {
//     var x = "Hello!!";  // I will invoke myself
//     console.log("X => ", x);
//   })();

  
function User(name, age){
    this.name = name;
    this.age = age;

    this.ShowUser = function() {
        console.log("Name: ", this.name, "\nAge: ", this.age);
    }
}


let user1 = new User("Bob", 30);
user1.ShowUser();

let user2 = new User("Tom", 28);
user2.ShowUser();
