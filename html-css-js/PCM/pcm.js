

var button=document.getElementById("btn");
//console.log(typeof button);
//console.log(button);
//DOM event handling
//first class function


button.onclick=function(){
    //console.log('test');
    //console.log(document.getElementById('x1'));
    //console.log(document.getElementById('x2'));
    //console.log(document.getElementById('x3'));


    var P = document.getElementById('x1').value;
    //  Dom Method==>getElemetById()
    //Dom property ==>value
    var C = document.getElementById('x2').value;
    var M = document.getElementById('x3').value;
    //console.log(P, typeof P);

   // console.log(isNaN(P));//FALSE OR TRUE

    var errMsg ='';
    if(P=='' || C=="" || M==""){
        errMsg="All values are required";
    }
   else if(isNaN(P) || isNaN(C) || isNaN(M)){
        errMsg="Values must be a number";
    }
    else if(P<0 || P>100 || C<0 || C>100 || M<0 || M>100){
        errMsg="Values must be in between 0 and 100";
    }
    else if(P<35 || C<35 || M<35){
        errMsg="fail";
    }
    else{
        P = Number(P);
        C = Number(C);
        M = Number(M);

        var total = P + C + M;
        console.log(total);
    

        var percentage = total/300 * 100;

        var classValue='';
        if(percentage >=70){
            classValue='Distinction'
        }
       else if(percentage >= 60){
            classValue='I class';
        }
        else{
            classValue='II class';
        }
        errMsg = `Total Marks :${total}<br/>
        Percentage :${percentage.toFixed(2)}%<br/>
        Class :${classValue}
        `;
       
 
 Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Physics',
            y: P,
            sliced: true,
            selected: true
        }, {
            name: 'Chemistry',
            y: C
        },  {
            name: 'Maths',
            y:M
        }]
    }]
});
}
    document.getElementById('result').innerHTML=errMsg;
}













