//함수 리턴

function sum1() {
    return 100;
}

sum1();

let s1 = sum1();
console.log(sum1());

const sum2 = function(a,b) {
    return a + b;
}
console.log(sum2(300,50));

const sum3 = function sum333(x,y) {
    return x + y;
}
console.log(sum3(90,88));

const sum4 = (q,w) => {
    return q +w;
}
console.log(sum4(34,56));

const sum5 = (a,b) => a+b; //화살표 함수 => 코드 바로 뒤에 나오는 값을 바로 return으로 인식
console.log(sum5(100,200));

const sum6 = ()=>1+2+3+4+5;
console.log(sum6());

function func() {
    let x = 10;
    console.log(x);
}

if(1==1) {
    let x = 20;
}

{
    let x = 30;
}

// console.log(x); scope안에서 선언된 변수는 밝에 나올 수 없다.

console.log(w);
w = 20;
console.log(w);
var w = 30;
console.log(w);


r = 3000;
var r;
console.log(r);

//함수 호이스팅
//function check()

check();

function check() {
    console.log('check');
}


//일회용 즉시 실행 함수

(function onetime(){
    console.log('이것은 일회용 함수 실행')
})() //함수 선언 -> 일회성 사용

// onetime(); 인식이 안됨
