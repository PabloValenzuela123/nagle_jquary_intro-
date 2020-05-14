console.log("hello") 



$(document).ready(onReady); 

function onReady() {
    console.log('JQuary is loaded')
    $('#hello').append('welcome to my page!'); 
   // $('#hello').css('color', 'pink');
   $('#hello').addClass('blue'); 
   $('#submit').on('click', handleSumbmit); 
}


// 1st event code runs at 
console.log("hello"); 

function handleSum(params) {
    
}