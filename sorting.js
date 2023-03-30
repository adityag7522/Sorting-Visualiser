var array = [];

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

const delay = 10;

function generate(size){
    array = [];
    for(let i=0;i<size;i++)
    {
        array.push(Math.floor(Math.random()*100) + 1);
    }
    const group = document.getElementById("bars");
    while(group.hasChildNodes()) group.removeChild(group.firstChild);
    for(let i = 0;i<size;i++)
    {
        const bar = document.createElement("div");
        bar.className = "bar";
        group.appendChild(bar).style = `
            height: ${array[i]}%;`
    }
}

generate();

const newArray = document.querySelector(".newArray-btn");
newArray.addEventListener('click',function(){
    size = document.querySelector(".size").value;
    if(size > 100) size = 100;
    generate(size);
});


//sorting calls
const selection = document.querySelector(".SelectionSort");
selection.addEventListener('click',async function(){
    disableAll();
    await selectionSort();
    enableAll();
});

const bubble = document.querySelector(".BubbleSort");
bubble.addEventListener('click',async function(){
    disableAll();
    await BubbleSort();
    enableAll();
});

const insertion = document.querySelector(".InsertionSort");
insertion.addEventListener('click',async function(){
    disableAll();
    await InsertionSort();
    enableAll();
});

const mer = document.querySelector(".MergeSort");
mer.addEventListener('click',async function(){
    disableAll();
    await MergeSort();
    enableAll();
});

const quck = document.querySelector(".QuickSort");
quck.addEventListener('click',async function(){
    disableAll();
    await QuickSort();
    enableAll();
});


function disableAll(){
    document.querySelector(".SelectionSort").disabled = true;
    document.querySelector(".InsertionSort").disabled = true;
    document.querySelector(".MergeSort").disabled = true;
    document.querySelector(".QuickSort").disabled = true;
    document.querySelector(".BubbleSort").disabled = true;
    document.querySelector(".newArray-btn").disabled = true;
}

function enableAll(){
    document.querySelector(".SelectionSort").disabled = false;
    document.querySelector(".InsertionSort").disabled = false;
    document.querySelector(".MergeSort").disabled = false;
    document.querySelector(".QuickSort").disabled = false;
    document.querySelector(".BubbleSort").disabled = false;
    document.querySelector(".newArray-btn").disabled = false;
}

async function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}