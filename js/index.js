// JavaScript Document

/*完成页面加载以后执行的函数*/
window.onload = function(){
    boxwork()
    Iefire();
    oNavlist();  //导航函数
    overlistBox() //我的作品
    var iBtn = true;

    var oSpan = $('aboutme').getElementsByTagName('span')[0];
    var aLi = $('works').getElementsByTagName('li');

    for(var i=0; i<aLi.length; i++){

        aLi[i].index = i;
        aLi[i].onclick = mywork;
        aLi[i].onmouseover = function(){

            this.style.border = '1px solid #aeabab';
        }
        aLi[i].onmouseout = function(){

            this.style.border = '1px solid #dadada';
        }
    }


    Search();

    /*搜索按钮点击跳转新页面*/
    $('btn').onclick = function() {

        if($('Text_box').value != ''){

            window.open('http://www.baidu.com/s?wd='+$('Text_box').value);
        }
    }
    $('scrheight').onclick = function(){  //导航我的作品点击事件

        scrollHeight(document.body.offsetHeight - document.documentElement.clientHeight);
    }

    $('few_an').onmouseover = function(){  //收缩按钮鼠标移入事件

        this.style.background = 'url(images/few_2.png) no-repeat';

    }
    $('few_an').onmouseout = function(){  //收缩按钮鼠标移出事件

        this.style.background = 'url(images/few_1.png) no-repeat';
    }
    $('few_an').onclick = function(){    //收缩按钮鼠标点击事件

        var aDiv = getByClass(document,'hr60');
		console.log(this);
        var _this = this;
        if(iBtn){
            var oUl = $('works').getElementsByTagName('ul')[0];
            starMove($('works'),{height:0},function(){

                for(var i=0; i<aDiv.length; i++){

                    starMove(aDiv[i],{height:0})
                }

            });
            iBtn = false;
        }else{
            scrollHeight(610);
            starMove($('works'),{height:244},function(){

                for(var i=0; i<aDiv.length; i++){

                    starMove(aDiv[i],{height:60})

                }

            });

            iBtn = true;
        }
    }

}

function overlistBox(){

    var oBox = getByClass(document,'listbox');
    for(var i=0; i<oBox.length; i++){
        oBox[i].index = i;
        oBox[i].onmouseover = function(){

            starMove(this,{opacity:80});

        }
        oBox[i].onmouseout = function(){

            starMove(this,{opacity:0});
        }
        var aDiv = $('textdiv').getElementsByTagName('div');
        oBox[i].onclick = function(){

            for(var i=0; i<aDiv.length; i++){

                aDiv[i].style.display = 'none';

            }
            var iNum = this.index;
            aDiv[this.index].style.display = 'block';
            var _this = this;
            oMarkto();
            var L = this.offsetParent.offsetLeft;
            var T = getPos(this).top;
            var oLeft = $('textdiv').getElementsByTagName('span')[1];
            var oRight = $('textdiv').getElementsByTagName('span')[2];

            var oMark = document.getElementById('newmark');
            $('textdiv').style.left = L + 'px';
            $('textdiv').style.top = T + 'px';
            $('textdiv').style.display = 'block';
            var oSpan = $('textdiv').getElementsByTagName('span')[0];
            var oDiv = $('textdiv').getElementsByTagName('div')[0];

            starMove(oMark,{opacity:50},function(){

                starMove($('textdiv'),{opacity:100},function(){

                    starMove($('textdiv'),{width:500,height:500,left:Math.round((document.documentElement.clientWidth - $('textdiv').offsetWidth)/2) - 115,top:Math.round((document.documentElement.clientHeight - $('textdiv').offsetHeight)/2) - 232 +scrollY()},function(){
                        starMove(oSpan,{opacity:100},function(){

                            starMove(aDiv[iNum],{opacity:100});
                        })
                        oSpan.onclick = function(){

                            starMove(this,{opacity:0},function(){

                                starMove(aDiv[iNum],{opacity:0},function(){

                                    starMove($('textdiv'),{width:270,height:35,left:L,top:T},function                          (){
                                        starMove($('textdiv'),{opacity:0},function(){
                                            $('textdiv').style.display = 'none';
                                            starMove(oMark,{opacity:0},function(){

                                                document.body.removeChild(oMark);
                                            })
                                        }) 																					                          })
                                });
                            });

                        }
                        oRight.onclick = function(){

                            for(var i=0; i<aDiv.length; i++){

                                aDiv[i].style.display = 'none';

                            }
                            iNum++;
                            if(iNum >= aDiv.length){

                                iNum = 0;
                            }

                            aDiv[iNum].style.display  = 'block';
                            starMove(aDiv[iNum],{opacity:100});
                        }
                        oLeft.onclick = function(){

                            for(var i=0; i<aDiv.length; i++){

                                aDiv[i].style.display = 'none';

                            }
                            iNum--;
                            if(iNum < 0){

                                iNum = aDiv.length-1;
                            }

                            aDiv[iNum].style.display  = 'block';
                            starMove(aDiv[iNum],{opacity:100});
                        }
                        $('textdiv').onmousemove = function(ev){
                            var timer = null;
                            clearInterval(timer);
                            var ev = ev || event;
                            var disX = ev.clientX - $('textdiv').offsetLeft;

                            if( disX > $('textdiv').offsetWidth/2){

                                starMove(oRight,{opacity:100})
                                starMove(oLeft,{opacity:0})
                            }else{

                                starMove(oLeft,{opacity:100})
                                starMove(oRight,{opacity:0})

                            }
                        }

                        $('textdiv').onmouseout = function(){

                            timer = setTimeout(function(){

                                starMove(oRight,{opacity:0})
                                starMove(oLeft,{opacity:0})
                            },100);
                        }																																																											              })
                })
            });

        }


    }
}
function $(obj){   /*封装ID*/

    return document.getElementById(obj);
}

