"use strict"; //严格模式
console.clear();

console.log("Start->");
console.log("-------------------------");
//大原则:普通函数需要别人告诉他this,也就是谁调用,this就指向谁; 箭头函数只认出生地，无论如何调用都不改变this指向

//part1
{
  //  this.name = 'hahaha';
  // const xiao_ming = { //obj的{}不构成块级作用域
  //     name: "Ming_Xiao.",
  //     climbing: function() { //普通function，谁使用它，this就指向谁
  //         console.log('1.'+this);
  //     },
  //     swimming: () => { //obj的{}不是作用域
  //         console.log('3.'+this.name);
  //     }//箭头函数，出生在哪，作用域是谁指向谁，!!!箭头函数一旦产生就只认出生地!!!
  // };
  // xiao_ming.climbing();
  // xiao_ming.swimming();
  // function climbing () {
  //     console.log('2.'+this);
  // } //全局调用(windows)
  // const swimming = () => {
  //     console.log('4.'+this.name);
  // }//箭头函数，出生在哪，作用域是谁指向谁
  // climbing();
  // swimming();
}
//part2
{
  // function FuncPerson() {
  //     this.name = 'ming_2';
  //     this.climbing = function() {
  //         console.log(this); //谁调用就指向谁
  //     }
  //     this.swimming = () => {
  //         console.log(this);
  //     } //箭头函数出生在function作用域下，this与function指向相同
  // }
  // class classPerson { //由上面的写法改写而来,也是块级作用域(只是长得像class,实为function)
  //     constructor(){
  //         this.name = 'Ming_3';
  //     }
  //     climbing = function() {
  //         console.log(this);
  //     }  // 注:如果是写成climbing(){}, 就打印不出来
  //     swimming = () => {
  //         console.log(this);
  //     } //等同于上面function的写法,this用法也相同
  // }
  // const ming_2 = new FuncPerson();  //实例化一个新的对象:ming_2
  // const ming_3 = new classPerson(); //实例化一个新的对象:ming_3
  // ming_2.climbing();//普通函数this指向新的实例化对象
  // ming_3.climbing();//同上,因为class等效于function写法
  // ming_2.swimming();//箭头函数，出生时，this指向就确定了，无论谁调用都不会更改
  // ming_3.swimming();//同上,class等同于function的写法
  // const func2_1 = ming_2.climbing; //将function or class内部的普通函数,传到class外界
  // const func2_2 = ming_2.swimming; //将function or class内部的箭头函数,传到class外界
  // const func3_1 = ming_3.climbing;
  // const func3_2 = ming_3.swimming;
  // func2_1(); //只是将函数的地址传出,传给func2_1,并在window下调用func2_1
  // func2_2();//也只将函数的地址传出,传给func2_2,但箭头函数的this在出生时就已确定,所以无论在哪里调用，this指向都不变
  // func3_1();
  // func3_2();
}
//part3
{
  // function FuncPerson() {
  //     this.name = 'ming_2';
  // } //class内部不声明函数
  // class classPerson { //class等同于上面function的写法,也是块级作用域
  //     constructor(){
  //         this.name = 'Ming_3';
  //     }
  // }
  // function start() {
  //     console.log(this);
  // }//将此函数套在另一个函数内部,再传入class.
  // const stop = () => {
  //     console.log(this);
  // }
  // function climbing() { //普通函数climbing能知道自己在被谁调用,this就指向谁,this不会传递
  //     console.log(this);
  //     start();// 普通函数内再套普通函数, 并未获取climbing的this,所以start()不知道谁在调用,this不能传递，所以为undefined
  //     // start.bind(this)();//解决内部函数this无法传递的问题,普通函数使用bind手动绑定this,且不会改变原start()
  //     // start.bind({name:'H.L'})();//也可以绑定其他function
  //     stop();//普通函数内再套箭头函数,箭头函数只认出生地,手动bind无效
  //     // 解决箭头函数this固定不变的问题,将箭头函数写在function内部,让箭头函数出生在上级作用域内
  //     // const stop = () => {
  //     //     console.log(this);
  //     // }
  //     // stop();//谁调用climbing,this就指向谁，stop出生在climbing内，this指向永远与climbing一致
  // }
  // const swimming = () => {
  //     console.log(this);
  //     start(); //因为this不传递，所以普通函数不知道谁在调用
  //     stop(); //箭头函数,出生在哪,this就固定不变,与在哪里调用无关
  // }
  // const ming_2 = new FuncPerson();
  // const ming_3 = new classPerson();
  // ming_2.climbing = climbing; //class内部没有function，将外部定义的函数climbing塞入class内部
  // ming_2.swimming = swimming;
  // ming_3.climbing = climbing;
  // ming_3.swimming = swimming;
  // ming_2.climbing();//普通函数插入class内部，谁调用，this就指向谁
  // ming_2.swimming();//箭头函数，只认出生地，永远与上级作用域的this指向一致
  // ming_3.climbing();
  // ming_3.swimming();
}
//part4
{
  // function FuncPerson() {
  //     this.name = 'ming_2';
  //     this.climbing = function() {
  //         console.log(this);
  //     }
  //     this.swimming = () => {
  //         console.log(this);
  //     }
  // }
  // const ming_2 = new FuncPerson();
  // ming_2.climbing();
  // setTimeout(ming_2.climbing, 1) //即使ming_2.climbing知道谁在调用，但setTimeOut是windows在调用，所以this指向window
  // //实际发生的：
  // function setTimeOut(func_in){
  //     const timeFunc = func_in; //前面提过:传入的函数ming_2.climbing有this指向，但函数内部this无法传递
  //     timeFunc()//所以timeFunc没有this指向
  // }
  // setTimeout(()=>{
  //     ming_2.climbing();
  // },1) //传入箭头函数，箭头函数只认出生地
}
//part5
const xiao_ming = {
  //不构成块级作用域
  name: "Ming_1",
  climbing: function () {
    console.log("1." + this.name);
    (function () {
      //普通函数内部this不能传递
      console.log(this);
    })(); //闭包，立即执行
    (() => {
      //箭头函数，出生地在这里，只认上级作用域climbing的this,谁调用climbing,this就指向谁
      console.log(this);
    })();
  },
  swimming: () => {
    console.log("2." + this);
    (function () {
      console.log(this);
    })();
    (() => {
      //箭头函数找上级作用域，上级swimming也是箭头函数，swimming的this就指向window
      console.log(this);
    })();
  },
};
// xiao_ming.climbing();
// xiao_ming.swimming();

function FuncPerson() {
  this.name = "ming_2";
  this.climbing = function () {
    console.log(this);
    (function () {
      //普通函数内部this不能传递
      console.log(this);
    })(); //闭包，立即执行
    (() => {
      //箭头函数，出生地在这里，只认上级作用域climbing的this,谁调用climbing,this就指向谁
      console.log(this);
    })();
  };
  this.swimming = () => {
    console.log(this);
    (function () {
      //普通函数内部this不能传递
      console.log(this);
    })(); //闭包，立即执行
    (() => {
      //箭头函数，出生地在这里，只认上级作用域climbing的this,谁调用climbing,this就指向谁
      console.log(this);
    })();
  };
}

const ming_2 = new FuncPerson();
ming_2.climbing();
ming_2.swimming();

console.log("<<<<<<<<<........<<<<<<<<");
