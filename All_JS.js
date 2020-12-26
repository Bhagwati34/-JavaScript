//comment
var number =9; // in-line comment

/* this ias a
multi-line
comment */

//data type and variable
/* data type: 
     undefined, null, boolean, string, symbol, number, and object */

// variable:-
 var myName = "dangi";
 myName = 8;
 
 let ourName = "bhagwati";
 const pi = 3.14;
 
 // storing values with assignment operator
 
 var a; //declearing variable
 var b = 4; // assign variable
 
 a=7;
 b=a;
 console.log(a); 
 console.log(b);    
 
 //intializing variables w/ assignment operator
 // intializing these three variable
var a= 5;
var b=10;
var c = "i am boy ";

a= a+1;
b=b+5;
c=c+"dangi";
console.log(c);

//case sensitivity in variable
var Study;
//console.log(STUDY);


// Adding, subtracting, Multiplying, Dividing, Number
var sum = 10+9;
console.log(sum);
var sub = 10-8;
console.log(sub);
var muti = 10 * 10;
console.log(muti);
var divd = 100/10;
console.log(divd);

//Incrementing, Decrementing, Decimal, multiply decimals, divide decimal, Numbers
var myvar=87;
myvar =myvar+1;
console.log(myvar); 
myvar++;
console.log(myvar);
var devar = 11;
devar = devar -1;
console.log(devar); 
devar--;
console.log(devar); 

var mydecimal =5.78;
var decimal=0.00008;
console.log(decimal);
var prod = mydecimal * decimal;
console.log(prod);
var devi= mydecimal/decimal;
console.log(devi);

//Finding a remainder

var remainder ;
remainder = 11%3;
console.log(remainder);

//Compound Assignment with Augmented Addition, subtraction, multiplication, division
var a = 9;
var b=8;
var c=7;

a += 9;
b += 8;
c +=7;
console.log(a);
console.log(b);
console.log(c);

a -= 1;
b -= 1;
c -= 1;
console.log(a);
console.log(b);
console.log(c);

a *= 9;
b *= 8;
c *=7;
console.log(a);
console.log(b);
console.log(c);

a /= 9;
b /= 8;
c /=7;
console.log(a);
console.log(b);
console.log(c);


// Declare string variable

 var FirstName = "Bhagwati";
 var LastName = "dangi";
 console.log(FirstName,LastName);

//Escaping Literal Quotes In string
/*var mystr ="I am a "double Quoted" string inside "double Quoted"";
console.log(mystr);*/ //this code block show syntext error
var mystr ="I am a \"double Quoted\" string inside \"double Quoted\"";
console.log(mystr);

// Quoting String with Single Quotes
var mystr ='I am a "double Quoted" string inside "Single Quoted"';
console.log(mystr);

//Escape Sequences in string
/*
   CODE OUTPUT
   \'     single quote
   \"     double quote
   \\     backslash
   \n     newline
   \r     carriage return
   \t     tab
   \b     backspace
   \f     form feed

  */
  
  var myStr="Firstline\n\t\\Secondline\nThirdline";
  console.log(myStr); 

 //Concatenating String with plus operator
 var twostr="i come first str "+"i come second str";
 console.log(twostr); 
 //Concatenating String with plus Equals operator
 var ourstr="i am first str. "
 ourstr +="i am second str with plus Equal operator";
 console.log(ourstr);
 
 //Constructing String with Variables.
 var myName ="Bhagwati dangi";
 var hello ="hello, my Name is "+ myName + ", How are you ?";
 console.log(hello);

 //Appending Variables to Strings
 var var1=" hello";
 var var2 =" Bhagwati";
 var1 += var2;
 console.log(var1);

//Finding length of string
 var Name ="Bhagwati";
 console.log(Name.length);

//Bracket Notation to find first Character/or any character in String
var Name ="Bhagwati";
console.log(Name[0]); 

//String Immutability
var mystre ="jello world";
//mystre[0]="H" //it con't change the direct 'j' to 'H'
mystre="hello world";
console.log(mystre);

//Bracket Notation to find Nth character in string
var Name ="Bhagwati";
console.log(Name[6]); 
console.log(Name[Name.length-1]); //last character of string

//Bracket Notation to find Nth-to-last character in string
console.log(Name[Name.length-3]);


//Word Blanks
function worldBlanks(mynoun, myadjective, myverb, myadverb) {

	var result="";
	result += "The "+ myadjective +" "+ mynoun +" "+ myverb + " to the store "+myadverb;
	return result;
} 
console.log(worldBlanks("dog", "big", "ran", "quickly"));


//Store Multiple Values with Arrays
var ourArray=["dangi", 23];
console.log(ourArray);
//Nested Arrays
var NArrays =[["Bhagwati", 3], ["dangi", 5]];
console.log(NArrays);

