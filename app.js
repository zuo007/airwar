/**************************
*****游戏中的全局变量*****
***************************/
var canvasWidth = 480;  //画布的宽
var canvasHeight = 650; //画布的高

var score = 0;  //当前的积分
var lives = 3;  //玩家剩余的命数

var canvas = document.getElementById('gameCanvas'); //画布对象
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d'); //绘图上下文（画笔）对象

const PHASE_DOWNLOADING = 1;    //图片下载阶段
const PHASE_READY = 2;          //就绪阶段
const PHASE_STARTING = 3;       //启动中阶段
const PHASE_PLAY = 4;           //游戏进行中阶段
const PHASE_PAUSE = 5;          //游戏暂停阶段
const PHASE_GAMEOVER = 6;       //游戏结束阶段
var cur_phase = PHASE_DOWNLOADING;    //游戏当前所处阶段


/********************************
*****阶段1：PHASE_DOWNLOADING****
*********************************/
var progress = 0; //当前已加载的进度
ctx.lineWidth = 10;
ctx.strokeStyle = '#aaa';
ctx.fillStyle = '#aaa';
ctx.font = '60px SimHei';
function drawProgress(){  //绘制圆形进度条
  //console.log('当前加载进度：'+progress);
  ctx.clearRect(0,0,canvasWidth,canvasHeight); //清除已绘制内容
  ctx.beginPath();
  var startAngle = -90*Math.PI/180;
  var endAngle = (-90+360*progress/100)*Math.PI/180;
  ctx.arc(canvasWidth/2,canvasHeight/2,80,startAngle,endAngle);
  ctx.stroke(); //对路径进行描边
  
  var txt = progress+'%';
  var txtWidth = ctx.measureText(txt).width;
  ctx.fillText(txt,canvasWidth/2-txtWidth/2,canvasHeight/2+20);//绘制进度提示文字

  if(progress>=100){ //加载完成
    cur_phase = PHASE_READY; //进入就绪阶段
    sky = new Sky(imgBackground); //创建天空对象
    startEngine();  //启动动画引擎
  }
}
var imgBackground = new Image();
var imgBullet1 = new Image();
var imgsEnemy1 = [new Image(),new Image(),new Image(),new Image(),new Image()];
var imgsEnemy2 = [new Image(),new Image(),new Image(),new Image(),new Image()];
var imgsEnemy3 = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
var imgsGameLoading = [new Image(),new Image(),new Image(),new Image()];
var imgGamePause = new Image();
var imgsHero = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
var imgStart = new Image();

