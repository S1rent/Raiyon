$(document).ready(function() {
    const dataSource = [
        {
            "title": "Steam Wallet IDR",
            "products": [
                {
                    "subTitle": "IDR 6.000",
                    "image": "Assets/steam.jpg"
                },
                {
                    "subTitle": "IDR 8.000",
                    "image": "Assets/steam.jpg"
                },
                {
                    "subTitle": "IDR 12.000",
                    "image": "Assets/steam.jpg"
                },
                {
                    "subTitle": "IDR 45.000",
                    "image": "Assets/steam.jpg"
                }
            ]
        },
        {
            "title": "Google Play Giftcard IDR",
            "products": [
                {
                    "subTitle": "IDR 5.000",
                    "image": "Assets/google.jpg"
                },
                {
                    "subTitle": "IDR 10.000",
                    "image": "Assets/google.jpg"
                }
            ]
        },
        {
            "title": "Playstation Network Card IDR",
            "products": [
                {
                    "subTitle": "IDR 100.000",
                    "image": "Assets/psn.jpg"
                },
                {
                    "subTitle": "IDR 200.000",
                    "image": "Assets/psn.jpg"
                },
                {
                    "subTitle": "IDR 225.000",
                    "image": "Assets/psn.jpg"
                }
            ]
        }
    ]

    for(var i=0;i<dataSource.length;i++){
        var subItems = ``
        
        for(var j=0;j<dataSource[i].products.length;j++) {
            subItems += `<div class="product"><img src="`+dataSource[i].products[j].image+`"> <p>`+dataSource[i].products[j].subTitle+`</p> </div>`
        }

        $('#article-section').append(
            `<article id="article-products" style="margin-top: 25px;">
                <h1>`+ dataSource[i].title +`</h1>
                <div id="articles" style="margin-top: 20px;">`+
                   subItems
                +`</div>
            </article>`
        );

        if(i != dataSource.length - 1){
            $('#article-section').append(
                `<div style="margin: 50px 0px; height: 5px; background-color: black;"></div>`
            )
        }
    }
});