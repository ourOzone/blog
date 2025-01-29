const mainContainer = document.getElementById("main_container");

function load_articles () {
    //헤더를 만들어요
    const header = document.createElement("header");
    header.textContent = "고민재의 블로그(대충만든 헤더)";
    mainContainer.append(header);

    //글컨테이너를 만들어요
    const articlesContainer = document.createElement("div");
    articlesContainer.id = "articlesContainer";
    articlesContainer.class = "articlesContainer";

    //글을 넣어요
    articles = get_articles();
    articles.forEach( (e) => {
        const article = document.createElement("div");
        article.className = "article";
        article.id = e.id;
        //제목, 개시판, 시간 만 표시할게요
        const title = document.createElement("div");
        title.className = "articleTitle";
        title.textContent = e.title;

        const info = document.createElement("div");
        info.className = "articleInfo";
        info.textContent = e.category + e.time;

        const thumbnail = document.createElement("div");
        thumbnail.className = "thumbnail";
        //TODO: 썸네일을 추가해요


        article.append(title, info, thumbnail);

        mainContainer.append(article);
    });

    //글쓰기 버튼을 추가해요
    const writeButton = document.createElement("button");
    writeButton.textContent = "글쓰기";
    writeButton.onclick = () => location.href = "write_page.html";
    mainContainer.append(writeButton);

}

function get_articles () {
    //리팩토링마렵다
    //일단 더미데이터로 채워넣어볼게요
    //썸네일은 일단 구현하지 않을게요
    articles = [
        {
            "id" : "id1",
            "title" : "더미데이터의 제목이에요",
            "author" : "고민재",
            "time" : "2003-12-24",
            "category" : "자유게시판",
            "views" : 12,
            "context" : [[["글의 예시"], ["우하하"]], [["아래에하나"], ["아래에둘"], ["아래에셋"]]],
            "comments" : []
        },
        
        {
            "id" : "id2",
            "title" : "두번째 글이에여",
            "author" : "디온",
            "time" : "2018-01-01",
            "category" : "자유게시판",
            "views" : 40,
            "context" : [[["글의 예시"], ["우하하"]], [["아래에하나"], ["아래에둘"], ["아래에셋"]]],
            "comments" : []
        }
    ]

    return articles;
}


load_articles()