downloadResource();
function downloadResource(){  //下载游戏必需图片
  imgBackground.src = 'img/background.png';
  imgBackground.onload = function(){
    progress += 4;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgBullet1.src = 'img/bullet1.png';
  imgBullet1.onload = function(){
    progress += 3;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgsEnemy1[0].src = 'img/enemy1.png';
  imgsEnemy1[0].onload = function(){
    progress += 3;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgsEnemy1[1].src = 'img/enemy1_down1.png';
  imgsEnemy1[1].onload = function(){
    progress += 3;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgsEnemy1[2].src = 'img/enemy1_down2.png';
  imgsEnemy1[2].onload = function(){
    progress += 3;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgsEnemy1[3].src = 'img/enemy1_down3.png';
  imgsEnemy1[3].onload = function(){
    progress += 3;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgsEnemy1[4].src = 'img/enemy1_down4.png';
  imgsEnemy1[4].onload = function(){
    progress += 3;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgsEnemy2[0].src = 'img/enemy2.png';
  imgsEnemy2[0].onload = function(){
    progress += 3;//每张图片加载完成，修改加载进度
    drawProgress();     
  }
  imgsEnemy2[1].src = 'img/enemy2_down1.png';
  imgsEnemy2[1].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy2[2].src = 'img/enemy2_down2.png';
  imgsEnemy2[2].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy2[3].src = 'img/enemy2_down3.png';
  imgsEnemy2[3].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy2[4].src = 'img/enemy2_down4.png';
  imgsEnemy2[4].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[0].src = 'img/enemy3_n1.png';
  imgsEnemy3[0].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[1].src = 'img/enemy3_n2.png';
  imgsEnemy3[1].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[2].src = 'img/enemy3_hit.png';
  imgsEnemy3[2].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[3].src = 'img/enemy3_down1.png';
  imgsEnemy3[3].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[4].src = 'img/enemy3_down2.png';
  imgsEnemy3[4].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[5].src = 'img/enemy3_down3.png';
  imgsEnemy3[5].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[6].src = 'img/enemy3_down4.png';
  imgsEnemy3[6].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[7].src = 'img/enemy3_down5.png';
  imgsEnemy3[7].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsEnemy3[8].src = 'img/enemy3_down6.png';
  imgsEnemy3[8].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsGameLoading[0].src = 'img/game_loading1.png';
  imgsGameLoading[0].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsGameLoading[1].src = 'img/game_loading2.png';
  imgsGameLoading[1].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsGameLoading[2].src = 'img/game_loading3.png';
  imgsGameLoading[2].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsGameLoading[3].src = 'img/game_loading4.png';
  imgsGameLoading[3].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgGamePause.src = 'img/game_pause_nor.png';
  imgGamePause.onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsHero[0].src = 'img/hero1.png';
  imgsHero[0].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsHero[1].src = 'img/hero2.png';
  imgsHero[1].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsHero[2].src = 'img/hero_blowup_n1.png';
  imgsHero[2].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsHero[3].src = 'img/hero_blowup_n2.png';
  imgsHero[3].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsHero[4].src = 'img/hero_blowup_n3.png';
  imgsHero[4].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgsHero[5].src = 'img/hero_blowup_n4.png';
  imgsHero[5].onload = function(){
    progress += 3;
    drawProgress();     
  }
  imgStart.src = 'img/start.png';
  imgStart.onload = function(){
    progress += 3;
    drawProgress();     
  }
}

/**************************
*****阶段2：PHASE_READY****
***************************/
//var sky = new Sky(imgBackground); 错误写法
var sky = null;
//天空的构造方法
function Sky(img){  //一张背景图，绘出两份
  this.x1 = 0;
  this.y1 = 0;
  this.x2 = 0;
  this.y2 = -img.height;
  this.draw = function(){  //绘制一遍天空
    ctx.drawImage(img,this.x1,this.y1);
    ctx.drawImage(img,this.x2,this.y2);
  }
  this.move = function(){   //移动一次天空
    this.y1++;
    this.y2++;
    if(this.y1>=canvasHeight){//第一幅已移出画布
      this.y1 = this.y2-img.height;
    }
    if(this.y2>=canvasHeight){//第二幅已移出画布
      this.y2 = this.y1-img.height;
    }
  }
}
//绘制LOGO的方法
function drawLogo(){
  ctx.drawImage(imgStart, 
    canvasWidth/2-imgStart.width/2,
    canvasHeight/2-imgStart.height/2
  );
}
//为画布添加单击事件监听函数
canvas.addEventListener('click',function(){
  //若当前处于就绪阶段，则进入开始阶段
  if(cur_phase === PHASE_READY){ 
    cur_phase = PHASE_STARTING;
    //创建奔跑的小飞机对象
    runningPlane = new RunningPlane(imgsGameLoading);
  }
},false);


/*****************************
*****阶段3：PHASE_STARTING****
******************************/
var runningPlane = null;
//奔跑的小飞机的构造方法
function RunningPlane(imgsGameLoading){
  this.x = 0;
  this.y = canvasHeight-imgsGameLoading[0].height;
  this.index = 0; //当前要绘制的图片的下标

  this.draw = function(){  //绘制奔跑的小飞机
    ctx.drawImage(imgsGameLoading[this.index],
                  this.x,  this.y );
  }
  this.moveCount = 0;  //move()函数被调用的次数
  this.move = function(){
    this.moveCount++;   
    if(this.moveCount%6===0){
      this.index++;  //每过42*6ms才会换下一张
      if(this.index===imgsGameLoading.length){
        //进入下一阶段：游戏进行中
        cur_phase = PHASE_PLAY;
        hero = new Hero(imgsHero);//创建英雄
        bulletList = new BulletList();//子弹列表
        enemyList = new EnemyList();//敌人列表
      }
    }
  }
}


/**************************
*****阶段4：PHASE_PLAY*****
***************************/

/***我方英雄和子弹列表***/
var hero = null;
var bulletList = null;
function Hero(imgs){
  this.width = imgs[0].width;
  this.height = imgs[0].height;
  this.x = canvasWidth/2 - imgs[0].width/2;
  this.y = canvasHeight - imgs[0].height;
  this.index = 0; //当前要绘制哪张图片
  this.crashed = false; //当前是否被撞毁

  this.draw = function(){
    ctx.drawImage(imgs[this.index],this.x,this.y);
  }
  this.moveCount = 0; //move()方法被调用的次数
  this.move = function(){
    if(!this.crashed){ //当前未被撞毁
      if(this.index===0)this.index=1;
      else if(this.index===1)this.index=0;
    }

    this.moveCount++;
    if(this.moveCount%5===0){//每42*5ms发1个子弹
      //英雄边移动边发子弹
      var bullet = new Bullet(imgBullet1);
      bulletList.add(bullet);
      /*
      var bullet0 = new Bullet(imgBullet1);
      bullet0.x -= 25;
      var bullet1 = new Bullet(imgBullet1);
      var bullet2 = new Bullet(imgBullet1);
      bullet2.x += 25;
      bulletList.add(bullet0);
      bulletList.add(bullet1);
      bulletList.add(bullet2);
      */
    }

    //开始坠毁程序
    if(this.crashed && this.moveCount%2===0){
      if(this.index==0||this.index==1){
        this.index=2;
      }
      else {
        this.index++;
        if(this.index==imgs.length-1){//绘制完所有坠毁图片
          lives--;  //剩余命数-1
          if(lives>0){//回到画布下方
            this.x = canvasWidth/2-this.width/2;
            this.y = canvasHeight-this.height;
            this.index = 0; //重新播放第0张图片
            this.crashed = false;  //未撞毁状态
          }else{  //剩余命数为0，GAMEOVER
            cur_phase = PHASE_GAMEOVER;
          }
        }
      }
    }
  }
  //绑定鼠标移动事件，让英雄随着鼠标而移动
  canvas.addEventListener('mousemove',
    function(event){
      var x = event.offsetX - imgs[0].width/2;
      var y = event.offsetY - imgs[0].height/2;
      hero.x = x;
      hero.y = y;
    },
    false
  );
}
function Bullet(img){
  this.width = img.width;
  this.height = img.height;
  this.x = hero.x + (imgsHero[0].width/2-img.width/2);
  this.y = hero.y - img.height;
  this.removable = false; //子弹可以从画布上移除了吗

  this.draw = function(){
    ctx.drawImage(img,this.x,this.y);
  }
  this.move = function(){
    this.y -= 8;  //子弹的飞行速度
    if(this.y <= -img.height){ //子弹飞出画布
      this.removable = true; //可以删除了
    }
  }
}
function BulletList(){
  this.list = []; //保存当前需要绘制的所有子弹
  this.add = function(bullet){ //向列表中添加子弹
    this.list.push(bullet);
  }
  this.draw = function(){
    for(var i=0; i<this.list.length; i++){
      this.list[i].draw(); //绘制每一个子弹
    }
  }
  this.move = function(){
    for(var i=0; i<this.list.length; i++){
      this.list[i].move();
      if(this.list[i].removable){ //某个子弹可被删除了
        this.list.splice(i,1);
        i--;  //注意此处的--
      }
    }
  }
}

/***敌机列表***/
var enemyList = null;
function Enemy1(imgs){
  this.width = imgs[0].width;
  this.height = imgs[0].height;
  this.x = Math.random()*(canvasWidth-this.width);
  this.y = -this.height;
  this.index = 0; //当前绘制的图片的下标
  this.blood = 1; //敌机的血格数
  this.removable = false; //当前敌机可删除了？
  this.score = 10; //击落后我方英雄得分
  this.crashed = false; //被撞毁了吗？

  this.draw = function(){
    ctx.drawImage(imgs[this.index], this.x, this.y);
  }
  this.moveCount = 0; //move()被调用的次数
  this.move = function(){
    this.moveCount++;
    this.y += 8;  //飞行速度
    if(this.y>=canvasHeight){
      this.removable = true;
    }

    //开始撞毁程序
    if(this.crashed && this.moveCount%2===0){
      this.index++; //绘制下一张坠毁图
      if(this.index===imgs.length-1){
        this.removable = true;//撞毁播放到最后一张图片
      }
    }
  }
}
function Enemy2(imgs){
  this.width = imgs[0].width;
  this.height = imgs[0].height;
  this.x = Math.random()*(canvasWidth-this.width);
  this.y = -this.height;
  this.index = 0; //当前绘制的图片的下标
  this.blood = 4; //敌机的血格数
  this.removable = false; //当前敌机可删除了？
  this.score = 50; //击落后我方英雄得分
  this.crashed = false; //被撞毁了吗？

  this.draw = function(){
    ctx.drawImage(imgs[this.index], this.x, this.y);
  }
  this.moveCount = 0; //move()被调用的次数
  this.move = function(){
    this.moveCount++;
    this.y += 5;  //飞行速度
    if(this.y>=canvasHeight){
      this.removable = true;
    }

    //开始撞毁程序
    if(this.crashed && this.moveCount%2===0){
      this.index++; //绘制下一张坠毁图
      if(this.index===imgs.length-1){
        this.removable = true;//撞毁播放到最后一张图片
      }
    }
  }
}
function Enemy3(imgs){
  this.width = imgs[0].width;
  this.height = imgs[0].height;
  this.x = Math.random()*(canvasWidth-this.width);
  this.y = -this.height;
  this.index = 0; //当前绘制的图片的下标
  this.blood = 10; //敌机的血格数
  this.removable = false; //当前敌机可删除了？
  this.score = 150; //击落后我方英雄得分
  this.crashed = false; //被撞毁了吗？

  this.draw = function(){
    ctx.drawImage(imgs[this.index], this.x, this.y);
  }
  this.moveCount = 0; //move()被调用的次数
  this.move = function(){
    this.moveCount++;
    this.y += 2;  //飞行速度
    if(this.y>=canvasHeight){
      this.removable = true;
    }

    if(this.moveCount%2===0){ //控制坠毁速度
      if(!this.crashed){ //尚未被撞毁
        if(this.index===0)this.index=1;
        else if(this.index===1)this.index=0;
      }else { //开始撞毁程序
          if(this.index==0||this.index==1){this.index=3;}
          else{ this.index++ };
          //查看是否已经绘制到最后一张坠毁图
          if(this.index===imgs.length-1){this.removable=true;}
      }
    }
  }
}
function EnemyList(){
  this.list = []; //保存当前所有的敌机
  this.add = function(enemy){  //添加新敌机
    this.list.push(enemy);
  }
  this.draw = function(){
    for(var i=0; i<this.list.length; i++){
      this.list[i].draw();
    }
  }
  this.move = function(){
    /****试着随机生成敌机****/
    var num = Math.floor(Math.random()*300);
    if(num<6){  //创建小号敌机  6
      this.add( new Enemy1(imgsEnemy1) );
    }else if(num<9){  //创建中号敌机  3
      this.add( new Enemy2(imgsEnemy2) );
    }else if(num<20){   //创建大号敌机  1
      this.add( new Enemy3(imgsEnemy3) );
    }
    /************************/

    /****敌方飞机与我方子弹碰撞检验*****/
    for(var i=0; i<this.list.length; i++){
      var enemy = this.list[i];  //一个敌机
      for(var j=0; j<bulletList.list.length;j++){
        var bullet = bulletList.list[j]; //一个子弹
        if( 
          enemy.x+enemy.width>=bullet.x
          &&
          bullet.x+bullet.width>=enemy.x
          &&
          enemy.y+enemy.height>=bullet.y
          &&
          bullet.y+bullet.height>=enemy.y
          ){
          bullet.removable = true; //子弹碰撞后消失
          enemy.blood--; //血格-1
          if(enemy.blood<=0){enemy.crashed = true;} //开始启动撞毁程序
          score += enemy.score; //给英雄加分
        }
      }
    }
    /************************************/
    
    /****敌方飞机与我方英雄碰撞检验*****/
    for(var i=0; i<this.list.length; i++){
      var enemy = this.list[i];
      if(
        enemy.x+enemy.width >= hero.x
        &&
        hero.x+hero.width >= enemy.x
        &&
        enemy.y+enemy.height >= hero.y
        &&
        hero.y+hero.height >= enemy.y
      ){
        //敌机血格-1
        enemy.blood--;
        if(enemy.blood<=0)enemy.crashed = true;
        //英雄坠毁
        hero.crashed = true;
      }
    }
    /************************************/

    ////移动每一个敌机//////////
    for(var i=0; i<this.list.length; i++){
      var e = this.list[i];
      e.move(); //移动敌机
      if(e.removable){  //当前敌机可被删除了
        this.list.splice(i, 1);
        i--;
      }
    }
  }
}

//绘制得到/命数统计
function drawStat(){
  ctx.font = '20px SimHei';
  ctx.fillStyle = '#333';
  var txtScore = 'SCORE:'+score;
  ctx.fillText(txtScore,5, 25);

  var txtLives = 'LIVES:'+lives;
  var w = ctx.measureText(txtLives).width;
  ctx.fillText(txtLives, canvasWidth-w-5, 25);
}

//若鼠标离开画布，则游戏暂停
canvas.addEventListener('mouseout', function(){
  if(cur_phase===PHASE_PLAY){ //游戏进行中移出鼠标
    cur_phase = PHASE_PAUSE; //暂停游戏
  }
}, false);
//若鼠标移入画布，则继续游戏
canvas.addEventListener('mouseover', function(){
  if(cur_phase===PHASE_PAUSE){ //游戏进行中移出鼠标
    cur_phase = PHASE_PLAY; //暂停游戏
  }
}, false);


/**************************
*****阶段5：PHASE_PAUSE****
***************************/
function drawPause(){
  ctx.drawImage(imgGamePause, 
    canvasWidth/2-imgGamePause.width/2,
    canvasHeight/2-imgGamePause.height/2);
}

/*****************************
*****阶段6：PHASE_GAMEOVER****
******************************/
function drawGameOver(){
  ctx.font = '90px SimHei';
  var txt = 'GAME OVER';
  var w = ctx.measureText(txt).width;
  ctx.fillText(txt, canvasWidth/2-w/2, canvasHeight/2);
}


/***************************************
*****游戏的主引擎——周期固定的定时器****
****************************************/
//主引擎的速度：每秒钟绘制24次
function startEngine(){
  setInterval(function(){
    sky.draw(); //绘制天空
    sky.move(); //移动天空
    switch(cur_phase){
      case PHASE_READY:
        drawLogo();  //绘制LOGO
        break;
      case PHASE_STARTING:
        runningPlane.draw();
        runningPlane.move();
        break;
      case PHASE_PLAY:
        hero.draw();
        hero.move();
        bulletList.draw();
        bulletList.move();
        enemyList.draw();
        enemyList.move();
        drawStat(); //绘制统计信息
        break;
      case PHASE_PAUSE:
        drawPause()
        drawStat();
        break;
      case PHASE_GAMEOVER:
        drawGameOver()
        drawStat();
        break;
    }
  }, 42);
}