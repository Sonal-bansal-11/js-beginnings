//interview notes 
/* datatypes category based upon how data is stored in memory and how you access them
   1.Primitive-
     #call by value(original data reference in memory is not given,all changes done in copy only)
     # 7 types:String,Number,Boolean,Null(empty not zero ),Undefined(variable and memory space declared not value),
     Symbol(unique),BigInt(scientific or big values)
   2.Non primitive(or reference type)-
     Array,Objects,Functions
*/
     //Is js dynamically typed or statically typed language
     // =>dyanamically typed 

     const score=100
     const scoreValue=100.3
     const isLoggedIn=false
     const outsideTemp=null
     let userEmail;
     const id=Symbol('123')
     const anotherId=Symbol('123')
     console.log(id===anotherId)
     //const bigNumber=1234567890987654321n

     const heros=["Shaktiman","naagraj","doga"] //array
     let myObj= {      //object
        name:"Sonal",
        age:21,
     }
    
     //treating function as variable
     // function(){}

     const myFunction=function(){
        console.log("hello world")
     }

     console.log(typeof bigNumnber);  //undefined
     console.log(typeof outsideTemp);  //null(object)
     console.log(typeof scoreValue); //Number
     console.log(typeof myFunction);  //FunctionO(called object function)
     console.log(typeof heros)  //object
     console.log(typeof anotherId);  //symbol
         
     //+++++++++++++++++++++++++++++++MEMORY+++++++++++++++++++++++++++++++++++++++++++++

     //Stack memory(Primitive datatype uses)                copy milta hai 
     //Heap Memory(Non primitive datatypes uses)           reference milta hai original value ka (chnages done on original)

     let myName="Sonal"
     let anotherName=myName;
     anotherName="Tanu";
  
     console.log(myName);       //sonal
     console.log(anotherName);    //tanu

     let userOne={                       //non primitive object
        email:"user@google.com",
        upi:"user@ybl"
     }
      
     let userTwo=userOne;                  //points to same reference 

     userTwo.email="sonal@google.com"      //changes done in both
     console.log(userOne.email)             //sonal@google.com
     console.log(userTwo.email)             //sonal@google.com
   