var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var monthSwiper = new Swiper(".swiperMonth", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    rewind: true,
    grabCursor: true,
    effect: "coverflow",
    coverflowEffect: {
        coverShadow: '0px 8px 16px rgba(0, 0, 0, 0.6)',
        coverShadowOpacity: 0.7,
    },
});

// initial slide
var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;
monthSwiper.slideTo((currentMonth - 1));

// initial article list
updateArticleList((currentMonth - 1));

// console.log(monthSwiper.activeIndex);
monthSwiper.on('slideChange', function () {
    // console.log(monthSwiper.activeIndex);
    updateArticleList(monthSwiper.activeIndex);
});

monthSwiper.on('tap', function (event) {
    // console.log(event.clickedIndex);
    var clickedIndex = event.clickedIndex;
    monthSwiper.slideTo((clickedIndex - 1));
});

function updateArticleList(slideIndex) {
    var articleList = document.getElementById('articles');

    // Add article list content based on the selected slide
    switch (slideIndex) {
        case 0:
            hideAllArticleLists();
            document.getElementById('articles-list-0').style.display = 'block';
            break;
        case 1:
            hideAllArticleLists();
            document.getElementById('articles-list-1').style.display = 'block';
            break;
        case 2:
            hideAllArticleLists();
            document.getElementById('articles-list-2').style.display = 'block';
            break;
        case 3:
            hideAllArticleLists();
            document.getElementById('articles-list-3').style.display = 'block';
            break;
        case 4:
            hideAllArticleLists();
            document.getElementById('articles-list-4').style.display = 'block';
            break;
        case 5:
            hideAllArticleLists();
            document.getElementById('articles-list-5').style.display = 'block';
            break;
        case 6:
            hideAllArticleLists();
            document.getElementById('articles-list-6').style.display = 'block';
            break;
        case 7:
            hideAllArticleLists();
            document.getElementById('articles-list-7').style.display = 'block';
            break;
        case 8:
            hideAllArticleLists();
            document.getElementById('articles-list-8').style.display = 'block';
            break;
        case 9:
            hideAllArticleLists();
            document.getElementById('articles-list-9').style.display = 'block';
            break;
        case 10:
            hideAllArticleLists();
            document.getElementById('articles-list-10').style.display = 'block';
            break;
        case 11:
            hideAllArticleLists();
            document.getElementById('articles-list-11').style.display = 'block';
            break;
        default:
            articleList.innerHTML = '<p>No articles available</p>';
    }
}

function hideAllArticleLists() {
    var articleLists = document.querySelectorAll('.articles-list');
    articleLists.forEach(function (list) {
        list.style.display = 'none';
    });
}

