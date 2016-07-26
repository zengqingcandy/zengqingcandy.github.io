/************************************************全局变量********************************************/
var canvasWidth = 480;	//画布的宽
var canvasHeight = 650;	//画布的高

var score = 0;  //当前的积分
var lives = 3;  //玩家剩余的命数

var canvas = document.getElementById('canvas');  //画布对象
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');  //绘图上下文(画笔对象)

const PHASE_DOWNLOADING = 1;	//图片下载阶段
const PHASE_READY = 2;		    //就绪阶段
const PHASE_STARTING = 3;	    //游戏启动中阶段
const PHASE_PLAY = 4;		    //游戏进行中阶段
const PHASE_PAUSE = 5;		    //游戏暂停阶段
const PHASE_GAMEOVER = 6;	    //游戏结束阶段

var cur_phase = PHASE_DOWNLOADING;  //当前所处的阶段

//游戏所需的所有图片
var imgBackground;		
var imgBullet1;
var imgsEnemy1 = [];	//小号敌机所有图片
var imgsEnemy2 = [];	//中号敌机所有图片
var imgsEnemy3 = [];	//大号敌机所有图片
var imgsGameLoading = [];	//游戏加载中所有图片
var imgGamePause;
var imgsHero = [];		//英雄所有的图片
var imgStart;			//就绪阶段的图片

/********************************************阶段1：PHASE_DOWNLOADING******************************************/
var progress = 0; //下载进度：共有33张，每张的进度权重算3，背景图权重算4，权重和为100
ctx.lineWidth = 10;
ctx.strokeStyle = "#bbb";
ctx.font = '60px SimHei'; //加载进度的字体
ctx.fillStyle = '#eee';
function drawProgress(){  //每次加载完一张图片，都会重新绘制当前进度
	ctx.clearRect(0,0,canvasWidth,canvasHeight);//清除画布上已有的内容
	ctx.beginPath();
	var startAngle = -90*Math.PI/180;
	var endAngle = (-90+360*progress/100)*Math.PI/180;
	ctx.arc(canvasWidth/2,canvasHeight/2,80,startAngle,endAngle);
	ctx.stroke();
	var txt = progress+'%';
	var w = ctx.measureText(txt).width;
	ctx.fillText(txt, canvasWidth/2-w/2, canvasHeight/2+20);

	if(progress>=100){  //所有图片加载完成，开始游戏
		cur_phase = PHASE_READY;//进入就绪阶段
		sky = new Sky(imgBackground); //创建天空对象

		startEngline();  //启动动画引擎
	}
}

