'use strict'

var arrTicketNo=[];
var arrAmount=[];
var allTickets=[
{ticketNo:'R1',ticketAmount:80},
{ticketNo:'R2',ticketAmount:180},
{ticketNo:'R3',ticketAmount:80},
{ticketNo:'R4',ticketAmount:100},
{ticketNo:'R5',ticketAmount:120},
{ticketNo:'R6',ticketAmount:100},
{ticketNo:'R7',ticketAmount:80},
{ticketNo:'R8',ticketAmount:120},
{ticketNo:'R9',ticketAmount:120},
{ticketNo:'R10',ticketAmount:120},
{ticketNo:'R11',ticketAmount:120},
{ticketNo:'R12',ticketAmount:120},
{ticketNo:'R13',ticketAmount:120},
{ticketNo:'R14',ticketAmount:120},
{ticketNo:'R15',ticketAmount:120}
];

allTickets.length >0 && allTickets.forEach((val)=>{
var{ticketNo,ticketAmount}=val;
var spanTag=document.createElement("span");
spanTag.innerHTML=`${ticketNo}</br>${ticketAmount}`;
spanTag.className="ticket";
spanTag.setAttribute("for",`${ticketNo} # ${ticketAmount}`)
spanTag.addEventListener("click",ticketClick);
document.querySelector('.allTickets').append=spanTag;
})

function ticketClick(){
var result=this.getattribute("for");
console.log(result);
var resultSplit=result.split("#");
console.log(resultSplit);



}