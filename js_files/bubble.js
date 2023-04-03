async function BubbleSort(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0;i<ele.length;i++)
    {
        for(let j = 0;j<(ele.length-(i+1));j++)
        {
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                ele[j].style.background = 'red';
                ele[j+1].style.background = 'blue';
                await waitforme(delay);
                swap(ele[j],ele[j+1]);
            }
            ele[j].style.background = 'cyan';
        }
        await waitforme(delay);
        ele[ele.length-i-1].style.background = '#00ff0d';
    }
}