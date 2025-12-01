const headerEl = document.querySelector("header");
window.addEventListener('scroll', function () {
    requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
}


const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    console.log(targetScrollY);
    window.scrollTo({top:targetScrollY, behavior:'smooth'});
};

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function(e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}