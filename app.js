let button1= document.getElementById('fbutton');
let button2= document.getElementById('sbutton');
let button3= document.getElementById('tbutton');

let h41=document.getElementById('h41');
let h42=document.getElementById('h42');
let h43=document.getElementById('h43');

button1.addEventListener('click',display1);
button2.addEventListener('click',display2);
button3.addEventListener('click',display3);

function display1(){

    if( h41.style.display=='block'){
        h41.style.display='none';
    }
    else{
        h41.style.display='block';

    }
    
}



function display2(){

    if( h42.style.display=='block'){
        h42.style.display='none';
    }
    else{
        h42.style.display='block';

    }
    
}

function display3(){

    if( h43.style.display=='block'){
    h43.style.display='none';
}
    else{
        h43.style.display='block';

    }
    
}