//Access Array Data with Indexes
var ourArrays=[10,20,30,40];
console.log(ourArrays[3]);
console.log(ourArrays.length);

//Modify Array Data with Indexes
ourArrays[0]=100;
console.log(ourArrays);

//Access Multi-Dimensional Arrays with Indexes
var multiArrays=[[1,2,3],[4,5,6],[7,8,9],[[12,23,45],56,78]];
console.log(multiArrays);
console.log(multiArrays[2][1]);

//Manipulate Arrays with Push()
ourArrays.push(['dangi',5678]);  //add element at the end of array
console.log(ourArrays);

//Manipulate Arrays with pop()
ourArrays.pop();  //remove last element from array
console.log(ourArrays);

//Manipulate Arrays with shift()
ourArrays.shift();     //remove first element from array
console.log(ourArrays);

//Manipulate Arrays with unshift()
ourArrays.unshift("dangi");   //add element at the begging of array
console.log(ourArrays);


//Shopping List
var mylist=[["milk",3],["coffee",2],["banana",3],["juice",5],["eggs",6]];
console.log(mylist);



//write Reusable code with Function
function ourReusableFunction(){
	console.log("hello, world");
}
ourReusableFunction();
ourReusableFunction();

//passing Values to Function With Arguments
function ourFunctionWithArgu(a,b){
	console.log(a+b);
}
ourFunctionWithArgu(10,10);
ourFunctionWithArgu(20,10);


//global Scope and Function
var myglobal=40;

function fuctionWithGlobalVar(){
	var mylocal=20;
	console.log(myglobal+mylocal);
}
fuctionWithGlobalVar();

/*function fuctionWithGlobalLocalVar(){
	
	console.log(myglobal-mylocal); //here 'mylocal' is local variable 
	                               //this code show error because local variable can not access outside of function block code
}
fuctionWithGlobalLocalVar(); */


/*function fuctionInSideGlobalVar(){
	mylocals=20;   //now mylocals is a gloabal variable so this can be access outside of function block code.
	
}

function fuctionGobalVarFromOutsideAndInsideOfFunctionCodeBlock(){
	console.log(myglobal-mylocals);

}
fuctionGobalVarFromOutsideAndInsideOfFunctionCodeBlock(); */

//Local Scope And Function
function myLocalScope(){
	var myvars=5;
	console.log(myvars);
}
myLocalScope();
//console.log(myvars);//this code line show error because myvars is local variable

//Global Vs local Scope In function
var outerwear="t-shirt";

function myoutfit(){
		var outerwear="shirt";

	return outerwear;
}
console.log(myoutfit());

console.log(outerwear);

//Return a value from a function with Return 
function ReturnValue(num){
	return num-7;
	
}
console.log(ReturnValue(20));

//Understanding Undefined value Returned from Function
var sum =0;
function addfive(){
	sum+=5;
}
addfive(); //it not return any thing becouse function don't have return type.

//Assignment with a Returned value
var sum =0;
function addfive(){
return sum+=5;
}
console.log(addfive());

//stand in Line 
 
 function nextInLine(arr,item){
 	arr.push(item);
 	return arr.shift();

 }
 var testarr=[1,2,3,4,5];
 console.log("Before: "+ JSON.stringify(testarr));
 console.log(nextInLine(testarr,6));
 console.log("After: "+JSON.stringify(testarr));

//Boolean Values

function ToBoolean(){
	return false;
}
console.log(ToBoolean());

//Use Conditional Logic with If Statements
function TrueOrFalse(wasthatTrue){
	if(wasthatTrue){
		return "yes, that was true";
	}
	return "No, that was false";
}
console.log(TrueOrFalse(true));

//comparison with the equality operator
function testEqual(val){
	if(val==14){
		return "Equal";
	}
	return "Not Equal";
}
console.log(testEqual(10));

//comparison with the Strict Equality Operator
function testEqual1(val){                /* 14=='14' => true   , 14==='14' =>false */
	if(val===14){                         
		return "Equal";              
	}
	return "Not Equal";
}
console.log(testEqual1('14'));

//comparison with Inequality operator 
function testEqual2(val){                /* 14=='14' => true   , 14==='14' =>false */
	if(val != 14){                         
		return "Not Equal";              
	}
	return "Equal";
}
console.log(testEqual1(23));
//comparison with the Strict Inequality Operator
function testEqual1(val){                
	if(val!==14){                         
		return " Not Equal";              
	}
	return "Equal";
}
console.log(testEqual1('14'));

//comparisons with the Greater Than Operator
function testGreaterThan(val){
	if(val>100){
		return "over 100";
	}
	if (val>10) {
		return "over 10";
	}
	return "10 or under";
}
console.log(testGreaterThan(9));
//comparisons with the Greater Than or Equal To Operator
function testGreaterThanOrEqual(val){
	if(val>=20){
		return "20 or over";
	}
	if (val>=10) {
		return "10 or over";
	}
	return "under 10";
}
console.log(testGreaterThanOrEqual(29));

