'use strict';
var arrTicketNo=[];
var arrAmount=[];

var allTickets =[
    {ticketNo:'R01',ticketAmount:80},
    {ticketNo:'R02',ticketAmount:80},
    {ticketNo:'R03',ticketAmount:90},
    {ticketNo:'R04',ticketAmount:90},
    {ticketNo:'R05',ticketAmount:20},
    {ticketNo:'R06',ticketAmount:20},
    {ticketNo:'R07',ticketAmount:10},
    {ticketNo:'R08',ticketAmount:80},
    {ticketNo:'R09',ticketAmount:18},
    {ticketNo:'R10',ticketAmount:13},
    {ticketNo:'R11',ticketAmount:21},
    {ticketNo:'R12',ticketAmount:60},
    {ticketNo:'R13',ticketAmount:17},
    {ticketNo:'R14',ticketAmount:27},
    {ticketNo:'R15',ticketAmount:70},
    {ticketNo:'R16',ticketAmount:21},
    {ticketNo:'R17',ticketAmount:60},
    {ticketNo:'R18',ticketAmount:17},
    {ticketNo:'R19',ticketAmount:27},
    {ticketNo:'R20',ticketAmount:70},
    {ticketNo:'R21',ticketAmount:60},
    {ticketNo:'R22',ticketAmount:17},
    {ticketNo:'R23',ticketAmount:27},
    {ticketNo:'R24',ticketAmount:70}

];

//console.log(allTickets.length);





allTickets.length > 0 && allTickets.forEach((val)=>{

    var{ticketNo,ticketAmount} =val;
    var spanTag=document.createElement("span");
    spanTag.innerHTML =`${ticketNo}<br/> ${ticketAmount}`;
    spanTag.className="ticket";
    spanTag.setAttribute("for",`${ticketNo} # ${ticketAmount}`)

    


    spanTag.addEventListener("click",ticketClick);
    document.querySelector('.allTickets').append(spanTag);
})


function ticketClick(){
    console.log(this);
    var result=this.getAttribute("for");
    console.log(result);

    var resultSplit=result.split("#");
    console.log(resultSplit);
    //Arry Destructor

    var[no,amount]=resultSplit;
    console.log(no);
    console.log(amount);

var check_ticket=arrTicketNo.indexOf(no);
console.log(check_ticket);//-1

if(check_ticket == -1){
    arrTicketNo.push(no);
    arrAmount.push(amount);
    this.style.background='red';
    
}
else{
    //console.log("tickets exists")
    arrTicketNo.splice(check_ticket,1);
    arrAmount.splice(check_ticket,1);
    this.style.background='white';

}


  
    console.log(arrTicketNo);
    console.log(arrAmount);
    if (arrTicketNo.length>0){

    document.getElementById('x1').innerHTML=arrTicketNo.join(",");
    document.getElementById('x2').innerHTML=eval(arrAmount.join("+"));
    }
    else{
        document.getElementById('x1').innerHTML="No ticket selected";
        document.getElementById('x2').innerHTML=0;
    }
    

}