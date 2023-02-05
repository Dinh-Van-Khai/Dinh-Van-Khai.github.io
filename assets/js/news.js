const newsContainer=document.querySelector('.new-container')
const newsList=document.querySelector('.aside')
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
                <li class="aside__item2"><a href="#news2">${news.head}</a></li>`
            newsContainerhtml+=`
                <div class="${gridSize}">
                <a href="${news.href}" id="news${news.id}" class="news" style="background: linear-gradient(0, ${news.color}, transparent 40%),url(${news.img}) center / cover no-repeat;">
                    <div class="news__img"></div>
                    <h4 class="news__head">${news.head}</h4>
                </a>
                </div>`
        });
        newsContainer.innerHTML+=newsContainerhtml
        newsList.innerHTML+=newsListhtml
        console.log(newsContainerhtml)
        console.log(newsListhtml)
    })
    .catch(function(fail){
        alert("Lỗi: ",fail)
    })
