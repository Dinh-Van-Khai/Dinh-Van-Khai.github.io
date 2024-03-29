const newsSlide=document.querySelector('.news-slide')
const newsContainer=document.querySelector('.news-container')
const newsList=document.querySelector('.aside__item--news-list')
const slideDotContainer=document.querySelector('.slide-dot__container')
var maxSlide=0;
fetch("../data/news.json")
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        var newsSlidehtml=``
        var newsListhtml=``
        var newsContainerhtml=``
        var slideDotContainerhtml=``
        json.forEach((news,index) => {
            var gridSize=''
            switch(news.size){
                case 1:
                    gridSize='grid__col-9-3 mobile__col-6'
                    break
                case 2:
                    gridSize='grid__col-9-6 mobile__col-full'
                    break
                case 3:
                    gridSize='grid__col-full'
                    break
                default:
                    gridSize='grid__col-9-3 mobile__col-6'
            }
            maxSlide++
            newsSlidehtml+=`
                <div class="grid__col-full news-slide__item">
                    <a href="${news.href}" class="news" title="${news.head}" style="background: linear-gradient(90deg, ${news.color} 25%, transparent 50%),url(${news.img}) right / 75% no-repeat;">
                        <div class="news__img"></div>
                        <div class="news-slide__head">
                            <h4>${news.head}</h4>
                        </div>
                    </a>
                </div>`
            newsListhtml+=`
                <li class="aside__item2"><a href="#news${news.id}">${news.head}</a></li>`
            newsContainerhtml+=`
                <div class="${gridSize}">
                    <a href="${news.href}" id="news${news.id}" class="news" title="${news.head}" style="background: linear-gradient(0, ${news.color}, transparent 40%),url(${news.img}) center / cover no-repeat;">
                        <div class="news__img"></div>
                        <h4 class="news__head">${news.head}</h4>
                    </a>
                </div>`
            slideDotContainerhtml+=`<button value=${index} class="slide-dot"></button>`
        });
        newsSlide.innerHTML=newsSlidehtml
        newsContainer.innerHTML=newsContainerhtml
        newsList.innerHTML=newsListhtml
        slideDotContainer.innerHTML=slideDotContainerhtml

        var slide=0
        const nextSlide=document.querySelector('.slide-direction.next')
        const lastSlide=document.querySelector('.slide-direction.last')
        const newsSlideItems=document.querySelectorAll('.news-slide__item')
        const slideDots=document.querySelectorAll('.slide-dot')
        const SlideContainer=document.querySelector('.slide-container')
        slideDots[slide].classList.add('open')
        function changeSlide(num){
            slideDots[slide].classList.remove('open')
            slide+=num
            slide=(slide+maxSlide)%maxSlide
            for(var newsSlideItem of newsSlideItems){
                newsSlideItem.style=`transform: translateX(${-100*(slide)}%)`
            }
            slideDots[slide].classList.add('open')
            // console.log(slideDots[slide].value)
        }
        nextSlide.onclick=()=>{changeSlide(1)}
        lastSlide.onclick=()=>{changeSlide(-1)}
        slideDotContainer.onclick=(e)=>{if(e.target.value!=undefined)changeSlide(e.target.value-slide)}
        var mouseInSlide=false
        SlideContainer.onmouseover=()=>{mouseInSlide=true}
        SlideContainer.onmouseout=()=>{mouseInSlide=false}
        setInterval(()=>{if(!mouseInSlide)changeSlide(1)},4000)
        
    })
    .catch(function(fail){
        alert("Lỗi: news",fail)
    })

const searchList=document.querySelector('.search__list')
const searchInput=document.querySelector('#search__input')
var searchListHTML=''
fetch("../data/search-list.json")
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        json.forEach(search => {
            searchListHTML+=`
                <li class="search__item"><i class="search__icon fa-solid fa-clock-rotate-left"></i>${search.conten}</li>`
        })
        searchList.innerHTML=searchListHTML
        searchInput.oninput=function(input){
            if(input.target.value=="")
            {
                searchList.innerHTML=searchListHTML
            }else
            {
                searchList.innerHTML=`
                <li class="search__item"><i class="search__icon fa-solid fa-magnifying-glass"></i>${input.target.value}</li>`
            }
        }
    })
    .catch(function(fail){
        alert("Lỗi: search",fail)
    })