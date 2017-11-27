var img=document.getElementById('picScroll');
var img1=document.getElementById('picScroll1');
var img2=document.getElementById('picScroll2');

function changeToLeft() {
    /*右移
	//img2.innerHTML=img1.innerHTML;
	if(img.scrollLeft<=0)
	{
    img.scrollLeft+=img2.offsetWidth;
    }
    else{
    img.scrollLeft--;
    }
    */
    //左移
    if(img.scrollLeft-img1.offsetWidth>=0)
    {
    img.scrollLeft=0;
    }
    else{
    img.scrollLeft+=1;
    }
    
}
var MyMove=setInterval(changeToLeft,10)
    img.onmouseover=function() 
    {
    	clearInterval(MyMove);
    }
    img.onmouseout=function() 
    {
    	MyMove=setInterval(changeToLeft,10);
    }