download();	//下载所有的图片
function download(){
	imgBackground = new Image();
	imgBackground.src = 'img/background.png';
	imgBackground.onload = function(){
		progress += 4;
		drawProgress();
	}
	imgBullet1 = new Image();
	imgBullet1.src = 'img/bullet1.png';
	imgBullet1.onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy1[0] = new Image();
	imgsEnemy1[0].src = 'img/enemy1.png';
	imgsEnemy1[0].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy1[1] = new Image();
	imgsEnemy1[1].src = 'img/enemy1_down1.png';
	imgsEnemy1[1].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy1[2] = new Image();
	imgsEnemy1[2].src = 'img/enemy1_down2.png';
	imgsEnemy1[2].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy1[3] = new Image();
	imgsEnemy1[3].src = 'img/enemy1_down3.png';
	imgsEnemy1[3].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy1[4] = new Image();
	imgsEnemy1[4].src = 'img/enemy1_down4.png';
	imgsEnemy1[4].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy2[0] = new Image();
	imgsEnemy2[0].src = 'img/enemy2.png';
	imgsEnemy2[0].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy2[1] = new Image();
	imgsEnemy2[1].src = 'img/enemy2_down1.png';
	imgsEnemy2[1].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy2[2] = new Image();
	imgsEnemy2[2].src = 'img/enemy2_down2.png';
	imgsEnemy2[2].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy2[3] = new Image();
	imgsEnemy2[3].src = 'img/enemy2_down3.png';
	imgsEnemy2[3].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy2[4] = new Image();
	imgsEnemy2[4].src = 'img/enemy2_down4.png';
	imgsEnemy2[4].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[0] = new Image();
	imgsEnemy3[0].src = 'img/enemy3_n1.png';
	imgsEnemy3[0].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[1] = new Image();
	imgsEnemy3[1].src = 'img/enemy3_n2.png';
	imgsEnemy3[1].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[2] = new Image();
	imgsEnemy3[2].src = 'img/enemy3_hit.png';
	imgsEnemy3[2].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[3] = new Image();
	imgsEnemy3[3].src = 'img/enemy3_down1.png';
	imgsEnemy3[3].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[4] = new Image();
	imgsEnemy3[4].src = 'img/enemy3_down2.png';
	imgsEnemy3[4].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[5] = new Image();
	imgsEnemy3[5].src = 'img/enemy3_down3.png';
	imgsEnemy3[5].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[6] = new Image();
	imgsEnemy3[6].src = 'img/enemy3_down4.png';
	imgsEnemy3[6].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[7] = new Image();
	imgsEnemy3[7].src = 'img/enemy3_down5.png';
	imgsEnemy3[7].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsEnemy3[8] = new Image();
	imgsEnemy3[8].src = 'img/enemy3_down6.png';
	imgsEnemy3[8].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsGameLoading[0] = new Image();
	imgsGameLoading[0].src = 'img/game_loading1.png';
	imgsGameLoading[0].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsGameLoading[1] = new Image();
	imgsGameLoading[1].src = 'img/game_loading2.png';
	imgsGameLoading[1].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsGameLoading[2] = new Image();
	imgsGameLoading[2].src = 'img/game_loading3.png';
	imgsGameLoading[2].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsGameLoading[3] = new Image();
	imgsGameLoading[3].src = 'img/game_loading4.png';
	imgsGameLoading[3].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgGamePause = new Image();
	imgGamePause.src = 'img/game_pause_nor.png';
	imgGamePause.onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsHero[0] = new Image();
	imgsHero[0].src = 'img/hero1.png';
	imgsHero[0].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsHero[1] = new Image();
	imgsHero[1].src = 'img/hero2.png';
	imgsHero[1].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsHero[2] = new Image();
	imgsHero[2].src = 'img/hero_blowup_n1.png';
	imgsHero[2].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsHero[3] = new Image();
	imgsHero[3].src = 'img/hero_blowup_n2.png';
	imgsHero[3].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsHero[4] = new Image();
	imgsHero[4].src = 'img/hero_blowup_n3.png';
	imgsHero[4].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgsHero[5] = new Image();
	imgsHero[5].src = 'img/hero_blowup_n4.png';
	imgsHero[5].onload = function(){
		progress += 3;
		drawProgress();
	}
	imgStart = new Image();
	imgStart.src = 'img/start.png';
	imgStart.onload = function(){
		progress += 3;
		drawProgress();
	}
}

/********************************************阶段2：PHASE_READY******************************************/
//var sky = new Sky(imgBackground);
var sky = null;
//天空的构造方法
function Sky(img){ //一张背景图绘制两份
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	this.y2 = -img.height;
	this.draw = function(){ //绘制一遍天空
		ctx.drawImage(img,this.x1,this.y1);
		ctx.drawImage(img,this.x2,this.y2);
	}
	this.move = function(){
		this.y1++;
		this.y2++;
		if(this.y1>=canvasHeight){  //第一幅已经移出画布
			this.y1 = this.y2-img.height;
		}
		if(this.y2>=canvasHeight){  //第二幅已经移出画布
			this.y2 = this.y1-img.height;
		}
	}
}
//绘制LOGO的方法
function drawLogo(){
	ctx.drawImage(imgStart,canvasWidth/2-imgStart.width/2,canvasHeight/2-imgStart.height/2);
}
//为画布添加单机事件的监听函数
canvas.addEventListener('click',function(){
	//若当前处于就绪阶段，则进入开始阶段
	if(cur_phase===PHASE_READY){  
		cur_phase=PHASE_STARTING;
		//创建奔跑的小飞机对象
		runningPlane = new RunningPlane(imgsGameLoading);
	}
},false);

