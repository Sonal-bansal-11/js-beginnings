let score="33"

console.log(typeof score); //string
console.log(typeof (score));//as a method

//datatypes are capital(class concept)

let valueInNumber=Number(score) //conversion

console.log(typeof (valueInNumber)) //number
console.log(valueInNumber); //33

let input="33abc" //string input like "Sonal" gives NaN
console.log(typeof input)  //string
let inputToNum=Number(input) 
console.log(typeof inputToNum);  //number
console.log(inputToNum);        //NaN (not a number)

let input1=null
console.log(typeof input1)  //object
let input1ToNum=Number(input1) 
console.log(typeof input1ToNum);  //number
console.log(input1ToNum);        //0

let input2=undefined
console.log(typeof input)  //string
let input2ToNum=Number(input) 
console.log(typeof input2ToNum);  //number
console.log(input2ToNum);        //NaN 

let input3=true
console.log(typeof input3)  //boolean
let input3ToNum=Number(input3) 
console.log(typeof input3ToNum);  //number
console.log(input3ToNum);        //1 for true 0 for false

//"33"=>33
//"33abc"=>NaN
//true=>1 ;false=>0

let isLoggedIn=1;  //if value 0 give false if "sonal" gives true if empty string "" gives false
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  //true

//1=>true;0=>false;""=>false;"Sonal"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber);//string
console.log(stringNumber)//33






