const dc=document.querySelector(".dropdown_container");
const product=document.querySelector(".product");
const menu=document.getElementById("menu");
const clos=document.getElementById("close");
function mOver(){
    dc.style.display="block";
}
function mOut(){
    dc.style.display="none";
}
function change1(event){
    menu.style.display="none";
    clos.style.visibility="visible";
    mOver();
    event.preventDefault();
    }
    function change2(){
    menu.style.display="block";
    clos.style.visibility="hidden";
    mOut();
    event.preventDefault();

    }
product.addEventListener("mouseover",mOver,false)
product.addEventListener("mouseout",mOut,false)
menu.addEventListener("click",change1,false)
clos.addEventListener("click",change2,false)