/*******************************************阶段3：PHASE_STARTING**************************************/
var runningPlane = null;
//奔跑的小飞机的构造方法
function RunningPlane(imgsGameLoading){
	this.x = 0;
	this.y = canvasHeight-imgsGameLoading[0].height;
	this.index = 0; //当前要绘制的图片的下标
    
	this.draw = function(){  //绘制奔跑的小飞机
		ctx.drawImage(imgsGameLoading[this.index],this.x,this.y);
	}

	this.moveCount = 0;  //move()函数被调用的次数
	this.move = function(){
		this.moveCount++;
		if(this.moveCount%10 === 0){
			this.index++;
			if(this.index===imgsGameLoading.length){
				//进入下一阶段：游戏进行中
				cur_phase=PHASE_PLAY;
				hero = new Hero(imgsHero);  //创建英雄
				bulletList = new BulletList();  //创建子弹列表
				enemyList = new EnemyList();  //创建敌机列表

			}
		}
	}
}

/********************************************阶段4：PHASE_PLAY******************************************/

//我方的英雄和子弹列表
var hero = null;
var bulletList = null;
function Hero(imgs){
	this.width = imgs[0].width;
	this.height = imgs[0].height;
	this.x = canvasWidth/2-imgs[0].width/2;
	this.y = canvasHeight-imgs[0].height;
	this.index = 0;//当前绘制的图片
	this.crashed = false; //当前是否被撞毁
	this.removeable = false;

	this.draw = function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
		//debugger;
	}
	
	this.moveCount = 0;
	this.move = function(){
		if(!this.crashed){  //尚未被撞毁
			if(this.index===0){
				this.index=1;
			}else if(this.index===1){
				this.index=0;
			}
		}
		//英雄边移动边发子弹
		this.moveCount++;
		if(this.moveCount%5 ===0){
			var bullet0 = new Bullet(imgBullet1);
			bullet0.x -=25;
			var bullet1 = new Bullet(imgBullet1);
			var bullet2= new Bullet(imgBullet1);
			bullet2.x +=25;
			bulletList.add(bullet0);
			bulletList.add(bullet1);
			bulletList.add(bullet2);
		}
		
		//开始坠毁程序
		if(this.crashed&&this.moveCount%2===0){
			if(this.index==0||this.index==1){
				this.index=2;
			}else{
				this.index++;
				if(this.index===imgs.length-1){//查看是否已经绘制到最后一张坠毁图
					this.removeable = true;
					lives--;
					if(lives>0){ //有命回到屏幕下方
						this.x = canvasWidth/2-this.width/2;
						this.y = canvasHeight-this.height;
						this.index = 0;//重新播放第0张图片
						this.crashed = false; //为撞毁状态
					}else {  //命数为0，游戏结束
						 cur_phase = PHASE_GAMEOVER;
					}
				}
			}
		}
	}
	//绑定鼠标移动事件，让英雄随着鼠标而移动
	canvas.addEventListener('mousemove',function(event){
		var x = event.offsetX-imgs[0].width/2;
		var y = event.offsetY-imgs[0].height/2;
		hero.x = x;
		hero.y = y;
	},false);
}

function Bullet(img){
	this.width = img.width;
	this.height = img.height;
	this.x = hero.x+(imgsHero[0].width/2-img.width/2);
	this.y = hero.y-img.height;
	this.removeable = false; //子弹是否可以从画布上移除

	this.draw = function(){
		ctx.drawImage(img,this.x,this.y);
	}

	this.move = function(){
		this.y -= 20;  //子弹的飞行速度
		this.x1 -= 2;
		this.x2 += 2;
		//debugger;
		if(this.y<=-img.height){  //子弹飞出画布
			this.removeable = true;
		}
	}
}

