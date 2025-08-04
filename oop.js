// let obj = {
//     a: 1,
//     b: "Dhiraj"
// }

// console.log(obj);

// let animal = {
//     eats : true
// };

// let rabbit = {
//     jumps : true
// };

// rabbit.__proto__=animal; // sets rabbit.[[prototype]]= animal
// ........................................................................................
// class animal{
//     constructor(name){
//         this.name = name;
//         console.log("Object is created...");
//     }

//     eats(){
//         console.log("I am eatting..");
//     }

//     jump(){
//         console.log("I am Jumpping...");
//     }
// }

// class loin extends animal {
//     constructor(name){
//         super(name); 
//         console.log("Object is created and he is a loin..")
//     }
//     eats(){
//         super.eats();
//         console.log("I am eatting loin..");
//     }
// }
 
// let a = new animal("Dhiraj");
// console.log(a);

// let b = new loin("Chaava");
// console.log(b)

//.........................................................................................
// get and set method example

class user{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length <4){
            console.log("name is too short")
            return; 
        }
        this._name = value;
    }
}

let User = new user("Dhiraj");
console.log(User.name);

User = new user("");