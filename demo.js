import {printLog} from './utils.js'

//修改第一个标签的文本内容
//获取dom对象
let title1 = document.querySelector('#title1');
//调用dom对象中的属性或方法
title1.textContent = 'hello js';

//事件监听 鼠标事件，键盘事件，焦点事件，表单事件 
//可以多次绑定同一个事件
document.querySelector('#btn1').addEventListener('click', function () {
    printLog('click1');
})
//如果绑定同一事件，会覆盖
document.querySelector("#btn2").onclick = function () {
    console.log('click2');
    alert('click2');
}