function Search(){

    $('btn').onmouseover = function(){   /*搜索按钮鼠标移入事件*/

        this.style.background = 'url(images/an_n2.png) no-repeat';

    }
    $('btn').onmouseout = function(){   /*搜索按钮鼠标移出事件*/

        this.style.background = 'url(images/an_n.png) no-repeat';
    }
    $('Text_box').onclick = function(ev){  /*文本框点击事件*/
        var ev = ev || event;
        ev.cancelBubble = true;

        if(this.value == '请输入内容'){
            this.value = '';
            this.style.color = '#fff';
        }
    }

    $('Text_box').onkeyup = function(){  //文本框键盘抬起事件

        jsonp('http://suggestion.baidu.com/su', 'wd='+ this.value +'&cb=sug&from=superpage&t=' + new Date().getTime());
    }
    document.onclick = function(){
        if($('Text_box').value == ''){
            $('Text_box').value = '请输入内容';
            $('Text_box').style.color = '#404040';
        }
        $('newtext').style.display = 'none';
    }
}
function s(){

    scrollHeight(document.documentElement.scrollTop = document.body.scrollTop = 0);
}
/*百度搜索接口*/
function sug(json){
    $('newtext').innerHTML = '';
    var data = json.s;
    if(data.length){
        $('newtext').style.display = 'block';
        for(var i=0; i<data.length; i++){
            var oA = document.createElement('a');
            oA.innerHTML = data[i];
            oA.href = 'javascript:;';
            oA.style.fontSize = '12px';
            $('newtext').appendChild(oA);
            oA.onclick = function(){
                $('Text_box').value = this.innerHTML;
                $('newtext').style.display = 'none';
            }
        }
    }else{

        $('newtext').style.display = 'none';
    }
}

function scrollHeight(iTmer){   //滚动条运动框架
    var iTme = null;
    clearInterval(iTme);
    var iSeep = 0;
    iTme = setInterval(function(){
        var scrollY  = document.documentElement.scrollTop || document.body.scrollTop;
        iSeep = (iTmer - scrollY) /8;
        iSeep = Math.ceil(iSeep);

        if(scrollY >= iTmer){

            clearInterval(iTme);
            document.onmousewheel = function(){

                return true;

            }
        }else{

            document.documentElement.scrollTop = document.body.scrollTop = iSeep + scrollY;
            document.onmousewheel = function(){

                return false;
            }

        }
    },30)
}

function starMove(obj,json,fn){  // 缓冲运动框架
    clearInterval(obj.iTme);
    var iCur = 0;
    var iSeep = 0;
    obj.iTme = setInterval(function(){
        var iBtn = true;
        for(var x in json){

            if(x == 'opacity'){

                iCur = Math.round(parseFloat(css(obj,x))*100);
            }else{

                iCur = parseInt(css(obj,x));
            }
            iSeep = (json[x] - iCur)/4;
            iSeep = iSeep > 0? Math.ceil(iSeep) : Math.floor(iSeep);

            if(iCur != json[x]){

                iBtn = false;
            }
            if(x == 'opacity'){

                obj.style.opacity = (iSeep + iCur) /100;
                obj.style.filter = 'alpha(opacity ='+ (iSeep + iCur) +')';
            }else{

                obj.style[x] = iCur + iSeep + 'px';
            }
        }
        if(iBtn){

            clearInterval(obj.iTme);
            fn && fn();
        }

    },30)
}
function css(obj,attr){  //获取CSS样式

    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}

function getByClass(oParent,sClass){  //获取class
    var aEle = oParent.getElementsByTagName('*');
    var result = [];

    var re = new RegExp('\\b'+sClass+'\\b','i');

    for(var i=0;i<aEle.length;i++){
        if( re.test(aEle[i].className) ){
            result.push(aEle[i]);
        }
    }

    return result;
}

function getPos(obj) {
    var iPos = {left: 0, top: 0};
    while(obj) {
        iPos.left += obj.offsetLeft;
        iPos.top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return iPos;
}