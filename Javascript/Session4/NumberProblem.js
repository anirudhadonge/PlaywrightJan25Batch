

let myNumber = 12345 /// 54321  12345/10 = 1234.5 , 123.45
let temNumber = 0;

while(myNumber>0){
    temNumber = temNumber *10 + myNumber%10;
    myNumber = myNumber/10 - (myNumber%10)/10; //123.4 -->123
}
 
console.log(temNumber);
