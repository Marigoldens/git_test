// function isEmpty(object){
//     if (object === undefined){return true}
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// let sum = 0 

// let salaries = {
//   'John': 100,
//   'Ann': 160,
//   'Pete': 130
// }

// for (let name in salaries){
//     return sum += salaries[name]
// }




// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// function multiplyNumeric(obj){
//     for (key in obj){
//         if(Number.isInteger([key])){
//             return [key] * 2
//         }
//     else{
//         return key
//     }
//     }
// }



// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// // we put users in a function and it gives all the names
// let names = returningNames(users)

// function returningNames(array){
//     let names = []
//     for(let i= 0; i < array.length; i++){
//         let obj = array[i]
//         let stringname = obj.name
//         names.push(stringname)
//     }
//     return names
// }
// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

//  /* ... your code ... */

// let usersMapped =users.map(user => {
//     usersMappedObj= {}
//     usersMappedObj.fullName = `${user.name} ${user.surname}`
//     usersMappedObj.id = user.id
//     return usersMappedObj
// })  
    
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMappedObj[0].id ) // 1
// alert( usersMappedObj[0].fullName ) // John Smith


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(array){
    return array.reduce((object, value) => {
        object[value.id] = value;
        return object;
    }, {})
}
console.table(groupById(users))
