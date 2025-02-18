
export enum month {
    jan ='Jan',
    feb ="February",
    mar ="Mar"
}

export function GetMonthIndex(month:string) : number{

    switch(month){
        case "Jan":
            return 1;
        case 'February':
            return 2;
        case "Mar":
            return 3;
        default:
            return 0;
    }
}


// //console.log(GetMonthIndex('Jan'));

// console.log(GetMonthIndex(month.feb));
// console.log(GetMonthIndex(month.feb));
// console.log(GetMonthIndex(month.feb));
// console.log(GetMonthIndex(month.feb));

// Enum
