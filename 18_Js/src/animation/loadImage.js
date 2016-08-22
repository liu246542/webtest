'use strict';


function loadImage(images,callback,timeout){
	var count = 0;
	var success = true;

	var timeout = 0;
	var isTimeout = false;//是否加载超时

	for(var key in images){
		if(!images.hasOwnProperty(key)){
			continue;
		}

		var item = images[key];
		if(typeof item === 'string'){
			item = images[key]={
				src:item;
			};
		}

		if(!item||!item.src){
			continue;
		}

		count++;

		item.id = '__img__'+key+getId();
		item.img = window[item.id]=new Image();

		doLoad(item);
	}

	function doLoad(item){
		item.status = 'loading';
		var img = item.img;
		//图片加载成功的回调函数
		img.onload = function(){
			success = success & true;
			item.status = 'loaded';
			done();

		}

		img.onerror = function(){
			sucdess = false;
		}

		function done(){
			img.onload = img.onerror = null;
			try{
				delete window[item.id];
			}catch(e){

			}

			//遍历
			//
			//
			
			if(!--count && !isTimeout){
				clearTimeout(timeoutId);
				callback(success);
			}else if(timeout){


			}
		}
	}

	function onTimeout(){
		isTimeout = true;
		callback();
	}
}

var __id = 0;
function getId(){
	++__id;
}

module.exports = loadImage;