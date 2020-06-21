// // que no 1
// var no1=new Date();
// document.write(no1)

// // que no 2
// var no2=new Date()
// var no20=no2.getMonth()
// if(no20==0){
//     var no21="january"
// }
// if(no20==1){
//     var no21="feburary"
// }
// if(no20==2){
//     var no21="march"
// }
// if(no20==3){
//     var no21="april"
// }
// if(no20==4){
//     var no21="may"
// }
// if(no20==5){
//     var no21="june"
// }
// if(no20==6){
//     var no21="july"
// }
// if(no20==7){
//     var no21="august"
// }
// if(no20==8){
//     var no21="september"
// }
// if(no20==9){
//     var no21="october"
// }
// if(no20==10){
//     var no21="november"
// }
// if(no20==11){
//     var no21="december"
// }
// document.write("current month: " + no21)

// // que no 3
// var no3=new Date()
// var no30=no3.getDay()
// if(no30==1){
//     var no31="MON"
// }
// if(no30==2){
//     var no31="TUE"
// }
// if(no30==3){
//     var no31="WED"
// }
// if(no30==4){
//     var no31="THRU"
// }
// if(no30==5){
//     var no31="FRI"
// }
// if(no30==6){
//     var no31="SAT"
// }
// if(no30==0){
//     var no31="SUN"
// }
// document.write("current day: " + no31)


// // que no 4
// var no4=new Date()
// var no40=no4.getDay()
// if(no40==6  || no40==0){
//     alert("Its a FUN DAY!")
// }

// // que no 5
// var no5=new Date()
// var no50=no5.getDate()
// if(no50<16){
//     alert("first fifteen day of the month")
// }
// else{
//     alert("last days of the month")
// }


// // que no 6
// var no61=new Date("Jan 1, 1970")
// var no6=new Date()
// var totime=no61.getTime()
// var todate=no6.getDate();
// var tomili=no6.getTime()
// var totalmili=tomili-totime;
// var minute=totalmili/60000;
// document.write("current date : " + no6 + "<br>" )
// document.write("elapsed milisecond since jan 1 1970 : " + totalmili + "<br>" )
// document.write("elapsed minute since jan 1 1970 : " + minute + "<br>" )


// // que no 7
// var no7=new Date()
// var no70=no7.getHours()
// if(no70<12)
// {
//     alert("its AM")
// }
// else{
//     alert("ITS PM")
// }

// // que no 8
// var Laterdate=new Date("Thu Dec 31 2020")
// alert("Later date: " + Laterdate)


// // que no 9
// var no91=new Date("Jun 18, 2015")
// var no9=new Date()
// var totime=no91.getTime()
// var todate=no9.getDate();
// var tomili=no9.getTime()
// var totalmili=tomili-totime;
// var minute=totalmili/60000;
// var days=minute/1440;
// var day1=Math.round(days)
// alert(day1 + "days passed since june 18 of ramadan") 

// // que no 10
// var no101=new Date("Jun 1,2015")
// var no10=new Date()
// var totime=no101.getTime()
// var todate=no10.getDate();
// var tomili=no10.getTime()
// var totalmili=tomili-totime;
// var minute=totalmili/60000;
// var second=minute*60
// alert(second + "passed since begining of 2015") 

// // que no 11
// var no11=new Date();
// alert(no11)
// no11.toDateString
// var no111=no11.getHours()
// var no112=no111-1;
// no11.setHours(no112)
// alert("later date: " + no11)


// // que no 12
// var no12=new Date();
// alert(no12)
// no12.toDateString
// var no121=no12.getFullYear()
// var no122=no121-100;
// no12.setFullYear(no122)
// alert("100 years back it was: " + no12)

// // que no 13
// var no13=new Date();
// var no130=no13.getFullYear()
// var no131=prompt("enter your age :")
// var no132=no130-no131;
// alert("age: " + no131 + "\n" + "birth year: " + no132 )

// // que no 14
// var no14=prompt("enter your name");
// var month=prompt("enter month");
// var unit=prompt("enter number of units");
// var charge=prompt("charges per unit?");
// var nap=unit*charge;
// var lp=(nap/100)*5;
// var gp=nap+lp;
// document.write("consumer name" + no14 + "<br>" )
// document.write("month of" + month + "<br>")
// document.write("number of unit" + unit + "<br>")
// document.write("charge per unit" + charge + "<br><br><br>")
// document.write("Net Amount Payable (within Due Date)" + nap + "<br>")
// document.write("late payment surcharge" + lp + "<br>")
// document.write("Gross Amount Payable (after Due Date)" + gp)








