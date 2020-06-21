// // que no 1
// var fn=prompt("enter first name")
// var ln=prompt("enter last name")
// fn.toString()
// ln.toString()

// var ffn=fn+ln;
// alert("welcome " + ffn + " to our site")


// // que no 2
 
//  var x = prompt("enter mobile brand to know string")
//  document.write(x + "<br>" + "length= ")

//  document.write(x.length ); 

// // que no 3
// var pstr="pakistan"
// var str = prompt("enter letter to know index of pakistan")
//   var n = pstr.indexOf(str);
//   alert(n)

 // // que no 4
//  var pstr1="hello world"
// var str1=pstr1.lastIndexOf("l")
//     document.write(pstr1 + "<br>" + "index= " + str1)
   
 
// // que no 5
// var no5="pakistani"
// var no51=prompt("enter index (pakistani) no to know the letter");
// var no52=no5.charAt(no51);
// alert("character at no: " + no51 + " is " + no52)


// // que no 6
// var str1 = "sheroze ";
// var str2 = "rehman ";
// var str3 = " Have a nice day!";
// var str4 = str1.concat(str2, str3);
// alert(str4)

// // que no 7
// var no7="hyderabad"
// var no71 =no7.replace("hyder","islam")
// document.write("city: " + no7 + "<br>" + "after change: " + no71)

// // que no 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var nmess= message.replace("and","&");
// var nmess1= nmess.replace("and","&");
// document.write("before: " + message + "<br>")
// document.write("after: " + nmess1)

// // que no 9
// var no9="472";
// var no90=typeof no9
// var no91 = parseInt(no9)
// var no92 = typeof no91
// document.write(no9 + "<br>" + "type " + no90 + "<br>")
// document.write(no91 + "<br>" + "type " + no92)


// // que no 10
// var no10=prompt("enter syntax to see it in capital");
// var no11=no10.toUpperCase()
// document.write("lowercase : " + no10 + "<br>")
// document.write("uppercase : " + no11 + "<br>")
 
// // que no 11
// var no12=prompt("enter syntax to see it in capital");
// var no13=no12.charAt(0)
// var no14=no13.toUpperCase()
// document.write("user input : " + no12 + "<br>")
// document.write("title case : " + no14 + no12.slice(1) )


// // que no 12
// var num=35.36;
// var num1=num.toString()
// var num2=num1.replace(".","")
// document.write("number " + num + "<br>" + "result " + num2)


// // que no 13
// var no130=prompt("enter a user name");
// if(no130.includes("@")){
//     alert("enter a valid username")
// }
// if(no130.includes(".")){
//     alert("enter a valid username")
// }
// if(no130.includes("!")){
//     alert("enter a valid username")
// }

// // que no 14
// var no140= ["cake", "apple pie", "cookie", "chips", "patties"]
// var no141=prompt("enter name of bakery item to know index");
// var no142=no141.toLowerCase()
// var no143 =no140.indexOf(no142)
// alert(no143)

// // que no 15
// var no150=prompt("enter the password            a. It should contain alphabets and numbers        b. It should not start with a number         c. It must at least 6 characters long")
// if 








// // que no 16
// var no160=prompt("enter message to see its split")
// var no161=no160.length
// for(var i=0;i<=no161;i++)
// {
//     document.write(no160.charAt(i) + "<br>")
// }


// // que no 17
// var no170=prompt("enter word for last sentence");
// var no171=no170.length
// var no172=no171-1
// var no173=no170.charAt(no172)
// alert(no173)


// // que no 18
var no180="The quick brown fox jumps over the lazy dog"
var no181=no180.split(" ")
var count=0
var no182=no181.length
for(var i=0;i<=no182;i++)
{
    if(no181.charAt(i)==="the"|| no181.charAt(i)==="The"){
    count+1;
    }
}
alert(count);




