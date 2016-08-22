//实现帧动画函数
'use strict';

var STATE_INITIAL = 0;
var STATE_START = 1;
var STATE_STOP = 2;


function Animation(){
	this.taskQuene = [];
	this.index = 0;
	this.state = STATE_INITIAL;
}


//添加一个同步任务
Animation.prototype.loadImage = function (){

}


Animation.prototype.changePosition = function(ele,positons,imgUrl){

}

Animation.prototype.changeSrc = function(ele,imgList){


}

Animation.prototype.enterFrame = function(taskFn){

}

Animation.prototype.callback = function(){

}

Animation.prototype.start = function(){


}

Animation.prototype.repeat = function(times){

}

Animation.prototype.repeatForever = function(){

}

Animation.prototype.wait = function(time){

}

Animation.prototype.pause = function(){

}

Animation.prototype.restart = function(){

}

Animation.prototype.dispose = function(){

}
