// 轮播
$(function(){
	var size=$('.cont_left_scroll img').size();
	for (var i = 1; i <=size; i++) {	
		var li=document.createElement("li"),
		    num=document.getElementsByClassName("num")[0];
		li.innerHTML=i;
        num.appendChild(li);
	}
	$('.num li').eq(0).addClass('active');
	$('.scroll_pic li').eq(0).show();
	$('.num li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		i=index;
		$('.scroll_pic li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	});

	//图片自动滚动（）向右运动
	 var i=0;
	 var timer=setInterval(move,1500);

	 function move(){
	 	i++;
	 	if(i==size) i=0;
	 	$('.num li').eq(i).addClass('active').siblings().removeClass('active');
	 	$('.scroll_pic li').eq(i).stop().fadeIn(300).siblings().fadeOut(300);
	 }

	 //按钮向左
     $(".cont_left .left").click(function()
       {
        	i--;
	 		if(i==-1) i=size-1;
	 		$('.num li').eq(i).addClass('active').siblings().removeClass('active');
	 		$('.scroll_pic li').eq(i).stop().fadeIn(300).siblings().fadeOut(300);      	
       });
       //按钮向右
        $(".cont_left .right").click(function()
        {
         	move();
        })

       //当鼠标移动时 静止当前页面 离开继续
       $('.cont_left').mouseover(function(){
       		clearInterval(timer);
       	})
       $('.cont_left').mouseleave(function(){
       		timer=setInterval(move,800);
       });
})
//显示时间JS代码！
function checkTime(w){
	if(w<10){
		w='0'+w;
		}
	   return w;
	}	

function showTime(){	
	var myWeb_time=new Date();
    year=myWeb_time.getFullYear();
	month=myWeb_time.getMonth()+1;
	date=myWeb_time.getDate();
	day=myWeb_time.getDay();
	h=myWeb_time.getHours();
	m=myWeb_time.getMinutes();
	s=myWeb_time.getSeconds();
	var myWeekday=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
	m=checkTime(m);
	s=checkTime(s);
	var left_show_times=document.getElementsByClassName('left_show_times')[0];
	left_show_times.innerHTML=year+'年<br/>'+month+'月'+date+'日'+myWeekday[day]+'<br/>'+h+'：'+m+'：'+s
	
	}
	
	setInterval(showTime,500);
		// 换肤
		$('.nav #color li').click(function(){
              $(this).addClass("selected").siblings().removeClass("selected");
              //$("#cssfile").attr("href","css/skin_css/"+this.id+".css");
              var txt=$(this).html();
              var bybg=document.getElementsByClassName("bybg")[0];
              if(txt=="蓝色"){
              	bybg.style.background="#8999C5";
              }else if(txt=="绿色"){
              		bybg.style.background="#96BB96";
              }else if(txt=="橙色"){
              		bybg.style.background="#E0C188";
              }else if(txt=="天蓝色"){
              		bybg.style.background="#8DBCC3";
              }else if(txt=="粉色"){
              		bybg.style.background="#EACCD7";
              }else if(txt=="紫色"){
              		bybg.style.background="#DBC1EA";
              }
		});
