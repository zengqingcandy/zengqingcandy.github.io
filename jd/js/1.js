(function() {

	$(document).ready(function() {
		miaosha();

		$('.topli').hover(function() {
			$('.zi').toggle();
		})

		$('.zi li a').addClass('ziti2');

		$('.zi li').addClass('zili');

		$('.topli1').hover(function() {
			$('.topli1div').toggle();
		})

		/*
		 *搜索结束
		 */
		$("input[type=text]").focusin(function() {
			$('.sousuo').removeAttr("value").addClass('box');
		}).focusout(function() {
			$('.sousuo').attr({
				value: "巴旦木"
			}).removeClass('box');
		})

		$('.menuL').hover(function() {
			$('.qd').stop().delay(600).fadeIn(100);
		}, function() {
			$('.qd').finish().hide();
		})

		/*
	banner自动
	*/
		init();

		$('.baidian').click(event);

		$('.baidian').hover(event);

		$('.tu').hover(function() {
			clearInterval(jishiqi)
		}, function() {
			init();
		})

		$('.baidian').hover(function() {
			clearInterval(jishiqi)
		}, function() {
			init();
		})
		/*
	侧标题索引
	*/
		$('.cebai').mouseenter(function() {

			var index = $(this).index();

			$('.cebai').removeClass('cebaihover');

			$(this).addClass('cebaihover').css({'z-index': 2});				
			
			/*			字块的层级*/
			$('.zibiao').css({'z-index': 1});
					
			$('.tuK1,.tuK').css({"z-index": 1});				
			
			$('.bannerD').css({"z-index": 2});
						
			$('.zibiao').eq(index).show();

			$('.zibiao').eq(index).mouseenter(function() {

				$(this).show();

				$('.cebai').eq(index).css({
					'z-index': 2
				}).addClass('cebaihover');

				$('.tuK1,.tuK').css({
					"z-index": 1
				});
				$('.bannerD').css({
					"z-index": 1
				});
			})


			$('.zibiao').eq(index).mouseleave(function() {
				$('.cebai').css({'z-index': 1});	

				$(this).hide();

			})
		})


		$('.cebai').mouseleave(function() {
			$('.zibiao').hide();
			$('.tuK1,.tuK').css({"z-index": 6});						
			$('.bannerD').css({"z-index": 7	});		
			$('.cebai').removeClass('cebaihover');
			$(this).css({'z-index': 0});						
		})


		$('.zibiao').mouseleave(function() {
			$('.tuK1,.tuK').css({"z-index": 6});						
			$('.bannerD').css({	"z-index": 7});	
			$('.cebai').removeClass('cebaihover');
			$(this).css({'z-index': 0});		
		})
		/*侧菜单完成*/
	var time;
	$('.bannerR .item a').hover(function(){
		var index =$(this).index();
		var num=index*69;

		var ddd=$(this);

		time=setTimeout(function(){	
			$('.bannerR span').removeClass('spanHover');
			ddd.find('span').addClass('spanHover');
			$('.bannerR i').css({display:'none'}).css({top:18,opacity:0});
			ddd.find('i').css({display:'block'}).animate({top:23,opacity:1},600);	
			$('.hong').delay(200).stop().animate({left:num-110},200);
			$('.shipin').hide().eq(index-2).show();
		},400)
	},function(){
		clearTimeout(time);
	})

		/*。。。。。。。。。。。。。。右边菜单完成*/

		$('.kjwen a').attr({
			title: function() {
				return $(this).text();
			}
		})
		$('.divT a').attr({
			title: function() {
				return $(this).text();
			}
		})

		$('.Shipin a').attr({
			title:function(){
				return $(this).text();
			}
		})

		/*	加了title属性*/

		$('.filter-item').each(function (index,elem){
			$(this).click(function(){
				$('.filter-item').removeClass('selected');
				$(this).addClass('selected');
				$('.wai').removeClass('kk').eq(index).addClass('kk');
				$('.wai').css({opacity:0}).stop().animate({opacity:1},600);
				$('.Content-L .down .right').removeClass('uu').eq(index).addClass('uu');
			})		
		})

/*		冷藏柜*/
		$('.filter').click(function(event){
			var index = $(this).index();
			var zuxian =$(this).parent().parent().parent();
				
			if(zuxian.get(0).id=='Content-R'){

				$(this).closest('#Content-R').find('.filter').removeClass('selected');
				$(this).addClass('selected');
				$('.lengCangGui ul').hide().eq(index).show();

			}else{
				var bg = ["#ffd1c2","rgb(228, 244, 181)","rgb(251, 223, 201)","rgb(245, 196, 179)","rgb(245, 238, 194)","rgb(252, 207, 176)","rgb(253, 233, 164)","rgb(254, 195, 191)"]
				$(this).closest('.xinxianK').find('.filter').removeClass('selected');
				$(this).addClass('selected');
				$('.main3-xinXianSuDi-Bottom .Right ul').css({opacity:0,zIndex:1}).eq(index).animate({opacity:1},600).css({zIndex:2});
				$('.main3-xinXianSuDi-Bottom .Left img').hide().eq(index).show();
				$('.main3-xinXianSuDi-Bottom').css({backgroundColor:bg[index]});				
			}				
		})		

/*	新鲜速递*/
		

	$('.lengCangGui li').hover(function(){
		$(this).find(' .floatFrame').show().animate({top:-70,opacity:1},600,'easeOutBack');
	},function(){
		$(this).find(' .floatFrame').hide().animate({top:-80,opacity:0},600,'easeOutBounce');
	})


/*.............零食由心选*/

		$('.Content-L .down .left a').click(function(){
			$('.Content-L .down .left a').removeClass('p')
			$(this).addClass('p');
		})

/*.............零食由心选左边*/

/*开门效果*/

		$('.jianDao').click(function(){
		$('.zhimaK .top a.wen').animate({opacity:0},400);
		$('.jianDao').delay(200).animate({top:480},500);
		$('.Middle .left').delay(600).animate({left:-200},{duration:1000,easing:"easeInOutExpo"});
		$('.Middle .right').delay(600).animate({left:200},{duration:1000,easing:"easeInOutExpo"});
		$('.heiLeft,.heiRight').delay(600).animate({opacity:1},800);
	})
/*关门动效*/
	$('.youhui .icon').click(function(){
		$('.zhimaK .top a.wen').animate({opacity:1},400);
		$('.jianDao').css({top:0,opacity:0}).animate({opacity:1},400);
		$('.Middle .left').animate({left:0},600);
		$('.Middle .right').animate({left:0},600)
		$('.heiLeft,.heiRight').animate({opacity:0},600);
	})

/*汽车效果*/
	var setTime,setTime1;
	$('.Middle .left .UP a').mouseenter(function(){
		var index=$(this).index();
		var num=$(this).position();
		var x=num.top;
		var y=num.left;	
		var ddd=$(this);
			
		setTime=setTimeout(function(){
			$('.Middle .left .UP a').removeClass('curr');
			ddd.addClass('curr');				
			$('.qiChe').delay(200).stop().animate({top:x-40,left:y-8},400);
			$('.Middle .left .DOWN ul').hide().eq(index-1).show();
		},400)
		
	})

	$('.Middle .left .UP a').mouseleave(function(){
		clearTimeout(setTime);
	})

		$('.Middle .right .UP a').mouseenter(function(){
		var index=$(this).index();
		var num=$(this).position();
		var x=num.top;
		var y=num.left;	
		var ddd=$(this);		

		setTime1=setTimeout(function(){
			$('.Middle .right .UP a').removeClass('curr');
			ddd.addClass('curr');
			$('.feiJi').delay(200).stop().animate({top:x-40,left:y-5},400);
			$('.Middle .right .DOWN ul').hide().eq(index-1).show();
		},400)
		
	})

	$('.Middle .right .UP a').mouseleave(function(){
		clearTimeout(setTime1);
	})

/*	芝麻开门*/

	var yanse=["rgba(67,172,231,.8)","rgba(255,152,30,.8)","rgba(255,74,74,.8)","rgba(137,212,40,.8)"]

	$('.floor').each(function(index){
		$(this).find('.biao:first').addClass('m').css('background',yanse[index]);

	})
		$('.biao').mouseenter(function(){
			var index=$(this).index();
			var ww=$(this).closest('#floor').index();			
			$(this).closest('.floorK').find('.biao').removeClass('m');
			$(this).closest('.floorK').find('.biao').css("background",'rgba(0,0,0,.4)');
			$(this).addClass('m').css("background",yanse[ww-10]);
			$(this).closest('.floorK').find('.right').removeClass('n').eq(index).addClass('n');		
		}) 



		$('.floor').eq(1).find(' h6').css({"background":"rgba(255,152,30,.8)"});

		$('.floor').eq(2).find(' h6').css({"background":"rgba(255,74,74,.8)"});

		$('.floor').eq(3).find(' h6').css({"background":"rgba(137,212,40,.8)"});

		$('.floor').eq(1).find('.xiaotuq .lll a').css({"background":"rgba(255,152,30,.8)"});

		$('.floor').eq(2).find('.xiaotuq .lll a').css({"background":"rgba(255,74,74,.8)"});

		$('.floor').eq(3).find('.xiaotuq .lll a').css({"background":"rgba(137,212,40,.8)"});


		$('a.btn').click(function(){
			$('#tip').css({display:'none'}).remove();
			$('#head').before('<div id="tip"><b></b>商品已经加入购物车<strong></strong></div>');
			var thisPos = $(this).offset();
			var winPos = window.offset();
			var dx = winPos.left - thisPos.left;
			var $parentItem = $(this).closest('li').css('position',"relative");
			var url = $parentItem.find('a.img img').attr('src');
			var $newElem= $('<div class="small"><img src="'+url+'" width="40" height="40" alt="" /></div>');
			
			$newElem.prependTo($parentItem)
					.animate({top:0},{duration:600,queue:true})
					.animate({left:dx,top:-1000},1500,function(){
						$newElem.css({display:'none'}).remove();
						$('#tip').css({display:'none'}).remove();	
					})
	})



/*		。。。。重复的。。。。。。*/
	
})

	function event() {
		var index = $(this).index();
		$('.baidian').removeClass('i');
		$(this).addClass('i');
		$('.tu').removeClass('img').eq(index).addClass('img');
		$('.tu img').css({opacity: 0}).stop().animate({	opacity: 1}, 800);	
		$('.tuR').css({'right': "-50px"}).stop().animate({right: "0px"}, 600);	
		
	}

	var jishiqi;

	/*计时器*/

	function init() {
		jishiqi = setInterval(function() {
			var num = $('.baidian').length;
			var bai = $('.baidian.i');
			var index = bai.index();
			var next = index + 1
			if (next == num) {
				next = 0;
			}
			$('.baidian').eq(next).trigger('click')
		}, 2000)
	}	


	var daojishi;

	function miaosha(){
		daojishi=setInterval(function(){
			var now=new Date();
			var hour=now.getHours();
			var minute=now.getMinutes();
			var seconds=now.getSeconds();

			 if(hour>6,hour<0){
			 	var nowh=5;
			 }
			 else if(hour>6,hour<12){

			 	var nowh=11;		
			 }
			 else if(hour<18,hour>12){

			 	var nowh=17;
			 }			

			 else if(hour<24,hour>18){
			 	var houh=5;
			 }

			 var H=nowh-hour;
			 var M=59-minute;
			 var S=59-seconds;
			 var hou=H+houh;
			 
			 if(H<10,H>=0){
			 	$('.clock h5').eq(0).html("0"+H);

			 }else if(H<24,H>18){

			 	$('.clock h5').eq(0).html(hou);
			 }
			 
			 if(M<10){
			 	$('.clock h5').eq(1).html("0"+M);

			 }else {

			 	$('.clock h5').eq(1).html(M);
			 }

			 if(S<10){
			 	
			 	$('.clock h5').eq(2).html("0"+S);

			 }else {

			 	$('.clock h5').eq(2).html(S);
			 }	

		},1000)		
	}

})()


