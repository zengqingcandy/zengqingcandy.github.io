// JavaScript Document
function jsonp(url, data, charset) {
    var charset = charset ? charset : 'utf-8';
    var oScript = document.createElement('script');
    if (data) {
        url += '?' + data;
    }
    oScript.src = url;
    oScript.charset = charset;
    document.body.appendChild(oScript);
}

// 导航

function oNavlist(){

    var aLi = getByClass(document,'boxlist');
    var timer = null;
    var iSpeed = 0;
    var timer2 = null;
    var oUl = $('markli').getElementsByTagName('ul')[0];
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover = function(){

            clearTimeout(timer2);
            startMove(this.offsetLeft);

        };
        aLi[i].onmouseout = function(){
            timer2 = setTimeout(function(){
                startMove(aLi[0].offsetLeft);
            },100);

        };
    }

    $('markli').onmouseover = function(){
        clearTimeout(timer2);
    };

    $('markli').onmouseout = function(){
        timer2 = setTimeout(function(){
            startMove(aLi[0].offsetLeft);
        },100);
    };


    function startMove(iTarget){
        clearInterval(timer);
        timer = setInterval(function(){

            iSpeed += (iTarget - $('markli').offsetLeft)/6;
            iSpeed *= 0.66;

            if( Math.abs(iSpeed)<=1 && Math.abs(iTarget - $('markli').offsetLeft)<=1 ){
                clearInterval(timer);
                $('markli').style.left = iTarget + 'px';
                iSpeed = 0;
                oUl.style.left = - iTarget + 'px';
            }
            else{
                $('markli').style.left = $('markli').offsetLeft + iSpeed + 'px';
                oUl.style.left = - $('markli').offsetLeft + 'px';
            }

        },30);
    }
}

function Iefire(){

    var str = window.navigator.userAgent;

    var re = /msie|firefox/i;

    var iNum = str.search(re);

    var n = (/msie/i.test(str) && 5) || (/firefox/i.test(str) && 9);

    if(re.test(str)){

        var oBox = getByClass(document,'box');
        for(var i=0; i<oBox.length; i++){

            oBox[i].style.display =  $('box').style.display = $('prev').style.display = $('next').style.display = 'none';
        }
        var oP = document.createElement('p');
        oP.innerHTML = '检测到您的浏览器'+str.substring(iNum,iNum+n+3).replace('/', ' ')+'版本，本站使用CSS3技术，建议使用最新版Chrome浏览器效果更佳。'

        var oDiv = document.createElement('div');
        document.body.appendChild(oDiv);
        oDiv.id = 'compatible';
        oDiv.appendChild(oP);

        var oSpan = document.createElement('span');
        oSpan.className = 'remove';
        oDiv.appendChild(oSpan);
        oSpan.onclick = function(){

            oDiv.style.display = 'none';
        }
        $('box').style.display = 'none';

    }
    if(window.navigator.userAgent.indexOf('Chrome')!= -1){

        $('ul1').style.display = 'none';
        var oBox = getByClass(document,'box');
        for(var i=0; i<oBox.length; i++){

            oBox[i].style.display = 'block';

        }
        oBox[2].onclick = function(){

            Aboutme();
        }
        oBox[1].onclick = function(){

            scrollHeight(document.body.offsetHeight - document.documentElement.clientHeight);
        }

        $('tions').style.display = 'none';
    }

}
function Aboutme(){

    oMarkto();
    var oMark = document.getElementById('newmark');
    var oSpan = $('aboutme').getElementsByTagName('span')[0];
    starMove(oMark,{opacity:50},function(){

        Tstarmove($('aboutme'),document.documentElement.clientHeight /2 - 200 +scrollY(),function(){

            starMove(oSpan,{opacity:100});
            oSpan.onclick = function(){

                starMove(this,{ opacity :0},function(){

                    starMove($('aboutme'),{top:-400},function(){ starMove(oMark,{opacity:0},function(){

                        document.body.removeChild(oMark);																						    })})
                })
            }
        })


    });
}