function BulletList(){
	this.list = [];  //保存当前需要绘制的所有子弹

	this.add = function(bullet){  //向列表中添加子弹
		this.list.push(bullet);
	}

	this.draw = function(){
		for(var i=0;i<this.list.length;i++){
			this.list[i].draw();//绘制每个子弹
		}
	}

	this.move = function(){
		for(var i=0;i<this.list.length;i++){
			this.list[i].move();
			if(this.list[i].removeable){
				this.list.splice(i,1);
				i--;  //注意此处的--
			}
		}
	}
}

//敌机列表
var enemyList = null;
function Enemy1(imgs){
	this.width = imgs[0].width;
	this.height = imgs[0].height;
	this.x = Math.random()*(canvasWidth-this.width);
	this.y = -this.height;
	this.index = 0;
	this.blood = 1; //敌机的血格数
	this.removeable = false;//当前敌机是否可以被删除
	this.score = 10;//击落后我方英雄得分
	this.crashed = false;//是否被撞毁

	this.draw = function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	}
    
	this.moveCount = 0;
	this.move = function(){
		this.moveCount++;
		this.y += 8;   //飞行速度
		if(this.y>=canvasHeight){
			this.removeable = true;  //可以被移除
		}
		//开始撞毁程序
		if(this.crashed&&this.moveCount%3===0){		
			this.index++;//绘制下一张坠毁图
			if(this.index==imgs.length-1){
				this.removeable = true;   //撞毁播放到最后一张图片
			}
		}
	}
}

function Enemy2(imgs){
	this.width = imgs[0].width;
	this.height = imgs[0].height;
	this.x = Math.random()*(canvasWidth-this.width);
	this.y = -this.height;
	this.index = 0;
	this.blood = 4; //敌机的血格数
	this.removeable = false;//当前敌机是否可以被删除
	this.score = 50;//击落后我方英雄得分
	this.crashed = false;//是否被撞毁

	this.draw = function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	}
    
	this.moveCount = 0;
	this.move = function(){
		this.moveCount++;
		this.y += 5;   //飞行速度
		if(this.y>=canvasHeight){
			this.removeable = true;  //可以被移除
		}
		//开始撞毁程序
		if(this.crashed&&this.moveCount%3 === 0){
			this.index++;//绘制下一张坠毁图
			if(this.index==imgs.length-1){
				this.removeable = true;   //撞毁播放到最后一张图片
			}
		}
	}
}

function Enemy3(imgs){
	this.width = imgs[0].width;
	this.height = imgs[0].height;
	this.x = Math.random()*(canvasWidth-this.width);
	this.y = -this.height;
	this.index = 0;
	this.blood = 10; //敌机的血格数
	this.removeable = false;//当前敌机是否可以被删除
	this.score = 150;//击落后我方英雄得分
	this.crashed = false;//是否被撞毁

	this.draw = function(){
		ctx.drawImage(imgs[this.index],this.x,this.y);
	}
	
	this.moveCount = 0;
	this.move = function(){
		this.y += 2;   //飞行速度
		if(this.y>=canvasHeight){
			this.removeable = true;  //可以被移除
		}
		if(!this.crashed){  //尚未被撞毁
			if(this.index===0){
				this.index=1;
			}else if(this.index===1){
				this.index=0;
			}
		}else{//开始撞毁程序
			if(this.moveCount%3===0){
				if(this.index==0||this.index==1){
					this.index=3;
				}else{
					this.index++;
				}
				//查看是否已经绘制到最后一行坠毁图
				if(this.index===imgs.length-1){this.removeable = true;}
			}
		}
	}
}

