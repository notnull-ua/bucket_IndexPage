/**
 * Created by Vladyslav on 28.02.2017.
 */
$().ready(function () {
    $('.big-slider-container').slick({
        'prevArrow':'<button type="button" class="slick-prev">Previous</button>',
        'nextArrow':'<button type="button" class="fa fa-arrow-left slick-next">Next</button>',
        'dots': true
    });

    $('.products-slider-container').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    var myLatLng = {lat: 50.293371, lng: 28.702225};
    var map = new google.maps.Map(document.getElementById('map'), {
        center:myLatLng,
        zoom: 19
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'А.ТОМ'
    });
});