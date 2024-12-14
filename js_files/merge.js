async function MergeSort(){
    var ele = document.querySelectorAll(".bar");
    var start = 0;
    var end = ele.length -1;

    await solve(ele,start,end);
    await waitforme(delay);
    for(let i = 0;i<ele.length;i++){
        await waitforme(delay);
        ele[i].style.background = '#00ff0d';
    }
}

async function solve(ele,start,end)
{
    if(start >= end) return ;
    var m = start + (parseInt((end-start)/2));
    await solve(ele,start,m);
    await waitforme(delay);
    await solve(ele,m+1,end);
    await waitforme(delay);
    await merge(ele,start,m,end);
    for(let i = start;i<=end;i++)
    {
        await waitforme(delay);
        ele[i].style.background = 'black';
    }
}

async function merge(ele,start,m,end)
{
    var n1 = m - start + 1;
    var n2 = end - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = ele[start + i].style.height;
    for (var j = 0; j < n2; j++)
        R[j] = ele[m + 1 + j].style.height;
  
    var i = 0;
    var j = 0;
    var k = start;
  
    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(L[i]) <= parseInt(R[j])) {
            ele[k].style.height = L[i];
            ele[k].style.background = '#0861ceb0';
            i++;
        }
        else {
            ele[k].style.height = R[j];
            ele[k].style.background = '#0861ceb0';
            j++;
        }
        k++;
    }
  
    while (i < n1) {
        await waitforme(delay);
        ele[k].style.height = L[i];
        ele[k].style.background = '#0861ceb0';
        i++;
        k++;
    }
  
    while (j < n2) {
        await waitforme(delay);
        ele[k].style.height = R[j]
        ele[k].style.background = '#0861ceb0';
        j++;
        k++;
    }
}