function EnemyList(){
	this.list = [];//保存之前所有的敌机
	this.add = function(enemy){
		this.list.push(enemy);
	}
	this.draw = function(){
		for(var i=0;i<this.list.length;i++){
			this.list[i].draw();
		}
	}
	this.move = function(){
		////试着随机生成敌机
		var num = Math.floor(Math.random()*300);
		if(num<6){ //创建小号敌机
			this.add(new Enemy1(imgsEnemy1));
		}else if(num<9){//创建中号敌机
			this.add(new Enemy2(imgsEnemy2));
		}else if(num<10){//创建大号敌机
			this.add(new Enemy3(imgsEnemy3));
		}

		/************敌方飞机与我方子弹碰撞检验****************/
		for(var i=0;i<this.list.length;i++){
			var enemy = this.list[i];   //一个敌机
			for(var j=0;j<bulletList.list.length;j++){
				var bullet = bulletList.list[j];  //一个子弹
				if(enemy.x+enemy.width>=bullet.x
					&&bullet.x+bullet.width>=enemy.x
					&&enemy.y+enemy.height>=bullet.y
					&&bullet.y+bullet.height>=enemy.y
					){
					bullet.removeable = true; //子弹碰撞后消失
					enemy.blood--;
					if(enemy.blood<=0){enemy.crashed = true;} //开始启动撞毁程序
					score += enemy.score;//给英雄加分.
					console.log(score);
				}
			}
		}
		/*****************************************************/
		/*************敌方飞机与我方英雄碰撞检验***************/
		for(var i=0;i<this.list.length;i++){
			var enemy = this.list[i]; 
			if(enemy.x+enemy.width>=hero.x
					&&hero.x+hero.width>=enemy.x
					&&enemy.y+enemy.height>=hero.y
					&&hero.y+hero.height>=enemy.y
					){
					enemy.blood--;
					if(enemy.blood<=0){enemy.crashed = true;} //敌机开始启动撞毁程序
					hero.crashed = true; //英雄开始启动撞毁程序		
				}
		}
		/*****************************************************/
		

		////移动每一个敌机
		for(var i=0;i<this.list.length;i++){
			var e = this.list[i];
			e.move();
			if(e.removeable){
				this.list.splice(i,1);
				i--;
			}
		}
	}
}


function drawStat(){
	ctx.font = "20px SimHei";
	ctx.fillStyle = "#333";
	var txtScore = 'SCORE:'+score;
	ctx.fillText(txtScore,5,25);

	var txtLives = 'LIVES:'+lives;
	var w = ctx.measureText(txtLives).width;
	ctx.fillText(txtLives,canvasWidth-w-5,25);
}

/********************************************阶段5：PHASE_PAUSE******************************************/
canvas.addEventListener('mouseout',function(){
	if(cur_phase===PHASE_PLAY){ //游戏进行中，若鼠标移出画图，则暂停游戏
		cur_phase = PHASE_PAUSE;
    }	
},false);
canvas.addEventListener('mouseover',function(){
	if(cur_phase===PHASE_PAUSE){ //游戏暂停时，若鼠标移入画图，则继续游戏
		cur_phase = PHASE_PLAY;
    }
},false);

function drawPause(){
  ctx.drawImage(imgGamePause, (canvasWidth-imgGamePause.width)/2, (canvasHeight-imgGamePause.height)/2);
}


/******************************************阶段6：PHASE_GAMEOVER******************************************/

function drawGameOver(){
  ctx.font = 'bold 60px "微软雅黑"';
  var txt = 'GAME OVER';
  var w = ctx.measureText(txt).width;
  ctx.fillText(txt, (canvasWidth-w)/2, canvasHeight/2+60/2);
}


/****************************************游戏主引擎——周期固定的定时器***************************************/
function startEngline(){
	//主引擎速度：每秒钟绘制24次
	setInterval(function(){
		sky.draw();
		sky.move();
		switch(cur_phase){
			case PHASE_READY:drawLogo();//绘制LOGO
				break;
		    case PHASE_STARTING:runningPlane.draw();runningPlane.move();
				break;
			case PHASE_PLAY:hero.draw();hero.move();bulletList.draw();bulletList.move();
				enemyList.draw();enemyList.move();
				drawStat();
				break;
			case PHASE_PAUSE:drawPause();
				drawStat();
				break;
			case PHASE_GAMEOVER:drawGameOver();
				drawStat();
				break;
		}
	},42);
}
