// // que no 1
// function no1() {
// var now = new Date();
// return now;
// }
// document.write(no1());

// // que no 2
// function no2() {
//     var fn=prompt("enter first name")
//     var ln=prompt("enter last name")
//     var ffn="have a good day " + fn + ln
//     return ffn
// }
// document.write(no2());


// // que no 3
// function sum(){
//     var a=prompt("enter first number")
//     var b=prompt("enter second number");
//     var d=parseInt(a)
//     var e=parseInt(b)
//     var c=e+d
//     return c

// }
// alert(sum());

// // que no 4
// function cal(){
// var num1=prompt("enter first number")
// var num2=prompt("enter second number")
// var oper=prompt("enter operator name")
// var a=parseInt(num1)
// var b=parseInt(num2)

// if(oper==="+"){
//     var c=a+b
// }
// if(oper==="-"){
//     var c=a-b
// }
// if(oper==="/"){
//     var c=a/b
// }
// if(oper==="*"){
//     var c=a*b
// }
// return c}
// alert(cal())

// // que no 5
// function squ(){
//     var num=prompt("enter number you want square of");
//     return num*num
// }
// alert(squ());

// // que no 6
// function fact(n) { 
//     var num=prompt("enter number you want square of");
//     var ans=1; 
      
//     for (var i = 2; i <= num; i++) 
//         ans = ans * i; 
//     return ans; 
// } 
// alert(fact());

// // que no 7
// function count(c,d) {
//     for(var i=c;i<=d;i++)
//     document.write(i + "<br>")
// }
// var a=prompt("enter start number")
// var b=prompt("enter end number")
// count(a,b);

// // que no 8
// function hyp(b,p){
//      var a=(Math.pow(b, 2) + Math.pow(p, 2));
//      var z=Math.sqrt(a)
// return z
//     }
  
// var base=prompt("enter base");
// var perp=prompt("enter perpendicular")
// alert(hyp(base,perp))

// // que no 9
// function rect(a,b){
// var c=a*b
// return c
// }
// alert(rect(23,7))

// // que no 10
// function palin(n,nnc){
//         for (var i = 0; i < n/2; i++) {
//           if (nnc[i] !== nnc[n - 1 - i]) {
//             alert("not palindrome");
//           }
//           else
//         alert("palindrome");
//        }}
// var check=prompt("enter string to know its palin or not")
// var nc=check.toLowerCase()
// var ind=nc.length
// palin(ind,nc)

// // que no 11

// function cap(spl){

//   var nc = spl.split(' ');
//   var arr = [];
    
//   for(var i = 0; i < nc.length; i++){
//       arr.push(nc[i].charAt(0).toUpperCase()+nc[i].slice(1));
//   }
//   return arr.join(' ');
// }
// alert(cap("the quick brown fox"));

// // que no 12
// function long(web){
//     var lc=web.split(' ')
//     var arr1=[];
//     arr1.push(lc)
//     var smalle = arr1[0];
//     for(var i=1;i<=arr1.length;i++){
//         if(arr1[i].length>smalle.length){
//             smalle=arr1[i];
//         }
//     }
//     return smalle
// }
// alert(long("web development course"))

// // que no 13
// function ocr(str,res){
//     var str = "JSResourceS.com"; 
//     var res = str.match(/o/g);
//     ress=res.length;
//     return ress
// }
//     alert(ocr());


// // que no 14
// function calcircumference(r){
// var c=2*3.142*r
// return c;
// }
// function calcarea(r){
//     var a=3.142*r*r;
//     return a
// }
// var y=prompt("enter radius:");
// alert("circumference of circle is" + calcircumference(y));
// alert("area of circle is" + calcarea(y))