"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.month = void 0;
exports.GetMonthIndex = GetMonthIndex;
var month;
(function (month) {
    month["jan"] = "Jan";
    month["feb"] = "February";
    month["mar"] = "Mar";
})(month || (exports.month = month = {}));
function GetMonthIndex(month) {
    switch (month) {
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
