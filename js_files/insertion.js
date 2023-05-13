async function InsertionSort(){
    let ele = document.querySelectorAll(".bar");
    ele[0].style.background = '#00ff0d';
    for(let i = 1;i<ele.length;i++)
    {
        ele[i].style.background = 'cyan';
        for(let j = i;j>0;j--)
        {
            if(parseInt(ele[j].style.height) < parseInt(ele[j-1].style.height))
            {
                ele[j].style.background = 'blue';
                await waitforme(delay);
                swap(ele[j],ele[j-1]);
                ele[j-1] = '#00ff0d';
            }
            ele[j].style.background = '#00ff0d';
        }
    }
}