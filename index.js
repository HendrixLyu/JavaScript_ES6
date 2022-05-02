"use strict";
console.clear();
console.log("-------------------------");
console.log("hello world!");

console.log({});

// // this.name = 'hahaha';
// const xiao_ming = { //不构成块级作用域
//     name:"Ming_1",
//     climbing: function() {
//         console.log('1.this指向'+this);
//     },
//     swimming: () => {
//         console.log('3.this指向'+this);
//     }
// };

// xiao_ming.climbing();
// xiao_ming.swimming();

// function climbing () {
//     console.log('2.this指向'+this);
// };

// const swimming = () => {
//     console.log('4.this指向'+this);
// } ;//箭头函数，出生在哪，作用域是谁指向谁

// climbing();
// swimming();

// function FuncPerson() {
//     this.name = 'ming_2';
//     this.climbing = function() {
//         console.log(this);
//     }
//     this.swimming = () => {
//         console.log(this);
//     }
// }

// class classPerson { //等同于上面的写法,也是块级作用域
//     constructor(){
//         this.name = 'Ming_3';
//     }

//     climbing = function() {
//         console.log(this);
//     }

//     swimming = () => {
//         console.log(this);
//     }
// }

// const ming_2 = new FuncPerson();
// const ming_3 = new classPerson();

// const func1 = ming_2.climbing;
// const func2 = ming_2.swimming;

// const func3 = ming_3.climbing;
// const func4 = ming_3.swimming;
// func1();
// func2();
// func3();
// func4();

// {
//     function FuncPerson() {
//         this.name = 'ming_2';
//     }
//     class classPerson { //等同于上面的写法,也是块级作用域
//         constructor(){
//             this.name = 'Ming_3';
//         }
//     }

//     function start (){
//         console.log(this);
//     }

//     const stop = () => {
//         console.log(this);
//     }

//     const ming_2 = new FuncPerson();
//     const ming_3 = new classPerson();

//     function climbing() {
//         console.log(this);
//         start();
//         start.bind(this)();
//         start.bind({name:'H.L'})();
//         stop.bind(this)();

//     }

//     const swimming = () => {
//         console.log(this);
//         start();
//         stop();
//     }

//     ming_2.climbing = climbing;
//     ming_2.swimming = swimming;

//     ming_3.climbing = climbing;
//     ming_3.swimming = swimming;

//     ming_2.climbing();
//     ming_2.swimming();

//     ming_3.climbing();
//     ming_3.swimming();

// }

// {
//     function FuncPerson() {
//         this.name = 'ming_2';
//         this.climbing = function() {
//             console.log(this);
//         }
//         this.swimming = () => {
//             console.log(this);
//         }
//     }
//     const ming_2 = new FuncPerson();
//     ming_2.climbing();
//     // setTimeout(ming_2.climbing,1)
//     setTimeout(()=>{
//         ming_2.climbing();
//     },1)
// }

const xiao_ming = { //不构成块级作用域
        name:"Ming_1",
        climbing: function() {
            console.log('1.this指向'+this.name);
            (function(){
                console.log(this);
            })();
            (()=>{
                console.log(this);
            })();
        },
        swimming: () => {
            console.log('3.this指向'+this);
            (function(){
                console.log(this);
            })();
            (()=>{
                console.log(this);
            })();
        },
    };
xiao_ming.climbing();
xiao_ming.swimming();

console.log("<<<<<<<<<>>>>>>>>>");