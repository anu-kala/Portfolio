//DOM event handler

document.querySelector("#btn").onclick = function(){
    document.querySelector(".result").innerHTML="";

//console.log
var amount = document.querySelector("#x1").value;

var roi = document.querySelector("#x2").value;
var duration = document.querySelector("#x3").value;



//type of
amount= parseInt(amount);
roi= parseFloat(roi);
duration = parseInt(duration);

var i=1;
var opening_balance = 0;

var totalAmount = 0;


while(i<=duration){
//totalAmount=totalAmount + amount;
totalAmount += amount;

var interest_earned = (opening_balance + amount) * roi/100;
    interest_earned =Math.round(interest_earned);
var closing_balance = opening_balance + amount + interest_earned;

console.log(i,opening_balance,amount,interest_earned,closing_balance);


var trTag =document.createElement('tr');
console.log(trTag,typeof trTag);


var tdTag1 =document.createElement('td');
console.log(tdTag1,typeof tdTag1);

var tdTag2 =document.createElement('td');
console.log(tdTag2,typeof tdTag2);

var tdTag3 =document.createElement('td');
console.log(tdTag3,typeof tdTag3);

var tdTag4 =document.createElement('td');
console.log(tdTag4,typeof tdTag4);

var tdTag5 =document.createElement('td');
console.log(tdTag5,typeof tdTag5);


tdTag1.innerText =i;
tdTag2.innerText =opening_balance;

tdTag3.innerText =amount;

tdTag4.innerText =interest_earned;

tdTag5.innerText =closing_balance;

trTag.append(tdTag1)
trTag.append(tdTag2)

trTag.append(tdTag3)

trTag.append(tdTag4)
trTag.append(tdTag5)

document.querySelector('.result').append(trTag);
i++;
opening_balance=closing_balance;
}

document.querySelector('.y1').innerHTML=closing_balance;
document.querySelector('.y2').innerHTML=totalAmount;
document.querySelector('.y3').innerHTML=closing_balance -totalAmount;
}