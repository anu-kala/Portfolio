function myfunc(xyz){
    console.log(xyz);

    var thumbPath = xyz.src;
    console.log(thumbPath);

     var mainPath = thumbPath.replace("128/128","832/832");
    console.log(mainPath);

    console.log(document.getElementById('big-image'));
    document.getElementById('big-image').src=mainPath;

}

function  hideBox(){
    document.querySelector('.blackbox').style.display='none';
    document.querySelector('.modalbox').style.display='none';
}
function  showBox(){
    document.querySelector('.blackbox').style.display='block';
    document.querySelector('.modalbox').style.display='block';
}
hideBox()

document.querySelector('.icon').onclick =function(){
    showBox();
}
document.querySelector('.close').onclick =function(){
    hideBox();

}
document.querySelector('.blackbox').onclick =function(){
    hideBox();

}
document.body.onkeyup=function(){
    if(event.keyCode==27){
        hideBox();
    }
}
document.querySelector('.descPara').style.display='none';
document.querySelector('.font2').style.display='none';
document.querySelector('.deschead').onclick=function(){
    console.log(this.nextElementSibling);
    console.log(this.nextElementSibling.style.display);
    var ans = this.nextElementSibling.style.display;

   if(ans== "none"){
    document.querySelector('.descPara').style.display='block';
    document.querySelector('.font1').style.display='none';
    document.querySelector('.font2').style.display='inline-block';
   }
   else{
    document.querySelector('.descPara').style.display='none';
    document.querySelector('.font1').style.display='inline-block';
    document.querySelector('.font2').style.display='none';
   }

}

