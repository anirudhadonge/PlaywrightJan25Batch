/// Generic Implementing of sum action.


function add<T>(a:T):T{
    return a
}

// function add(a){
//     return a
// }

console.log(typeof(add<string>('anirudha')));

console.log(typeof(add<number>(5)));