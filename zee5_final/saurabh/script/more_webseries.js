var webseriesArr = JSON.parse(localStorage.getItem('webseries')) || []; 



function displayWebseries(webseriesArr) {
    document.querySelector(".more_container").innerHTML = "";

    webseriesArr.map(function (item, index) {
        var card = document.createElement('div');
        card.classList.add('card');

        var img = document.createElement('img');
        img.src = item.image;

        var text = document.createElement('div');
        text.classList.add('text');

        var name = document.createElement('h3');
        name.innerHTML = item.name;
        
        var text_bottom = document.createElement('div');


        text_bottom.classList.add('text_bottom');
        text_bottom.innerHTML = ` <a href="#"><i class="fa-solid fa-play"></i> Watch</a> 
        <p><i class="fa-solid fa-share-nodes"></i> More</p>`;

        text.append(name,text_bottom);

        card.append(img, text);
        document.querySelector(".more_container").append(card);



    });
    

}

displayWebseries(webseriesArr);


