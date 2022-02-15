var buy_nows=document.querySelectorAll(".buy_now");
var modal=document.querySelector(".modal");
var close=document.querySelector(".icon_close");
var container=document.querySelector(".container")

for(const buy_now of buy_nows){
    buy_now.addEventListener('click',function(){
        modal.classList.toggle('hide');
    })
}

modal.addEventListener('click',function(){
    modal.classList.toggle('hide')
})

// buy_now[0].addEventListener('click',function(){
//     modal.classList.toggle('hide');
// })
// buy_now[1].addEventListener('click',function(){
//     modal.classList.toggle('hide');
// })
// buy_now[2].addEventListener('click',function(){
//     modal.classList.toggle('hide');
// })
close.addEventListener('click',function(){
    modal.classList.toggle('hide');
})
document.addEventListener('keydown',function(e){
if(e.keyCode==27){modal.classList.add('hide')}
})
container.addEventListener('click',function(event){
    event.stopPropagation()
})
var mobile_menu=document.querySelector(".header_menu.search");
var header=document.getElementById("header")
var header_height=header.clientHeight;
// automatic close/open menu
mobile_menu.onclick=function(){
    var isclose=header.clientHeight===header_height;
    if(isclose){
        header.style.height='auto';
    }
    else{
        header.style.height=null;
    }
}
// automatic close menu when click any press in menu
menu_items=document.querySelectorAll('#header a[href*="#"]')

for(var i=0;i<menu_items.length;i++){
    var menu_item=menu_items[i];
    menu_item.onclick=function(){
        header.style.height=null;
    }
}