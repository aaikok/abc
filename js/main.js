//ハンバーガーメニュー
$(function () {
    $('.humburger-btn').on('click',function () {
        $('.humburger-menu').toggleClass('show')
    })
})

//フェードイン
$(function () {
    $('.skill-text,.service-item').on('inview',function(){
        $(this).addClass('fadeIn')
    })
})

//画像のスライダー
$(function () {
    $('.slider1').slick({
        autoplay:true,//自動でスクロール
        autoplaySpeed:0,//自動再生のスライド切り替えまでの時間設定
       speed:3000,//スライドが流れるまでの時間　ミリ秒表示　3000=3秒
        cssEase:"linear",//スライドの流れ方を等速に設定　ease-in
        slidesToShow:4,//表示するスライドの数
        swipe: false,//創作による切り替えをさせない
        arrows:false,//矢印非表示
        responsive: [  //画面幅に合わせた処理
            {
                breakpoint: 599,//表示幅が599px以下のとき
                settings: {
                    slidesToShow:3,//画面幅599px以下でスライド3枚表示
                }
            }
        ]
    })
})
$(function () {
    $('.slider2').slick({
        autoplay:true,
        autoplaySpeed:0,
        speed:3000,
        cssEase:"linear",
        slidesToShow:4,
        swipe: false,
        arrows:false,
        rtl:true,//逆向きを有効(true)にする
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow:3,//画面幅599px以下でスライド3枚表示
                }
            }
        ]
    })
})