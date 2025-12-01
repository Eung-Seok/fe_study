
let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

const changeLink = function(str) {
    if(str.indexOf("//") == -1){
        return "경로가 잘못되었습니다."
    } else if(str.indexOf("https") != -1) {
        return str.substring(0,str.indexOf("//")+2) + "secure." + str.substring(str.indexOf("//")+2);
    } else if(str.indexOf("http") != -1){
        return str.substring(0,str.indexOf("http")+4)+"s"+str.substring(str.indexOf("http")+4,str.indexOf("//")+2) + "open." + str.substring(str.indexOf("//")+2);
    }
    
};

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));