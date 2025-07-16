// // Objective = make a function that removes all dashes and make things into camelhump Notations

// function camelize(string){
//         return string
//         .split("-")
//         .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join('')


//     }

// console.log(camelize('anas-abd-ghanim'))


// FIlter range function, we take an array, look for values  <= a and >= b



const testArray = [5, 3, 8, 1, 4, 10] 
function filterRange(array, a, b){

    let fliteredArray = []    
    array.forEach(element => {

        if(element >= a){
            fliteredArray.push(element)
        }
        if(element <= b){
            fliteredArray.push(element)
        }
    });
    alert(fliteredArray)
}