document.getElementById('btn').onclick = function(){
    var P = document.getElementById('x1').value;
    //  Dom Method==>getElemetById()
    //Dom property ==>value
    var R = document.getElementById('x2').value;
    var N = document.getElementById('x3').value;

    if(P=='' || R=="" || N==""){
        errMsg="All values are required";
    }
   else if(isNaN(P) || isNaN(R) || isNaN(N)){
        errMsg="Values must be a number";
    }
    else if(P<0 || R<0 || N<0){
        errMsg="All Values must be above zero";
    }
   
    else{
        P = Number(P);
        R = Number(R);
        N = Number(N);

        R = R/12/100;
        N=N*12;
        var EMI= P *R *( (1+R)**N ) / ( (1+R)**N - 1);
        EMI = Math.round(EMI);
        console.log(EMI);

        var Total_Amount_Payable = EMI * N;
        console.log(Total_Amount_Payable);

        var Interest_Amount = Total_Amount_Payable - P;
        console.log(Interest_Amount);


errMsg =`
Principal Amount :${P}<br/>
Interest Amount :${Interest_Amount}<br/>
Total  Amount :${Total_Amount_Payable}<br/>
`;
Highcharts.chart('chart', {
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
                format: '<b>{point.name}</b>: {point.y:.1f} '
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Principal Amount',
            y: P,
            sliced: true,
            selected: true
        }, {
            name:'Interest Amount',
            y: Interest_Amount
        }]
    }]
});
}



document.getElementById('result').innerHTML =errMsg;
}