async function QuickSort() {
    var ele = document.querySelectorAll(".bar");
    var len = ele.length;

    await quick(ele,0,len-1);
    for(let i = 0;i<len;i++)
    {
        // console.log("final");
        await waitforme(delay);
        ele[i].style.background = '#00ff0d';
    }
}

async function quick(ele,start,end)
{
    if(start >= end) return ;
    await waitforme(delay);
    var pivot = await partition(ele,start,end);
    // console.log(ele[start].style.height);
    // console.log(pivot);
    console.log(start + " " + end + " " + pivot);
    await waitforme(delay);
    await quick(ele,start,pivot-1);
    await waitforme(delay);
    await quick(ele,pivot+1,end);
} 

async function partition(ele,start,end)
{
    // console.log(start + " " + end);
    var low = start;
    var high = end;
    var pivot = parseInt(ele[start].style.height);
    ele[start].style.background = 'yellow';
    var k = high;
    for(let i = high;i>low;i--)
    {
        await waitforme(delay);
        ele[i].style.background = 'cyan';
        ele[k].style.background = 'red';
        if(parseInt(ele[i].style.height) > pivot)
        {
            await waitforme(delay);
            swap(ele[i], ele[k]);
            ele[k].style.background = 'cyan';
            k--;
        }
        ele[i].style.background = 'blue';
    }
    swap(ele[k],ele[start]);
    ele[k].style.background = 'cyan';

    return k;
}