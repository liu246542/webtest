// ==UserScript==
// @name         邀请码
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://t66y.com/register.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var divObj = document.getElementById('invcode');
    var obj = document.createElement('input');
    var parObj = divObj.parentNode;
    parObj.appendChild(obj);
    obj.type = 'button';
    obj.value = 'get';
    obj.className = 'btn';
    var xtext = 'f365*b75f3adb*1f';
	var mtext = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    //divObj.value = 'f365' + mtext[sindex] + 'b75f3adb' + mtext[cindex] + '1f';
    obj.onclick = window.setInterval(function(){
        var sindex = Math.floor(Math.random()*16);
        var cindex = Math.floor(Math.random()*16);
        divObj.value = '7b' + mtext[sindex] + '3236a215726f' + mtext[cindex];
        console.log(divObj.value);
        return invcodecheck();
    },3000);

    // Your code here...
})();