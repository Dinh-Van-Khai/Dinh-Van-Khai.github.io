const newsContainer=document.querySelector('.new-container')
const newsList=document.querySelector('.aside__item--news-list')
fetch("../data/news.json")
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        var newsListhtml=``
        var newsContainerhtml=``
        json.forEach(news => {
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
            newsListhtml+=`
                <li class="aside__item2"><a href="#news${news.id}">${news.head}</a></li>`
            newsContainerhtml+=`
                <div class="${gridSize}">
                <a href="${news.href}" id="news${news.id}" class="news" title="${news.head}" style="background: linear-gradient(0, ${news.color}, transparent 40%),url(${news.img}) center / cover no-repeat;">
                    <div class="news__img"></div>
                    <h4 class="news__head">${news.head}</h4>
                </a>
                </div>`
        });
        newsContainer.innerHTML+=newsContainerhtml
        newsList.innerHTML+=newsListhtml
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
searchInput.addEventListener('focus',function(){searchList.classList.add('open')})
searchInput.addEventListener('blur',function(){searchList.classList.remove('open')})
searchList.onmousedown=function(e){
    e.preventDefault();
    searchInput.value=e.target.innerText
}