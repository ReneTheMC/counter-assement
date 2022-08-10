let numAdd = document.getElementById("add");
let numSub = document.getElementById("minus");
let counter = document.getElementById("counter");
let input = document.getElementById("number");
let count = 0;


currentCount();

numAdd.addEventListener("click", ()=>{ 
    count ++ 
    currentCount();
});

numSub.addEventListener("click", ()=>{
    count --
    currentCount();  
});

input.addEventListener("input", ()=>{
    counterInput();
});

function currentCount() {
    counter.innerText = count;
};

function counterInput() {
   if (count < 0) {
    counter.classList.add("negative");
    counter.classList.remove("positive");
   } else if (count > 0) {
    counter.classList.add("positive");
    counter.classList.remove("negative");
   } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
   }
};

function addInput() {
    return parseInt(input.value);
};
addInput();
