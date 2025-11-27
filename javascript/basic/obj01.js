// Object 객체

// 자바스크립트 자료형

let x = 10;
let arr = [1, 2, 3, 4, 5];

console.log(arr[2]);
console.log(arr);

// 객체 (Object)
// { key:value, key:value }

// JSON : JavaScript Object Ntation
// {key:value, key:value }

// java 자료형 비교 Map<Key, Value>

let weather = "비";

let weatherInfo = {
    day: '251127',
    weather: '비',
    temperature: 3,
    location: '중앙동'
}; //객체

console.log(weatherInfo);
console.log(weatherInfo.day);
console.log(weatherInfo.weather);
console.log(weatherInfo.temperature);

//점심식사정보
// 메뉴: 짜장면 가격: 5000 식당:대천반점 위치:시장내부
let lunchInfo = {
    menu: "짜장면",
    price: 5000,
    shop: '대천반점',
    location: '시장내부'
};

// 객체: 키:값

//객체, 배열
// 객체 키 : 배열
// 배열 : 객체

// 객체 : {}
// 배열 : []
let shopInfo1 = {
    name: '대천반점',
    location: '시장내부',
    menu: ['짜장면','짬뽕','잡채밥','울면']
};

console.log(shopInfo1.menu);

let shopInfo2 = {
    name: '대천반점',
    location: '시장내부',
    menu: [
        {
            name: "짜장면",
            price: 5000
        },
        {
            name: "짬뽕",
            price: 6000
        },
        {
            name: '잡채밥',
            price: 7000
        },
        {
            name: '울면',
            price: 7000
        }
    ]
};

console.log(shopInfo2.menu[3])
console.log(shopInfo2.menu[1].price)


let shopInfo3 = {
    name: '대천반점',
    location: '시장내부',
    menu: [
        {
            name: "짜장면",
            price: 5000,
            raw:['양파','돼지고기','춘장']
        },
        {
            name: "짬뽕",
            price: 6000,
            raw:['양파','홍합']
        },
        {
            name: '잡채밥',
            price: 7000,
            raw:['양파','잡채','밥']
        },
        {
            name: '울면',
            price: 7000,
            raw:['새우','호박','파','면','당근']
        }
    ]
};

console.log(shopInfo3.location);
console.log(shopInfo3.menu[2]);
console.log(shopInfo3.menu[1].raw);
console.log(shopInfo3.menu[3].raw[2])


let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        { 
            name:'싸이버거',
            price: 6000,
            raw: ['빵', '채소', '닭다리살']
        },
        {
            name:'휠렛',
            price:7000,
            raw: ['빵', '채소', '닭가슴살']
        }
    ]
}
];

//휠렛버거의 가격
console.log(shopList[1].menu[1].price);
//볶음밥의 재료들 
console.log(shopList[0].menu[2].raw);
//싸이버거에 들어있는 닭다리살 재료
console.log(shopList[1].menu[0].raw[2]);
//대천반점의 위치
console.log(shopList[0].location);