// const a = 1;
// const b = 2;
// const c = 3;

// // default precedence
// BODMAS , DMAS RULE IS FOLLOWED
//  const wrong= a + b * c; // 7
//  console.log(wrong)
// // evaluated by default like this
//  const right=a + (b * c); // 7
//  console.log(right)
// // now overriding precedence
// // addition before multiplication
//  const myRight=(a + b) * c; // 9
//  console.log(myRight)
// // which is equivalent to
//  const myWrong=a * c + b * c; // 9
// console.log(myWrong)


// var x=2;
// var z=3;
// var c= * 2 +"  " +x + z ;
// document.write(c)

//  document.write("<br/>")


// var x=2;
// var z=3;
// var c= (x + z )*2;
// document.write(c)



// var x=2;
// var c=3;

// document.write(x += x + c)

//  document.write("<br/>")

// var a=9;
// var d=1;

// document.write(a -= a + d )

//  document.write("<br/>")


// var s=2;
// var f=3;

// document.write(f *= f + c)

//  assignment operators 



// let a= 14;

// a+=4           //same as to a=a + 4
// console.log(a)

// let y= 14;
// y-=4
// console.log(y)


// let v= 14;
// v*=4
// console.log(v)

// let x= 14;
// x%=4
// console.log(x)

// let b= 14;
// b/=4
// console.log(b)

// var som=12;
// var som2=10;
// console.log("som== som2 " , som==som2)
// console.log("som=== som2 " , som===som2)
// console.log("som!== som2 " , som!==som2)
// console.log("som != som2 " , som!=som2)


// task is more amasing 
// var english = 89;
// var math = 60;
// var computer = 80;
// english+=5; /// same as too english=english+5

// var obtainedMarks = english + math + computer;
// var fail = english < 50 || math < 50 || computer < 50;
// console.log( "you are totalMarks are " ,obtainedMarks);
// console.log( " you are persentage is ", (obtainedMarks / 500) *100);
// console.log(fail);


// // var shirt=1200
// var shirt= Number(prompt("enter ur shirt price"))

// // var shoes=2500;
// var shoes= Number(prompt("enter ur shoes price"))

// // var cap=500;
// var cap= Number(prompt("enter ur cap price"))


// var totalBill=shirt+shoes+cap;

// console.log( "you are totalbill is ", totalBill)

// totalBill+=200
// var discount=totalBill *10 /100;
// var finalBill=totalBill-discount
// console.log( "afetr applying 10% discount " ,finalBill)
// console.log(totalBill > 4000)         
// var nums1=100;
// var nums="100";
// if( nums1==100 && nums===100){
//     console.log("     both are corrct")
// }

// var age=Number(prompt("enter ur age"));
// if (age > 18 && age <=22){
//     console.log("yes you are eligibale")
// }
// else if (age > 16 && age <=19){
//     console.log("yes come in ")
// }


// else if (age >= 22 && age <= 30){
//     console.log("u are too old fo this ")
// }

// else {
//     console.log(" not eligiable")
// }


var price1=Number(prompt("enter producet price"));
var quantity1=Number(prompt("enter producet quantity1"));
var age=Number(prompt("enter ur age "));


var totalBill=price1 * quantity1;

if(totalBill >= 5000 && age >=18){
    console.log("20% discount applied")
}
else if (totalBill >=3000 && age >= 25){
    console.log("10% discount applied")
}


else {
    console.log("0% discount applied")
}

// var salary = Number(prompt("enter ur salary"));
// var experience = Number(prompt("enter ur experrience "));
// var performance = Number(prompt("enter ur performance "));

// var bonus;
// if (salary >=50000 && experience >= 3){
//     bonus=salary *20 /100;
//     salary +=bonus;
//     console.log("20% bonus", bonus)
// }

// else if (salary >=30000 || performance >= 90){
// bonus=salary *10 /100
// salary +=bonus 
// console.log("10% bonus", bonus)
// }


// else {
//     console.log("no bonus")
// }

// var price=10000;
// var discount= price  *10 /100;
// price-=discount;
// console.log( "discount has applied " ,discount )

// var price=Number(prompt("enter ur price"));
// var discountPer=Number(prompt("enter ur discount"));
// var discount=price * discountPer /100;
// var finalPrice= price -discount;
// console.log( "the final price is here ",finalPrice)


var salary=Number(prompt("enter ur salary"));
var bonus=Number(prompt("enter ur bonus"));
var finalSalary=salary * bonus /100;
salary +=finalSalary
console.log(salary)

var price = Number(prompt("Enter product price"));
var quantity = Number(prompt("Enter quantity"));
var discountPer = Number(prompt("Enter discount percentage"));
var finalBill=price * quantity;
var discount=finalBill *discountPer/100
finalBill -=discount
console.log(discount)
   
// }
//  var arr1=[12 , 13, 15, 19, 18, 89, 90, 100, -];
//  let arr= Math.min(...arr1)   // and we can use also max to finde the largest numebr of array 
//  console.log( arr);
 


// p=o/t*100
// 10/100*t=o
// 0.5*t=o

// var salary=Number(prompt("enter ur salary "));
// var bonus= Number(prompt("enter ur bonus here"));
// var addBonus= salary * bonus /100
// salary +=addBonus
// console.log(salary);



// var price=Number(prompt("enter ur price"));
// var quantity=Number(prompt("enter ur quintities"));
// var discount=10;
// var finalBill=price * quantity ;
// var discountAmount= finalBill * discount /100;
// finalBill -=discountAmount
// console.log(finalBill);



var customer= +prompt("enter ur age");
var price = +prompt("enter ur price");
var discounty = 10;
var discountAmount= price * discounty /100;
price -=discountAmount;

if( customer  > 50){
    console.log("discount applied" , price)
}
 else if ( customer > 20){
    console.log("discount not applied" , price +discountAmount);
    
 }



