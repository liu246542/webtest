//使用javascript来实现继承

//方法一>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//------------------------------------------------
//下面的实例创建一个对象，和一个继承它的对象
var Pet = function (name,legs) {
	this.name = name;
	this.legs = legs;
};

//为Pet对象添加方法
Pet.prototype.getDetails = function () {
	return this.name + 'has' + this.legs + 'legs';
};
//------------------------------------------------

//创建一个Cat对象，来继承Pet对象，并创建新的方法->action
var Cat = function (name) {
	Pet.call(this,name,4);
};
Cat.prototype = new Pet();
Cat.prototype.action = function () {
	return 'Catch a fish';
};

//创建来自Cat的对象实例petCat，设置name属性，
var petCat = new Cat('Felix');
var details = petCat.getDetails();//Felix has 4 legs
var action = petCat.action();//Catch a fish

//这种设计的最大缺点在于没有给内部的属性和方法提供保护
//如按照以下操作，非常容易地就能更改name属性和legs地属性值
petCat.name = 'Senven';
petCat.legs = 7;
details = petCat.getDetails();//Seven has 7 legs

//方法二>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//同上，创建一个pet对象，但目标是将legs属性'保护'起来
var pet = function (name,legs) {
	var that{
		name : name,
		getDetails : function () {
			return that.name + 'has' + legs +'legs';
		}
	};
	return that;
};

//定义cat对象，并继承pet对象
var cat = function (name) {
	var that = pet(name,4);
	that.action = function () {
		return 'Catch a fish';
	};
	return that;
};

//创建petCat2 作为cat对象的实例
var petCat2 = cat('Felix');
details = petCat2.getDetails();//Felix has 4 legs
action = petCat2.action();//'Catch a fish'
petCat2.name = 'Senven';//name属性可以修改
petCat2.legs = 7;//legs属性不可以修改
details = petCat2.getDetails();//Senven has 4 legs