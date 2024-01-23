// document.addEventListener('DOMContentLoaded',()=>{
// var icon=document.getElementById("menuButton");
// var menu=document.getElementById("menu");
// icon.addEventListener('click',()=>{
//     console.log('clickd')
//         menu.classList.toggle('hide');
    
// })
// })
//     for(tabcontent of tabcontents){
//         tabcontent.classList.remove('active-tab');
//     }
//     event.currentTarget.classList.add("active-link");


// var tablinks= document.getElementsByClassName('tab-links');
// function opentab(tabname){
//     for(tablink of tablink){
//         tablink.classList.remove('active-link');
//     }
//     document.getElementById(tabname).classLisr.add("active-tab");
// }

var skill=document.getElementById("list");
var education=document.getElementById("education");
var edu=document.getElementById("edu");
var lan=document.getElementById("lan");


education.addEventListener('click',function(){
    edu.style.transform='translateX(0)'
    lan.style.transform='translateX(1000vh)'

})
skill.addEventListener('click',function(){
    edu.style.transform='translateX(1000vh)'

    lan.style.transform='translateX(0)'

    
})