//comparison with the Less than Operator

function testLessThan(val){
	if(val<10){
		return "under 10";
	}
	if (val<100) {
		return "under 100";
	}
	return "over 100";
}
console.log(testLessThan(25));

//comparisons with the less Than or Equal To Operator
function testLessThanOrEqual(val){
	if(val<=10){
		return "10 or under ";
	}
	if (val<=20) {
		return "20 or under";
	}
	return "over 20";
}
console.log(testLessThanOrEqual(10));

// comparison with the Logical And Operator
function testLogicalAnd(vau){
	if(vau <=100 && vau >= 50){
		return "yes";
	}
	return "No";
}
console.log(testLogicalAnd(60));
// comparison with the Logical Or Operator
function testLogicalOr(vau){
	if(vau < 50 || vau > 60){
		return "outside";
	}
	return "inside";
}
console.log(testLogicalOr(49));

//Else Statements
function IfElse(vale){
	if (vale >= 5 ) {
		return "value is Greater than or equal to 5";
	}
	else{
		return "value is smaller than 5"
	}
}
console.log(IfElse(7));

//Else If statement

function ElseIF(valur){
	if (valur > 10)  {
		return "greater than 10";
	}
	else if(valur < 5){
		return "smaller than 5";
	}
	else{
		return "between 5 and 10";
	}
}
console.log(ElseIF(8));

// golf code
var names = ["Hole-in-one", "Eagle", "birdie", "par", "Bogey", "double Bogey","Go Home"];
function GolfCode(par, Strokes){
	if (Strokes==1) {
		return names[0];
	}
	else if (Strokes<=par-2) {
		return names[1];
	}
	else if (Strokes==par-1) {
		return names[2];
	}
	else if (Strokes==par) {
		return names[3];
	}
	else if (Strokes==par+1) {
		return names[4];
	}
	else if (Strokes==par+2) {
		return names[5];
	}
	else if (Strokes>=par+3) {
		return names[6];
	}
	else{
		return -1;
	}

}
console.log(GolfCode(5,8));


//Switch Statements
function caseInSwitch(vol){
	var ans ="";
	switch(vol) {
	
	    case 1:
		       ans="alpha";
	           break;
        case 2:  
               ans="beta";
               break;
        case 3:
               ans="gamma";
               break;
        case 4: 
               ans="delta";
               break;
        default:
                return -1;
       }
	return ans;
}

console.log(caseInSwitch(4));

//Multiple Identical Options in Switch Statements

function switchCase(vak){
	var answ="";
    switch(vak){
    	case 1:
    	case 2:
    	case 3:
    	     answ="Low";
    	     break;
    	case 4:
    	case 5:
    	case 6:
    	     answ="Mid";
    	     break;     
    	case 7:
    	case 8:
    	case 9:
    	     answ="High";
    	     break; 
    	default :
    	      return answ ="-1";         

    }
    return answ;
   }

console.log(switchCase(8));

//Return Boolean values from Functions

function less(a,b){
	return a>b;
}
console.log(less(10,15));

// Return Early Pattern from function
function setup(a,b){
	if(a<0||b<0){
		return undefined;
	}
	return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
console.log(setup(-2,2));


// Counting Cards
var count =0;
 function cc(card){
      switch(card){
      	case 2:
      	case 3:
      	case 4:
      	case 5:
      	case 6:
      	     count++;
      	     break;
      	case 10:
      	case "J":
      	case "Q":
      	case "K":
      	case "A":
      	     count--;
      	     break;
      }
      var holdbet ="Hold";
      if (count>0) {
      	holdbet="bet";
      }
      return count +" "+holdbet;
 }
console.log(cc(10)); 

// build JS Objects
var mydog = {
	"name": "tomi",
	"legs": 4,
	"tail": 1,
	"friends":["everythings!"],
	"live in": "india"
};

console.log(mydog.name);//access  property value using dot notations
console.log(mydog["legs"]);//access  property value using bracket notation
console.log(mydog['live in']);

//update object properties
mydog.name = "Happy Tomi";
mydog["legs"] = 2
console.log(mydog.name);
console.log(mydog["legs"]);

//Add new properties to an object
mydog.bark = "Bow-wow";
mydog["color"] = "black"
console.log(mydog.bark);
console.log(mydog["color"]);


//delete properties from object
delete mydog.color;

//check properties is in object have
function checkobj(checkpro){
	if (mydog.hasOwnProperty(checkpro)) {
		return mydog[checkpro];
	}
	else{
		return "Not Found";
	}
}
console.log(checkobj("name"));
console.log(checkobj("color"));






























