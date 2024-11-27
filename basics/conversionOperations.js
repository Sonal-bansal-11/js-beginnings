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


//************************* OPERATIONS************************************************

let value=3
let negValue=-value
console.log(negValue); //-3

console.log(2+2) //4
console.log(2-2) //0
console.log(2*2) //4
console.log(2**2) //4
console.log(2/2)  //1
console.log(2%2)  //0

let str1="Hello"
let str2=" Sonal"
let str3=str1+str2;
console.log(str3);

//string to number conversion is confusing
//conversion as preffered number or string
//where problem comes(complex situations)  
//if string first all treat as string ;if string last, number in start only string treat as string

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

//use paranthesis
console.log(3+4*5%3);  //5

//tricky or special type conversions

console.log(true); //true
console.log(+true); //1
//console.log(true+); //error
console.log(+""); //0

let num1,num2,num3
num1=num2=num3=2+2

//precedence postflix
let gamecounter=100
gamecounter++;
console.log(gamecounter); //101

//prefix
let gameCounter=100
++gameCounter;
console.log(gameCounter); //101

//postflix and prefix code
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



























