// JavaScript Document
function oMarkto(){
    var oMark = document.getElementById('newmark');

    if (!oMark) {
        oMark = document.createElement('div');
        oMark.id = 'newmark';
        document.body.appendChild(oMark);
        oMark.style.width = document.documentElement.clientWidth + 'px';
        oMark.style.height = Math.max(document.body.offsetHeight,document.documentElement.clientHeight) + 'px';
    }

}
function newBomb(){
    oMarkto();

    var oMark = document.getElementById('newmark');

    starMove(oMark,{opacity:50},function(){

        var oBox = document.createElement('div');
        oBox.className = 'creadiv';

        document.body.appendChild(oBox);
        oBox.appendChild($('contactme'));
        var oSpan = document.createElement('span');
        oSpan.className = 'remove';
        oBox.appendChild(oSpan);
        oBox.style.left = Math.round(document.documentElement.clientWidth - oBox.offsetWidth) / 2 +'px';
        oBox.style.top = (document.documentElement.clientHeight - oBox.offsetHeight) / 2 +scrollY()  +'px';

        starMove(oBox,{width:400,left:Math.round(document.documentElement.clientWidth/2) - 200},function(){

            starMove(oSpan,{opacity:100},function(){
                $('contactme').style.display = 'block';
                starMove($('contactme'),{opacity:100})
            });
            oSpan.onclick = function(){
                starMove(this,{opacity:0},function(){
                    starMove($('contactme'),{opacity:0},function(){

                        $('contactme').style.display = 'none';
                        starMove(oBox,{width:0,left:Math.round

                        (document.documentElement.clientWidth/2)},function(){
                            starMove(oMark,{opacity:0},function(){
                                document.body.removeChild(oMark);

                            });
                        })
                    })
                })
            }
        });

    });

}

function Tstarmove(obj,goal,fn){

    var timer = null;
    clearInterval(timer);
    var iSpeed = 0;
    timer = setInterval(function(){

        iSpeed += (goal - obj.offsetTop) /7;
        iSpeed *= 0.75;
        if(Math.abs(iSpeed) <= 1 && Math.abs(goal - obj.offsetTop) <=1 ){

            clearInterval(timer);
            obj.style.top = goal+'px'
            iSpeed = 0;
            fn && fn();
        }	else{
            obj.style.top = obj.offsetTop + iSpeed+'px';
        }
    },30)

}
function scrollY(){
    return document.documentElement.scrollTop || document.body.scrollTop;
}
var iNum = 0;
var arr = ['images/work_3.jpg','images/work_2.jpg','images/work_1.jpg','images/work_4.jpg','images/work_5.jpg','images/work_6.jpg','images/work_7.jpg','images/work_8.jpg','images/work_9.jpg','images/work_10.jpg'];
function mywork(){

    $('mywork').style.display = 'block';
    oMarkto();
    var oMark = document.getElementById('newmark');
    iNum = this.index;
    var iCur = this.index;
    $('img1').src = arr[iNum];
    var oSpan = $('mywork').getElementsByTagName('span')[0];
    var oLeft = $('mywork').getElementsByTagName('p')[0];
    var oRight = $('mywork').getElementsByTagName('p')[1];
    var Viheight = Math.round(document.documentElement.clientHeight - $('mywork').offsetHeight ) /2 + scrollY();
    var X = this.offsetLeft + 1;
    var Y = this.offsetTop  + 1;
    $('mywork').style.left = X+'px';
    $('mywork').style.top = Y+ 'px';
    starMove(oMark,{opacity:50},function(){
        starMove($('mywork'),{opacity:100},function(){

            starMove($('mywork'),{width:500,height:500,left:Math.round(document.documentElement.clientWidth  /2) -250,top : Math.round(Viheight-198)},function(){
                starMove(oSpan,{opacity:100})																																					    																																						 })
        })

    })
    $('mywork').onmousemove = function(ev){
        var timer = null;
        clearInterval(timer);
        var ev = ev || window.event;
        var disX = ev.clientX - $('mywork').offsetLeft;

        if( disX > $('mywork').offsetWidth/2){

            starMove(oRight,{opacity:100})
            starMove(oLeft,{opacity:0})
        }else{

            starMove(oLeft,{opacity:100})
            starMove(oRight,{opacity:0})

        }
    }

    $('mywork').onmouseout = function(){

        timer = setTimeout(function(){

            starMove(oRight,{opacity:0})
            starMove(oLeft,{opacity:0})
        },100);
    }

    oRight.onclick = function(){

        iNum ++;
        if(iNum > arr.length -1){

            iNum = 0;

        }
        starMove($('img1'),{opacity:50},function(){

            $('img1').src = arr[iNum];
            starMove($('img1'),{opacity:100})
        })
    }
    oLeft.onclick = function(){
        iNum --;
        if(iNum < 0){
            iNum = arr.length-1;

        }
        $('img1').src = arr[iNum];
        starMove($('img1'),{opacity:50},function(){

            $('img1').src = arr[iNum];
            starMove($('img1'),{opacity:100})

        })

    }
    oSpan.onclick = function(){

        starMove(this,{opacity:0},function(){
            $('img1').src = arr[iCur];
            starMove($('mywork'),{width:150,height:104,left:X,top:Y},function(){

                starMove($('mywork'),{opacity:0},function(){

                    starMove(oMark,{opacity:0},function(){
                        $('mywork').style.display = 'none';
                        document.body.removeChild(oMark);

                    })
                })
            });

        })

    }

}
				  

