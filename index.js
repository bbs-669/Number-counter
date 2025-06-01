let count=0;

const counter=document.getElementById("Display");

const decreaseBtn= document.getElementById("subBtn");
const increaseBtn=document.getElementById("addBtn");
const resetBtn=document.getElementById("resetBtn");

increaseBtn.onclick = function(){
    count++;
    counter.textContent=count;
}

resetBtn.onclick = function(){
    count=0;
    counter.textContent=0;
}

decreaseBtn.onclick = function(){
    if(count!=0){
        count--;
        counter.textContent=count;
    }
}