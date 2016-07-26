// JavaScript Document

function boxwork()
{
    var oBox=document.getElementById("box");
    var oPics=document.getElementById("pics");
    var oPrev=document.getElementById("prev");
    var oNext=document.getElementById("next");
    var aImg=oPics.children[0].getElementsByTagName("img");
    var iImgWidth=parseInt(parseInt(css(aImg[0],'width')));
    var oTimer=null;
    oPics.arr=[];
    oPics.OFF=false;
    oPrev.onmouseover=oNext.onmouseover=function()
    {
        clearInterval(oTimer);
    };
    oPrev.onmouseout=oNext.onmouseout=function()
    {
        oTimer=setInterval(
            function()
            {
                toPrev();
            },2000
        );
    };
    oNext.onclick=function()
    {
        if(oPics.OFF)
        {
            return;
        }
        oPics.OFF=true;
        setTimeout(
            function()
            {
                oPics.OFF=false;
            },550
        );
        toNext();
    };
    oPrev.onclick=function()
    {
        if(oPics.OFF)
        {
            return;
        }
        oPics.OFF=true;
        setTimeout(
            function()
            {
                oPics.OFF=false;
            },550
        );
        toPrev();
    };
    for(var i=0;i<aImg.length;i++)
    {
        oPics.arr[i]=aImg[i].src;
    }
    oBox.style.width=iImgWidth*2+"px";
    index=toCenter();
    function toNext()
    {
        index++;
        toMove(index,-iImgWidth,toEnd);
        index--;
    }
    function toPrev()
    {
        index--;
        toMove(index,iImgWidth,toEnd);
        index++;
    }
    oTimer=setInterval(
        function()
        {
            toPrev();
        },2000
    );
}
function toCenter()
{
    var iWidth=document.documentElement.clientWidth;
    var oPics=document.getElementById("pics");
    var aImg=oPics.getElementsByTagName("img");
    var iImgWidth=parseInt(parseInt(css(aImg[0],'width')));
    var oBox=document.getElementById("box");
    var index=Math.ceil((iWidth-oBox.offsetWidth)/iImgWidth*0.5)+2;
    toMove(index,0);
    oPics.style.left=-(index-1)*iImgWidth+"px";
    return index;
}
function toEnd(obj,iLeft,index)
{
    var aImg=obj.getElementsByTagName("img");
    var iNub=iLeft>0?-1:1;
    setTimeout(
        function()
        {
            obj.style.WebkitTransition="none";
            iNub>0?obj.arr.push(obj.arr.shift()):obj.arr.unshift(obj.arr.pop());
            for(i=0;i<aImg.length;i++)
            {
                aImg[i].parentNode.style.WebkitTransition="none";
                aImg[i].src=obj.arr[i];
            }
            toMove(index-iNub,-iLeft,onEnd);
        },505
    );
    function onEnd()
    {
        setTimeout(
            function()
            {
                obj.style.WebkitTransition="0.5s left linear";
                for(i=0;i<aImg.length;i++)
                {
                    aImg[i].parentNode.style.WebkitTransition="0.5s -webkit-transform linear";
                }
            },5
        );
    }
}
function toMove(index,iLeft,end)
{

    var oPics=document.getElementById("pics");
    var aDiv=oPics.getElementsByTagName("div");
    oPics.style.left=oPics.offsetLeft+iLeft+"px";
    aDiv[index-1].style.WebkitTransform="rotateY(-60deg)";
    aDiv[index].style.WebkitTransform="rotateY(60deg)";
    aDiv[index+1].style.WebkitTransform="rotateY(60deg)";
    aDiv[index+2].style.WebkitTransform="rotateY(-60deg)";
    for(var i=0;i<aDiv.length;i++)
    {
        if(i<index-1 || i>index+2)
        {
            aDiv[i].style.WebkitTransform="rotateY(0deg)";
        }
    }
    if(end)
    {
        end(oPics,iLeft,index);
    }
}
function css(obj,attr)
{
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
