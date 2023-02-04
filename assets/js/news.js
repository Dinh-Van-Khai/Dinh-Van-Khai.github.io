const newsContainer=document.querySelector('.new-container')
const newsList=document.querySelector('.')
fetch("../data/news.json")
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        var htmls=json.reduce((html,news)=>html+`
        <div class="grid__col-9-3 mobile__col-6">
        <a href="${news.href}" id="news${news.id}" class="news">
            <div class="news__img"></div>
            <h4 class="news__head">${news.head}</h4>
        </a>
        </div>
        `,'')
        newsContainer.innerHTML+=htmls
        console.log(htmls)
    })
    .catch(function(fail){
        alert("Lỗi: ",fail)
    })