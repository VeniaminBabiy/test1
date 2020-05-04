let box = document.querySelector('.box'),
    width = box.clienWidth,
    height = box.clienHeight,
    btn = document.querySelector('button');

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());
console.log(document.documentElement.clientWidth);

console.log(document.documentElement.clientHeight);

btn.addEventListener('click', function(){
   box.scrollTop = 0;
});