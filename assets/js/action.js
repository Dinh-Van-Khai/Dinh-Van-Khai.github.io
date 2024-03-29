searchInput.addEventListener('focus',function(e){searchList.classList.add('open');this.select()})
searchInput.addEventListener('blur',function(){searchList.classList.remove('open')})
searchList.onmousedown=function(e){
    e.preventDefault();
    searchInput.value=e.target.innerText
}
searchInput.addEventListener('keydown',function(e){if(e.keyCode==13)window.location.href=`search.html?q=${searchInput.value}`})

const logo=document.querySelector(".logo")
// Lấy chiều rộng của màn hình
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if(screenWidth>740) {
    window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    logo.style.width=""+(200-scrollPosition)+"px"
    })
}

function isShow(clickWhats,showWhat){
    for(const clickWhat of clickWhats){
        clickWhat.addEventListener('click',function(){showWhat.classList.add('open')} )
    }
}
function isClose(clickWhats,closeWhat){
    for(const clickWhat of clickWhats){
        clickWhat.addEventListener('click',function(){closeWhat.classList.remove('open')})
    }
}

const signIns = document.querySelectorAll('.js-sign-in')
const signUps = document.querySelectorAll('.js-sign-up')
const signInCloses = document.querySelectorAll('.modal-sign-in .js-sign-close')
const signUpCloses = document.querySelectorAll('.modal-sign-up .js-sign-close')
const modalSignIn = document.querySelector('.modal-sign-in')
const modalSignUp = document.querySelector('.modal-sign-up')

const aside = document.querySelector('aside')
const asideButton = document.querySelector('.aside__button')
asideButton.addEventListener('click',function(){aside.classList.toggle('open')})
aside.addEventListener('click',function(){aside.classList.toggle('open')})

isShow(signIns,modalSignIn)
isShow(signUps,modalSignUp)
isClose(signInCloses,modalSignIn)
isClose(signUpCloses,modalSignUp)