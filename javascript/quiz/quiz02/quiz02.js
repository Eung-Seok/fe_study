let getMealByTime = function(nowTime) {
    if(nowTime >=6 && nowTime <=10){
        return '아침';
    }else if(nowTime >=11 && nowTime <= 14){
        return '점심';
    }else if(nowTime >= 17 && nowTime <= 20){
        return '저녁';
    }else if(nowTime >= 21 && nowTime <= 23){
        return '야식';
    }else{
        return '금식';
    }
}


console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식

console.log(10 === '10');