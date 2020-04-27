// // 'use strict';

// // //allert(Helo World!);

// // //let qweschen = confirm("Are yuo here?");
// // //console.log(qweschen);

// // // let qweschen = +prompt ("Есть ли вам 18?" , "ДА");

// // // console.log(typeof(qweschen));

// // // let incr = 10,
// // // 	decr = 10;

// // // incr++;
// // // decr--;

// // // console.log(incr);
// // // console.log(decr);


// // // let options = {
// // // 	width: 1024,

// // // };
// // // console.log(options.width);
// // // options.bool = false;
// // // options.colors = {
// // // 	border: "black",
// // // 	bg: "red",
// // // 	hil: "500"
// // // };
// // // delete options.bool;

// // // console.log(options);

// // // for (let key in options) {
// // // 	console.log (`Свойство ` + key + ` имеет значение ` + options[key] );
// // // }
// // // console.log(Object.keys(options.colors).length);

// // let arr = [`first`, 2, 3, `four`, 5];
// // // for (let i =0; i<arr.length; i++){
// // // 	console.log(arr[i]);
// // // }
// // arr.forEach(function(item, i, mass){
// // 	console.log(i + `: ` + item + ` (масив: ` + mass + `)`);
// // });

// // console.log(arr);

// // let mass = [1, 3, 4, 6, 7];

// // for (let key of mass) {
// // 	console.log(key);
// // }

 
// let ans = prompt("" , ""),
// 	arr = [];

// arr =  ans.split(`,`);
// console.log(arr);

// let arr = [`aawe`, `zzz` , `pp` , `jkj`],
// 	i = arr.join(`, `);
// console.log(arr);

// let arr = [1, 15, 4];
// // 	i = arr.sort(compareNum);

// // function compareNum(a,b) {
// // 	return a-b;
// // }
// // console.log(arr);

// var arrCopy = arr.slice();
// console.log(arrCopy);

let soldier = {
	health: 400,
	armor: 100
};

let john = {
	health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);