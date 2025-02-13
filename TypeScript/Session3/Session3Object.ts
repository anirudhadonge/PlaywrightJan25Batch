// import {item,student,orderedItem} from './CustomTypes.ts'
// // let mynumber:number = 24;
// // const mysecondnumber:number = 25;
// // mynumber = 26;
// // mysecondnumber= 27;
// ///  name, price, brand

// // let name:string
// // let price:number
// // let band:string


// // interface student {
// //     name:string;
// //     rollNumber:number;
// //     marks?:number;
// // }

// // tata salt
// // {name="rock salt"
// // price=25
// // brand="Tata salt"}
// // let tutor:student ={
// //     name:"Anirudha",
// //     rollNumber:7
// // }

// // console.log(tutor);

// // let salt:item={
// //     name:"Rock salt",
// //     price: 25,
// //     brand:"Tata salt"
// // }
// // salt.name ="R Salt";
// // PrintItemDetails(salt);

// function PrintItemDetails(order:item){
//     console.log(order);
// }
// let firstOrder:orderedItem ={
//     name:"rock salt",
//     price:25,
//     brand:"Tata Salt",
//     OrderId:1234566,
//     DateOfDeliver:'25feb25'
// }

// PrintItemDetails(firstOrder);


type point={
    x:number;
    y:number;
}

type pointZaxis =  point & {
    z:number;
}
let firstPoint:point ={
    x:20,
    y:50
}

let PointwithZaxis : pointZaxis ={
    x:20,
    y:30,
    z:50
}

console.log(PointwithZaxis);