//Java 배열
//new int[3]
// --> ArrayList .add .remove

//js 배열처리

/*
    shift       : 앞 삭제
    unshift     : 앞 추가

    pop         :뒤 삭제
    push        :뒤 추가
*/

let arr = [1,2,3];

console.log(arr);
arr.unshift(10);
console.log(arr);
arr.push(30);
console.log(arr);
arr.shift();
console.log(arr);
arr.pop();
console.log(arr);

//concat 배열 연결

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.log(arr1);
arr1 = arr1.concat(arr2); //비파괴적 함수로 원본을 바꾸고싶으면 다시 지정을 해야한다
console.log(arr1)

// int n = 10;
// print(n++); <= 파괴적함수로 n의 값이 바뀜
// print(n+1); <= n에 영향을 주지 않음

//파괴적 함수 : 함수 실행 후 원본에 영향을 줌
//비파괴적 함수 : 함수 실행 후 원본에 영향을 주지 않음

//... 전개연산자


//깊은 복사(deep copy)y    : 값 자체를 통으로 새롭게 복사 
//얕은 복사(shallow copy)  : 바라보는 주소만 복사

// let arr3 = arr2;   <-- 얕은 복사
let arr3 = [...arr2];   //깊은 복사
console.log(arr2);
console.log(arr3);
arr3[0] = 99;
console.log(arr2);
console.log(arr3);

let x = [1,2,3];
let y = x;
let z = [...x];
console.log(x);
console.log(y);
console.log(z);

x[2] = 88;

console.log(x);
console.log(y);
console.log(z);

let q = [10,20, ...x, 30, 40];
console.log(q);

//  splice 함수
//  특정 위치에 추가, 삭제

//  splice(인덱스, 삭제할 갯수)
// splice (인덱스, 삭제할 갯수, 추가할 값)
console.log('--------------------------------');
let arr4 = [1,2,3,4,5];
console.log(arr4);
arr4.splice(1,2); //1인덱스 2개 파괴적 함수
console.log(arr4);  
arr4.push(6);
arr4.unshift(0);
console.log(arr4);
// arr4[2] = 50;
arr4.splice(2,1,50);
console.log(arr4);
arr4.splice(2,0,99);
console.log(arr4);

console.log('------------------------------');

let obj = {
    name:'김밥천국',
    menu:'참치김밥'
};

console.log(obj);
obj.menu = '치즈김밥';
console.log(obj)
obj.price = 6000;
console.log(obj)
delete obj.price;
console.log(obj)
