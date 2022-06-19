




function navbar_video()
{
    return`

    <div class="navbar">
        <!-- <div> <img id="logo" src="hotstar.jpeg" > </div> -->
        <div><a href="../../index.html"><img id="zee5_logo" src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.66" alt="zee5_logo"></a></div>
        <div id="names">
            <h4><a href="../../index.html">Home</a></h4> 
            <h4><a href="/saurabh/tvshow.html">Tv Shows</a> </h4>
            <h4><a href="/saurabh/movies.html">Movies</a></h4>
            <h4><a href="/saurabh/webseries.html">Web Series</a></h4>
            <h4><a href="/saurabh/news.html">News </a></h4>
           </div>
           <!-- <ul class="nav_links">
            <li class="nav_item" id="home"><a href="#">home</a></li>
            <li class="nav_item"><a href="#">tv shows</a></li>
            <li class="nav_item"><a href="#">movies</a></li>
            <li class="nav_item"><a href="#">web series</a></li>
            <li class="nav_item"><a href="#">news</a></li>
        </ul> -->
            <div class="mg"> <span class="material-symbols-outlined" id="S_icon">search</span></div>
           <div class="search1">
            <!-- <input oninput="debounce(main,1000)" type="text"
             placeholder="Search Movie Title...." name="" id="search"> -->
             <input type="text" id="search" oninput="debounce(main,1000)" placeholder="Serach for Movies, Shows, Chammels etc" name="k">
             <div id="movies"></div> 
        </div>
        <span class="material-symbols-outlined" id="language">translate</span>
            
            <a id="log" href="/Ayesha/Zee5/login.html">login</a>

            <div id="buy">
                <img src="../kanad/scripts/crow.jpeg" alt="crown">
                <a href="/Kriti/Zee payment/myplans.html">buy plan</a>
            </div>

            <span id="Ham" class="material-symbols-outlined">menu
            </span>
        </div>
    
    `;
}

export default navbar_video