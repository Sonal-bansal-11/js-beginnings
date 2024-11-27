//  simple or basic comparison on numbers or strings ,ans is in true or false
console.log(1>2); //false
console.log(1>=2); //false
console.log(1<2);  //true
console.log(1<=2);  //true
console.log(1==2);  //false
console.log(1!=2);  //true

//where problem comes
//when datatypes are different in comparison
//no comparable or predictable result

console.log("2">1);  //true  //conversion occurs
console.log("02">1);  //true

console.log(null>0);  //false //0 not >0  //sometimes null convert to 0 or nan
console.log(null==0);  //false
console.log(null>=0);  //true //value conversion problem //0>=0

//the reason is that an equality check == and comparisons >,<,>=,<= work differently
//comparison copnvert null to a number ,treating it as 0

//undefined give false for all values
console.log(undefined==0); //false
console.log(undefined>0);  //false
console.log(undefined<0);  //false

//=== strict check(strictly check value its datatype also)

console.log("2"===2); //false